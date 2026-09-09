const seoConfig = require('../config/seo');

module.exports = {
  // Robots.txt Handler
  getRobotsTxt(req, res) {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /
Allow: /public/
Allow: /css/
Allow: /js/
Allow: /images/

Disallow: /admin
Disallow: /admin/*
Disallow: /api/*
Disallow: /download-receipt/*

Sitemap: ${seoConfig.BASE_URL}/sitemap.xml
`);
  },

  // Sitemap.xml Handler
  getSitemapXml(req, res) {
    const pages = [
      { path: '/', priority: '1.0', changefreq: 'daily' },
      { path: '/about', priority: '0.8', changefreq: 'monthly' },
      { path: '/schedule', priority: '0.9', changefreq: 'weekly' },
      { path: '/glimpses', priority: '0.9', changefreq: 'weekly' },
      { path: '/social-work', priority: '0.8', changefreq: 'monthly' },
      { path: '/committee', priority: '0.7', changefreq: 'monthly' },
      { path: '/visitors', priority: '0.7', changefreq: 'monthly' },
      { path: '/advertisement', priority: '0.6', changefreq: 'monthly' },
      { path: '/contact', priority: '0.8', changefreq: 'monthly' },
      { path: '/donate', priority: '0.9', changefreq: 'weekly' }
    ];

    const today = new Date().toISOString().split('T')[0];

    const urls = pages.map(p => `  <url>
    <loc>${seoConfig.BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.type('application/xml');
    res.send(sitemap);
  }
};
