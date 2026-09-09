const http = require('http');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3001';

const ROUTES = [
  { path: '/', expectedStatus: 200, name: 'Home' },
  { path: '/about', expectedStatus: 200, name: 'About Us' },
  { path: '/schedule', expectedStatus: 200, name: 'Schedule' },
  { path: '/glimpses', expectedStatus: 200, name: 'Glimpses' },
  { path: '/social-work', expectedStatus: 200, name: 'Social Work' },
  { path: '/committee', expectedStatus: 200, name: 'Committee' },
  { path: '/visitors', expectedStatus: 200, name: 'Visitors' },
  { path: '/advertisement', expectedStatus: 200, name: 'Advertisement' },
  { path: '/contact', expectedStatus: 200, name: 'Contact' },
  { path: '/donate', expectedStatus: 200, name: 'Donate' },
  { path: '/robots.txt', expectedStatus: 200, name: 'Robots.txt' },
  { path: '/sitemap.xml', expectedStatus: 200, name: 'Sitemap.xml' },
  { path: '/non-existent-page-test-404', expectedStatus: 404, name: '404 Page' }
];

function fetchRoute(route) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}${route.path}`;
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', (err) => {
      resolve({
        route,
        error: err.message
      });
    });
  });
}

async function runAudit() {
  console.log(`\n=======================================================`);
  console.log(`🌺 Sahyadri Krida Mandal - Technical SEO Audit Suite`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  console.log(`=======================================================\n`);

  let passCount = 0;
  let failCount = 0;

  for (const route of ROUTES) {
    const res = await fetchRoute(route);

    if (res.error) {
      console.log(`❌ [FAIL] ${route.name} (${route.path}) - Fetch error: ${res.error}`);
      failCount++;
      continue;
    }

    const isStatusOk = res.statusCode === route.expectedStatus;
    const body = res.body || '';

    // Checks for HTML pages
    let titleMatch = body.match(/<title>([^<]+)<\/title>/i);
    let descMatch = body.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    let canonicalMatch = body.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    let schemaMatch = body.match(/<script\s+type=["']application\/ld\+json["']>/gi);

    const title = titleMatch ? titleMatch[1].trim() : 'NONE';
    const description = descMatch ? descMatch[1].trim() : 'NONE';
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : 'NONE';
    const schemaCount = schemaMatch ? schemaMatch.length : 0;

    if (isStatusOk) {
      console.log(`✅ [PASS] ${route.name} (${route.path})`);
      console.log(`   └─ Status: ${res.statusCode}`);
      if (route.path.endsWith('.txt') || route.path.endsWith('.xml')) {
        console.log(`   └─ Content-Type: ${res.headers['content-type']}`);
      } else {
        console.log(`   └─ Title: ${title}`);
        console.log(`   └─ Canonical: ${canonical}`);
        console.log(`   └─ JSON-LD Schemas: ${schemaCount}`);
      }
      passCount++;
    } else {
      console.log(`❌ [FAIL] ${route.name} (${route.path}) - Expected ${route.expectedStatus}, got ${res.statusCode}`);
      failCount++;
    }
    console.log(`-------------------------------------------------------`);
  }

  console.log(`\nAudit Results: ${passCount} Passed, ${failCount} Failed.`);
  process.exit(failCount > 0 ? 1 : 0);
}

runAudit();
