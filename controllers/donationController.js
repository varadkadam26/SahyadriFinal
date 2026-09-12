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
      activeTab: 'donate'
    });
  },

  // Download PDF Receipt
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
        donor_name, phone, email, amount, payment_ref
      } = req.body;

      if (!donor_name || !phone || !amount || parseFloat(amount) <= 0 || !payment_ref || !payment_ref.trim()) {
        return res.status(400).json({
          success: false,
          message: 'कृपया तुमचे नाव, मोबाईल नंबर, देणगी रक्कम व UTR नंबर भरा. (Please enter name, phone, amount and UTR Number.)'
        });
      }

      const donationData = {
        receipt_no: `SKM-REC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        donor_name: donor_name.trim(),
        phone: phone.trim(),
        email: (email || '').trim(),
        amount: parseFloat(amount),
        category: 'General Mandal Donation & Seva',
        payment_id: payment_ref.trim(),
        order_id: `qr_manual_${Date.now()}`,
        pan_number: '',
        status: 'PENDING'
      };

      const createdDonation = await db.createDonation(donationData);
      db.addLog('DONATION', `New QR Donation submitted (Pending Approval): ₹${createdDonation.amount} from ${createdDonation.donor_name} (UTR: ${createdDonation.payment_id})`);

      // Concurrently sync data to Google Sheets & Google Drive backup ONLY (No instant receipt email/SMS)
      Promise.allSettled([
        googleSheets.appendDonation(createdDonation),
        db.getDonations().then(donations => googleDrive.backupDatabaseToDrive({ donations, mockStore: db.mockStore }))
      ]).catch(err => console.error('Manual donation sync error:', err.message));

      res.json({
        success: true,
        receipt_no: createdDonation.receipt_no,
        message: 'जय गणेश! तुमची देणगी व यूटीआर (UTR) माहिती नोंदवली गेली आहे. मंडळ ॲडमिनद्वारे पडताळणी व मान्यता मिळाल्यानंतर अधिकृत देणगी पावती तुमच्या ईमेलवर पाठवली जाईल.'
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
