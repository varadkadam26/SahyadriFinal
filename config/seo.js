/**
 * Sahyadri Krida Mandal - Centralized SEO & Structured Data Configuration
 * Domain: https://sahyadrikridamandal.com
 */

const BASE_URL = 'https://sahyadrikridamandal.com';

const DEFAULT_SEO = {
  siteName: 'Sahyadri Krida Mandal',
  siteNameMr: 'सह्याद्री क्रीडा मंडळ',
  defaultImage: `${BASE_URL}/images/sahyadri-ganpati-01.jpg`,
  logoUrl: `${BASE_URL}/images/sahyadri_logo_transparent.png`,
  foundingYear: '1976',
  regNo: 'नो. क्र. एफ/७६२४ (मुंबई)',
  address: {
    street: 'Tilak Nagar Samaj Mandir Auditorium, opposite Building 22, Lokmanya Tilak Kridangan, Tilak Nagar, Chembur',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400089',
    country: 'IN'
  },
  phone: '+919619108866',
  email: 'sahyadrikm.r@gmail.com',
  sameAs: [
    'https://www.youtube.com/@sahyadrikridamandal.r',
    'https://www.facebook.com/sahyadrikridamandal.r/',
    'https://www.instagram.com/sahyadrikridamandal.r/?hl=en'
  ]
};

const PAGE_SEO = {
  home: {
    path: '/',
    titleEn: 'Sahyadri Krida Mandal | Famous Ganpati Mandal in Chembur, Mumbai (Est. 1976)',
    titleMr: 'सह्याद्री क्रीडा मंडळ | मुंबईतील प्रसिद्ध गणेशोत्सव मंडळ (स्थापना १९७६)',
    descEn: 'Official Portal of Sahyadri Krida Mandal (Est. 1976), Tilak Nagar, Chembur, Mumbai. Live Ganeshotsav Aarti Darshan, 10-year photo archives, social work & online donations.',
    descMr: 'सह्याद्री क्रीडा मंडळ (स्थापना १९७६), टिळक नगर, चेंबूर, मुंबई अधिकृत पोर्टल. साक्षात आरती दर्शन, १० वर्षांचे देखावे, सामाजिक कार्य आणि ऑनलाइन देणगी.',
    image: `${BASE_URL}/images/sahyadri-ganpati-01.jpg`
  },
  about: {
    path: '/about',
    titleEn: 'About Sahyadri Krida Mandal | 50 Years History & Golden Legacy (1976-2026)',
    titleMr: 'आमच्याबद्दल | सह्याद्री क्रीडा मंडळाचा ५० वर्षांचा सुवर्ण इतिहास (१९७६-२०२६)',
    descEn: 'Learn about the 50-year glorious history, vision, and social initiatives of Sahyadri Krida Mandal, established in 1976 at Tilak Nagar, Chembur, Mumbai.',
    descMr: '१९७६ साली स्थापन झालेल्या सह्याद्री क्रीडा मंडळाचा ५० वर्षांचा सुवर्ण इतिहास, सामाजिक दृष्टी व ध्येयाबद्दल सविस्तर माहिती.',
    image: `${BASE_URL}/images/sahyadri-decoration-palace.jpg`
  },
  schedule: {
    path: '/schedule',
    titleEn: 'Ganeshotsav 2026 Schedule & Maha Aarti Timings | Sahyadri Krida Mandal Chembur',
    titleMr: 'गणेशोत्सव २०२६ वेळापत्रक व महाआरती वेळ | सह्याद्री क्रीडा मंडळ चेंबूर',
    descEn: 'Complete 10-day Ganeshotsav 2026 event itinerary, daily Morning & Evening Maha Aarti timings (8 AM & 8 PM), Satyanarayan Pooja & Visarjan procession details.',
    descMr: '१० दिवसांचे गणेशोत्सव २०२६ संपूर्ण वेळापत्रक, दररोज सकाळी ८ व सायं. ८ वाजता महाआरती, सत्यनारायण पूजा व भव्य विसर्जन मिरवणूक माहिती.',
    image: `${BASE_URL}/images/sahyadri-decoration-temple.jpg`
  },
  glimpses: {
    path: '/glimpses',
    titleEn: 'Ganpati Photo Gallery & 10+ Years Retrospective | Sahyadri Krida Mandal',
    titleMr: 'क्षणचित्रे व दशकातील सुवर्ण प्रवास | सह्याद्री क्रीडा मंडळ फोटो गॅलरी',
    descEn: 'Explore 10+ years historical retrospective photo gallery of Sahyadri Krida Mandal idols, magnificent themes, royal wooden thrones, and celebrations.',
    descMr: 'सह्याद्री क्रीडा मंडळाच्या १०+ वर्षांच्या भव्य देखाव्यांचा, राजेशाही मूर्ती रूपांचा आणि ऐतिहासिक क्षणांचा फोटो संग्रह.',
    image: `${BASE_URL}/images/2024_new_1.png`
  },
  socialwork: {
    path: '/social-work',
    titleEn: 'Social Work & Seva Initiatives | Sahyadri Krida Mandal Chembur',
    titleMr: 'सामाजिक कार्य व सेवा उपक्रम | सह्याद्री क्रीडा मंडळ चेंबूर',
    descEn: 'Sahyadri Krida Mandal social initiatives: 50,000+ daily Annadan Mahaprasad, KEM Hospital blood donation camps, free healthcare & education aid.',
    descMr: 'सह्याद्री क्रीडा मंडळाचे सामाजिक उपक्रम: दैनिक ५०,००० भाविकांना अन्नदान महाप्रसाद, के.ई.एम. रक्तदान शिबीर, मोफत वैद्यकीय व शैक्षणिक मदत.',
    image: `${BASE_URL}/images/social_annadan.jpg`
  },
  committee: {
    path: '/committee',
    titleEn: 'Executive Committee 2026-27 | Sahyadri Krida Mandal Office Bearers',
    titleMr: 'कार्यकारिणी समिती २०२६-२७ | सह्याद्री क्रीडा मंडळ पदाधिकारी',
    descEn: 'Meet the dedicated office bearers and executive committee members leading Sahyadri Krida Mandal trust for 2026-27.',
    descMr: 'सन २०२६-२७ साठी सह्याद्री क्रीडा मंडळाचे नेतृत्व करणाऱ्या सन्माननीय पदाधिकारी व कार्यकारिणी सदस्यांची यादी.',
    image: `${BASE_URL}/images/sahyadri_logo_transparent.png`
  },
  visitors: {
    path: '/visitors',
    titleEn: 'Distinguished Visitors & Dignitaries | Sahyadri Krida Mandal Mumbai',
    titleMr: 'मान्यवर भेटी | सह्याद्री क्रीडा मंडळ मुंबई',
    descEn: 'Prominent celebrities, political leaders, and dignitaries who visited Sahyadri Krida Mandal Ganeshotsav in Chembur, Mumbai.',
    descMr: 'सह्याद्री क्रीडा मंडळाच्या गणेशोत्सवाला भेट दिलेल्या विविध क्षेत्रातील थोर मान्यवर, राजकारणी व कलाकारांचे दर्शन.',
    image: `${BASE_URL}/images/sahyadri-ganpati-01.jpg`
  },
  advertisement: {
    path: '/advertisement',
    titleEn: 'Festival Advertisement & Souvenir Sponsorship | Sahyadri Krida Mandal',
    titleMr: 'उत्सव जाहिरात व स्मरणिका प्रायोजकत्व | सह्याद्री क्रीडा मंडळ',
    descEn: 'Partner with Sahyadri Krida Mandal for Ganeshotsav 2026 souvenir advertisements, mandap banners, and digital sponsorships reaching 1M+ devotees.',
    descMr: '१० लाखांहून अधिक भाविकांपर्यंत पोहोचण्यासाठी सह्याद्री क्रीडा मंडळाच्या उत्सव स्मरणिका, मंडप बॅनर व डिजिटल प्रायोजकत्वात सहभागी व्हा.',
    image: `${BASE_URL}/images/sahyadri_logo_transparent.png`
  },
  contact: {
    path: '/contact',
    titleEn: 'Contact Sahyadri Krida Mandal | Mandap Location & Helpdesk Chembur',
    titleMr: 'आमचे संपर्क व मंडप स्थान | सह्याद्री क्रीडा मंडळ चेंबूर मुंबई',
    descEn: 'Contact Sahyadri Krida Mandal. Registered Office: Tilak Nagar, Chembur, Mumbai - 400089. Phone: +91 96191 08866. Google Maps location & contact form.',
    descMr: 'सह्याद्री क्रीडा मंडळाशी संपर्क साधा. नोंदणीकृत कार्यालय: टिळक नगर, चेंबूर, मुंबई - ४०००८९. फोन: +९१ ९६१९१ ०८८६६. गूगल मॅप्स लोकेशन व मदत केंद्र.',
    image: `${BASE_URL}/images/sahyadri_logo_transparent.png`
  },
  donate: {
    path: '/donate',
    titleEn: 'Donate to Sahyadri Krida Mandal | 80G Tax Exempt Online Donation',
    titleMr: 'ऑनलाइन देणगी द्या (८०जी कर सवलत) | सह्याद्री क्रीडा मंडळ',
    descEn: 'Support Sahyadri Krida Mandal Annadan Mahaprasad and healthcare initiatives. Get official 80G tax benefit receipt via UPI QR or Bank Transfer.',
    descMr: 'सह्याद्री क्रीडा मंडळाच्या अन्नदान महाप्रसाद व सामाजिक कार्यासाठी देणगी द्या. यूपीआय QR द्वारे बँक खात्यावर थेट देणगी देऊन त्वरित अधिकृत ८०जी कर सवलत पावती मिळवा.',
    image: `${BASE_URL}/images/sahyadri_qr.png`
  }
};

/**
 * Build page SEO payload for rendering in EJS headers
 */
function getPageSEO(pageKey, lang = 'mr', currentPath = '/') {
  const meta = PAGE_SEO[pageKey] || PAGE_SEO.home;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  const isMr = lang === 'mr';

  const title = isMr ? meta.titleMr : meta.titleEn;
  const description = isMr ? meta.descMr : meta.descEn;

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    'name': DEFAULT_SEO.siteName,
    'alternateName': DEFAULT_SEO.siteNameMr,
    'url': BASE_URL,
    'logo': {
      '@type': 'ImageObject',
      'url': DEFAULT_SEO.logoUrl
    },
    'foundingDate': DEFAULT_SEO.foundingYear,
    'telephone': DEFAULT_SEO.phone,
    'email': DEFAULT_SEO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': DEFAULT_SEO.address.street,
      'addressLocality': DEFAULT_SEO.address.city,
      'addressRegion': DEFAULT_SEO.address.state,
      'postalCode': DEFAULT_SEO.address.postalCode,
      'addressCountry': DEFAULT_SEO.address.country
    },
    'sameAs': DEFAULT_SEO.sameAs
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    'url': BASE_URL,
    'name': DEFAULT_SEO.siteName,
    'alternateName': DEFAULT_SEO.siteNameMr,
    'publisher': {
      '@id': `${BASE_URL}/#organization`
    },
    'inLanguage': ['mr-IN', 'en-IN']
  };

  // Breadcrumb Schema
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': isMr ? 'मुखपृष्ठ' : 'Home',
      'item': BASE_URL
    }
  ];

  if (currentPath && currentPath !== '/') {
    const pageTitleClean = title.split('|')[0].trim();
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': 2,
      'name': pageTitleClean,
      'item': canonicalUrl
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
  };

  // Event Schema for Festival Schedule
  let eventSchema = null;
  if (pageKey === 'schedule' || pageKey === 'home') {
    eventSchema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      'name': isMr ? 'सह्याद्री क्रीडा मंडळ गणेशोत्सव २०२६' : 'Sahyadri Krida Mandal Ganeshotsav 2026',
      'startDate': '2026-09-14T11:00:00+05:30',
      'endDate': '2026-09-25T23:59:59+05:30',
      'eventStatus': 'https://schema.org/EventScheduled',
      'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
      'location': {
        '@type': 'Place',
        'name': isMr ? 'टिळक नगर समाज मंदिर सभागृह' : 'Tilak Nagar Samaj Mandir Auditorium',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': DEFAULT_SEO.address.street,
          'addressLocality': DEFAULT_SEO.address.city,
          'addressRegion': DEFAULT_SEO.address.state,
          'postalCode': DEFAULT_SEO.address.postalCode,
          'addressCountry': DEFAULT_SEO.address.country
        }
      },
      'organizer': {
        '@id': `${BASE_URL}/#organization`
      },
      'image': [meta.image],
      'description': description
    };
  }

  const schemas = [organizationSchema, websiteSchema, breadcrumbSchema];
  if (eventSchema) schemas.push(eventSchema);

  return {
    title,
    description,
    canonicalUrl,
    image: meta.image,
    baseUrl: BASE_URL,
    schemas
  };
}

module.exports = {
  BASE_URL,
  DEFAULT_SEO,
  PAGE_SEO,
  getPageSEO
};
