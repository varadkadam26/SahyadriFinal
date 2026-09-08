const db = require('../config/db');
const twilio = require('../config/twilio');
const pdfController = require('./pdfController');
const googleSheets = require('../config/googleSheets');
const mailer = require('../config/mailer');
const googleDrive = require('../config/googleDrive');

module.exports = {
  // Render Donation Page
  renderDonationPage(req, res) {
    res.render('donate', {
      title: 'ऑनलाइन देणगी पोर्टल (८०जी कर सवलत) | Sahyadri Krida Mandal',
      activeTab: 'donate'
    });
  },

  // Download 80G PDF Receipt
  async downloadDonationReceipt(req, res) {
    const { receiptNo } = req.params;
    const donation = await db.getDonationByReceipt(receiptNo);

    if (!donation) {
      return res.status(404).send('Donation receipt not found.');
    }

    pdfController.generateDonationPDF(donation, res);
  },

  // Submit Manual QR Code Payment with Screenshot Upload
  async submitManualQRDonation(req, res) {
    try {
      const {
        donor_name, phone, email, amount,
        category, pan_number, payment_ref
      } = req.body;

      if (!donor_name || !phone || !amount || parseFloat(amount) <= 0) {
        return res.status(400).json({
          success: false,
          message: 'कृपया तुमचे नाव, मोबाईल नंबर व देणगी रक्कम भरा. (Please enter your name, phone number, and donation amount.)'
        });
      }

      const donationData = {
        receipt_no: `MCC-REC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        donor_name: donor_name.trim(),
        phone: phone.trim(),
        email: (email || '').trim(),
        amount: parseFloat(amount),
        category: category || 'General Mandal Donation & Seva',
        payment_id: (payment_ref || '').trim() || `UPI_${Date.now()}`,
        order_id: `qr_manual_${Date.now()}`,
        pan_number: (pan_number || '').toUpperCase().trim(),
        status: 'SUCCESS'
      };

      const createdDonation = await db.createDonation(donationData);
      db.addLog('DONATION', `New QR Donation received: ₹${createdDonation.amount} from ${createdDonation.donor_name} (UTR: ${createdDonation.payment_id})`);

      // Generate 80G PDF Receipt Buffer
      let pdfBuffer = null;
      try {
        pdfBuffer = await pdfController.generateDonationPDFBuffer(createdDonation);
      } catch (err) {
        console.error('PDF receipt buffer generation error:', err.message);
      }

      const screenshotPath = req.file ? req.file.path : null;

      // Concurrently dispatch Email with PDF Receipt Attachment, Google Sheets sync, & Google Drive backup
      Promise.allSettled([
        mailer.sendDonationEmail(createdDonation, pdfBuffer, screenshotPath),
        googleSheets.appendDonation(createdDonation),
        db.getDonations().then(donations => googleDrive.backupDatabaseToDrive({ donations, mockStore: db.mockStore }))
      ]).catch(err => console.error('Manual donation sync error:', err.message));

      // Dispatch SMS notification via Twilio
      twilio.sendDonationReceiptSMS(createdDonation).catch(err => console.error('Donation SMS error:', err));

      res.json({
        success: true,
        receipt_no: createdDonation.receipt_no,
        message: 'जय गणेश! तुमची देणगी व पेमेंट स्क्रीनशॉट यशस्वीरित्या नोंदवले गेले आहेत. अधिकृत ८०जी पावती ईमेलवर पाठवली गेली आहे.'
      });
    } catch (err) {
      console.error('Submit manual QR donation error:', err);
      res.status(500).json({
        success: false,
        message: 'देणगी माहिती नोंदवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.'
      });
    }
  }
};
