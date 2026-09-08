# Google Search Console Setup & Verification Guide

Official Guide for **Sahyadri Krida Mandal** (`https://sahyadrikridamandal.com/`)

---

## Step 1: Add Property in Google Search Console

1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Select **Domain** property type and enter:
   `sahyadrikridamandal.com`

---

## Step 2: Verify Domain Ownership via DNS

1. Copy the `google-site-verification=...` TXT record provided by Google Search Console.
2. Log in to your domain registrar (e.g., GoDaddy, Cloudflare, Namecheap).
3. Add a new **TXT Record**:
   - **Host / Name**: `@`
   - **Value / Content**: `google-site-verification=...`
   - **TTL**: Auto or 3600
4. Return to Search Console and click **Verify**.

---

## Step 3: Submit Official XML Sitemap

1. In Search Console, select `sahyadrikridamandal.com` property.
2. Go to **Sitemaps** from the left navigation menu.
3. In **Add a new sitemap**, enter:
   `https://sahyadrikridamandal.com/sitemap.xml`
4. Click **Submit**.

---

## Step 4: Verify Robots.txt Access

1. Open `https://sahyadrikridamandal.com/robots.txt` in browser.
2. Confirm the following output is active:

```text
User-agent: *
Allow: /
Allow: /public/
Allow: /css/
Allow: /js/
Allow: /images/

Disallow: /admin
Disallow: /admin/*
Disallow: /api/*
Disallow: /download-receipt/*

Sitemap: https://sahyadrikridamandal.com/sitemap.xml
```

---

## Step 5: Request Indexing for Key Pages

Use the **URL Inspection Tool** in Google Search Console for:
1. `https://sahyadrikridamandal.com/`
2. `https://sahyadrikridamandal.com/about`
3. `https://sahyadrikridamandal.com/schedule`
4. `https://sahyadrikridamandal.com/glimpses`
5. `https://sahyadrikridamandal.com/social-work`
6. `https://sahyadrikridamandal.com/donate`

Click **Request Indexing** after each inspection.

---

## Step 6: Ongoing Monitoring Checklist

- **Core Web Vitals**: Check Mobile LCP, INP, and CLS performance monthly.
- **Structured Data Enhancements**: Monitor Organization, Event, and BreadcrumbList schemas.
- **Coverage / Indexing**: Ensure 0 unintended 404s or indexation blocks.
