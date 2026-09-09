const express = require('express');
const router = express.Router();
const yatraController = require('../controllers/yatraController');
const contactController = require('../controllers/contactController');

// Home & About Routes
router.get('/', yatraController.renderHomePage);
router.get('/about', yatraController.renderAboutPage);

// Festival Schedule & API Routes
router.get('/schedule', yatraController.renderSchedulePage);
router.get('/api/live-status', yatraController.getLiveStatusApi);

// Glimpses & Decade Gallery Combined
router.get('/glimpses', yatraController.renderGlimpsesPage);
router.get('/photo-booth', (req, res) => res.redirect(301, '/glimpses'));

// Social Work Page (Separate Page & Photos)
router.get('/social-work', yatraController.renderSocialWorkPage);

// Executive Committee Page (Public - Separate from Admin Login)
router.get('/committee', yatraController.renderCommitteePage);

// Distinguished Visitors (Celebrities & Politicians)
router.get('/visitors', (req, res) => {
  res.render('visitors', {
    activeTab: 'visitors'
  });
});

// Advertisement Page
router.get('/advertisement', (req, res) => {
  res.render('advertisement', {
    activeTab: 'advertisement'
  });
});

// Contact Us Page (With Embedded Google Maps)
router.get('/contact', (req, res) => {
  res.render('contact', {
    activeTab: 'contact'
  });
});
const seoController = require('../controllers/seoController');

// Technical SEO Routes
router.get('/robots.txt', seoController.getRobotsTxt);
router.get('/sitemap.xml', seoController.getSitemapXml);


module.exports = router;
