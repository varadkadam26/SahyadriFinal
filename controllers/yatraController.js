const db = require('../config/db');

// Ganeshotsav Event Schedule Data for Sahyadri Krida Mandal
const SCHEDULE_LOCATION_EN = 'Tilak Nagar Samaj Mandir Auditorium, opposite Building 22, Lokmanya Tilak Kridangan, Tilak Nagar, Chembur, Mumbai - 400089';
const SCHEDULE_LOCATION_MR = 'टिळक नगर समाज मंदिर सभागृह, लोकमान्य टिळक क्रीडांगण, इमारत २२ समोर, टिळक नगर, चेंबूर, मुंबई- ४०००८९.';

const scheduleData = [
  { day: 1, dateMr: 'सोमवार १४ सप्टेंबर २०२६, सकाळी ११:०० वा.', dateEn: 'Monday 14 September 2026, 11:00 AM', titleMr: '"श्रीं" ची स्थापना, पूजा, आरती', titleEn: 'Ganpati Sthapana, Pooja, Aarti' },
  { day: 2, dateMr: 'सोमवार १४ सप्टेंबर २०२६, सायं. ६:०० वा.', dateEn: 'Monday 14 September 2026, 6:00 PM', titleMr: 'उत्सव सजावटीचा उद्घाटन सोहळा', titleEn: 'Festival Decoration Inauguration Ceremony' },
  { day: 3, dateMr: 'सोमवार १४ सप्टेंबर २०२६, सायं. ६:३० वा.', dateEn: 'Monday 14 September 2026, 6:30 PM', titleMr: 'उत्सव स्मरणिकेचा प्रकाशन सोहळा', titleEn: 'Festival Souvenir Publication Ceremony' },
  { day: 4, dateMr: 'बुधवार २३ सप्टेंबर २०२६, दुपारी १:०० वा.', dateEn: 'Wednesday 23 September 2026, 1:00 PM', titleMr: 'श्री सत्यनारायणाची महापूजा', titleEn: 'Shri Satyanarayan Mahapooja' },
  { day: 5, dateMr: 'बुधवार २३ सप्टेंबर २०२६, सायं. ६:०० वा.', dateEn: 'Wednesday 23 September 2026, 6:00 PM', titleMr: 'हळदीकुंकू समारंभ', titleEn: 'Haldi Kunku Ceremony' },
  { day: 6, dateMr: 'गुरुवार २४ सप्टेंबर २०२६, रात्री १२:०० वा.', dateEn: 'Thursday 24 September 2026, 12:00 AM (Midnight)', titleMr: 'महाआरती', titleEn: 'Maha Aarti' },
  { day: 7, dateMr: 'शुक्रवार २५ सप्टेंबर २०२६, दुपारी १२:०० वा.', dateEn: 'Friday 25 September 2026, 12:00 PM (Noon)', titleMr: '"श्री" ची भव्य मिरवणूक आणि विसर्जन', titleEn: 'Grand Procession & Visarjan' },
  { day: 8, dateMr: '१५ ते २४ सप्टेंबर २०२६, दुपारी २:०० ते ४:००', dateEn: '15 to 24 September 2026, 2:00 PM to 4:00 PM', titleMr: '"श्री" समोर विविध भजनांचा कार्यक्रम', titleEn: 'Various Bhajan Programs in front of Shri' },
  { day: 9, dateMr: '१५ ते २५ सप्टें., दु. १२:०० वा. व १४ ते २४ सप्टें. रात्री ८:३० वा.', dateEn: 'Daily Aarti & Pooja (Noon & 8:30 PM)', titleMr: '"श्री" ची रोजची पूजा, आरती व नैवेद्य', titleEn: 'Daily Shri Pooja, Aarti & Naivedya' }
];

// Glimpses over a Decade (10+ Years Historical Retrospective Data)
const glimpsesData = [
  { year: '2025', category: 'idols', titleMr: 'रौप्यवर्णी महादेव अवतार', titleEn: 'Silver Mahadev Avatar', themeMr: 'शिव-गणेश रूप', themeEn: 'Shiva-Ganesha Fusion', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-palace.jpg', descMr: 'हातात त्रिशूळ, डमरू आणि शिवलिंगावर विराजमान झालेले चांदीच्या रंगातील श्रीरूप.', descEn: 'A stunning silver-hued Ganesha holding a Trishul and Damaru, resting on a Shiva Linga.' },
  { year: '2024', category: 'decorations', titleMr: 'भव्य हनुमान देखावा (२०२४)', titleEn: 'Grand Hanuman Pandal (2024)', themeMr: 'हनुमान आणि रामभक्ती', themeEn: 'Hanuman & Devotion', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2024/2024_new_1.png', descMr: 'रात्रीच्या रोषणाईत उजळून निघालेला भव्य हनुमान मूर्तीसह आकर्षक मंडप.', descEn: 'A spectacular night view of the pandal featuring a massive Lord Hanuman statue.' },
  { year: '2024', category: 'decorations', titleMr: 'हनुमान मूर्ती (२०२४)', titleEn: 'Lord Hanuman Statue (2024)', themeMr: 'वीर हनुमान', themeEn: 'Veer Hanuman', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2024/2024_new_2.png', descMr: 'हातात गदा घेतलेल्या भव्य हनुमान मूर्तीचे विलोभनीय जवळचे दृश्य.', descEn: 'A magnificent close-up of the giant Lord Hanuman statue holding his mace.' },
  { year: '2024', category: 'idols', titleMr: 'श्री दर्शन (२०२४)', titleEn: 'Ganesha Darshan (2024)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2024/2024_new_3.jpg', descMr: 'आकर्षक सजावट आणि तारकाकृती पार्श्वभूमीत विराजमान झालेले श्रींचे सुंदर रूप.', descEn: 'Lord Ganesha beautifully seated against a stunning star-shaped decorative backdrop.' },
  { year: '2024', category: 'decorations', titleMr: 'राम दरबार देखावा (२०२४)', titleEn: 'Ram Darbar Interior (2024)', themeMr: 'राम दरबार', themeEn: 'Ram Darbar', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2024/2024_new_4.jpg', descMr: 'प्रभू श्रीराम, माता सीता, लक्ष्मण आणि हनुमान यांच्या मूर्तींनी सजलेला भव्य आतील दरबार.', descEn: 'A grand interior hall showcasing divine statues of Ram, Sita, Lakshman, and Hanuman.' },
  { year: '2023', category: 'idols', titleMr: 'वीणाधारी सरस्वती अवतार', titleEn: 'Saraswati Avatar with Veena', themeMr: 'संगीत आणि ज्ञानाचे प्रतीक', themeEn: 'Music and Knowledge', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-temple.jpg', descMr: 'हातात वीणा आणि सोबत हंस असलेले श्रींचे संगीतमय पांढरे रूप.', descEn: 'A pure white depiction of Ganesha holding a Veena, symbolizing knowledge and music.' },
  { year: '2023', category: 'idols', titleMr: 'श्री दर्शन (२०२३)', titleEn: 'Ganesha Darshan (2023)', themeMr: 'मयूर मुकुट व त्रिशूळ', themeEn: 'Peacock Crown & Trishul', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2023/2023_new_1.png', descMr: 'मयूर मुकुटात आणि त्रिशूळ धारण केलेले श्रींचे विलोभनीय रूप.', descEn: 'A beautiful idol of Lord Ganesha adorned with a peacock feather crown holding a trishul.' },
  { year: '2023', category: 'idols', titleMr: 'श्री दर्शन - समोरचे दृश्य (२०२३)', titleEn: 'Ganesha Darshan - Front View (2023)', themeMr: 'मयूर मुकुट दर्शन', themeEn: 'Peacock Crown Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses/2023/2023_new_2.png', descMr: 'मयूर मुकुटात शोभून दिसणारे श्रींचे समोरून मनमोहक रूप.', descEn: 'A front view of Lord Ganesha beautifully adorned with a peacock feather crown.' },


  { year: '2018', category: 'idols', titleMr: 'श्री दर्शन - अश्वस्तंभ मखर (२०१८)', titleEn: 'Ganesha Darshan - Horse Pillar Sanctum (2018)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2018_1.jpg', descMr: 'भव्य कोरीव दगडी मखरात, अश्वारूढ स्तंभांच्या आणि फळांच्या नैवेद्यासमोर विराजमान झालेले श्रींचे विलोभनीय रूप.', descEn: 'Lord Ganesha gloriously seated inside an intricately carved sanctum flanked by warrior horse pillars.', hideFromReel: true },
  { year: '2018', category: 'decorations', titleMr: 'प्रभू श्री राम व अयोध्या राम मंदिर देखावा (२०१८)', titleEn: 'Prabhu Shri Ram & Ayodhya Ram Mandir (2018)', themeMr: 'प्रभू श्री राम व राम मंदिर देखावा', themeEn: 'Prabhu Shri Ram & Ram Mandir Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2018_2.png', descMr: 'रात्रीच्या सोनेरी रोषणाईत उजळून निघालेले प्रस्तावित भव्य राम मंदिर आणि धनुर्धारी प्रभू श्री रामांची भव्य मूर्ती.', descEn: 'Majestic illuminated Ayodhya Ram Mandir replica at night fronted by the heroic statue of Lord Rama.', hideFromReel: true },
  { year: '2018', category: 'decorations', titleMr: 'राम मंदिर भव्य आतील सभामंडप देखावा (२०१८)', titleEn: 'Ram Mandir Grand Interior Hall (2018)', themeMr: 'राम दरबार सभामंडप सजावट', themeEn: 'Ram Darbar Hall Architecture', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2018_3.jpg', descMr: 'श्री राम नामांकित सुवर्ण वेलबुट्टी छत, कोरीव खांब आणि ऐतिहासिक चित्रांनी सजलेला भव्य सभामंडप.', descEn: 'Stunning interior hall featuring gold scroll rafters inscribed with Sri Ram and elephant-carved columns.', hideFromReel: true },
  { year: '2018', category: 'decorations', titleMr: 'भव्य अयोध्या राम मंदिर मंडप देखावा (२०१८)', titleEn: 'Grand Ayodhya Ram Mandir Pandal (2018)', themeMr: 'प्रस्तावित अयोध्या राम मंदिर प्रतिकृती', themeEn: 'Ayodhya Ram Mandir Architecture Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2018_4.png', descMr: 'दिवसाच्या प्रकाशात दिसणारी प्रस्तावित अयोध्या राम मंदिराची भव्य आणि देखणी हुबेहूब प्रतिकृती.', descEn: 'Panoramic daytime view of the awe-inspiring Ayodhya Ram Mandir replica with its magnificent shikhars.', hideFromReel: true },
  { year: '2017', category: 'decorations', titleMr: 'जय जवान, जय किसान, जय विज्ञान स्मारक देखावा (२०१७)', titleEn: 'Jai Jawan, Jai Kisan, Jai Vigyan Theme (2017)', themeMr: 'भारतीय सैन्य व हिमालयीन चौकी देखावा', themeEn: 'Indian Armed Forces & Siachen Post Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2017_1.jpg', descMr: 'हिमालयीन पर्वताच्या पार्श्वभूमीवर उभारलेले राष्ट्रीय स्मारक व भारतीय जवानांचे शौर्य दर्शन.', descEn: 'Spectacular snow mountain military post setting honoring Indian armed forces, farmers and scientists.', hideFromReel: true },
  { year: '2017', category: 'idols', titleMr: 'तिरंगा रोषणाई व भव्य कमानीत श्री दर्शन (२०१७)', titleEn: 'Tricolor Illumination & Ganesha Darshan (2017)', themeMr: 'पारंपारिक दर्शन व देशभक्ती रोषणाई', themeEn: 'Traditional Darshan & Tricolor Illuminations', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2017_2.jpg', descMr: 'भव्य राष्ट्रध्वज तिरंगा रोषणाई आणि फुलांच्या कमानीत विराजमान झालेले श्रींचे विलोभनीय रूप.', descEn: 'Lord Ganesha radiating divine grace inside an enormous tricolor-lit floral sanctum arch.', hideFromReel: true },
  { year: '2017', category: 'decorations', titleMr: 'ब्राह्मोस क्षेपणास्त्र, कृषी व विज्ञान दालन देखावा (२०१७)', titleEn: 'BrahMos Missile, Agriculture & Science Pavilion (2017)', themeMr: 'संरक्षण व विज्ञान गौरव दालन', themeEn: 'Defense & Scientific Achievement Pavilion', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2017_3.jpg', descMr: 'ब्राह्मोस क्षेपणास्त्र, भारतीय शेतकरी, जवान आणि थोर विचारवंतांच्या कार्याचा गौरव करणारा भव्य मार्ग.', descEn: 'Exhibition tunnel featuring BrahMos missile model, agricultural heritage and national visionary leaders.', hideFromReel: true },
  { year: '2017', category: 'decorations', titleMr: 'इस्रो GSLV MK III रॉकेट प्रतिकृती (२०१७)', titleEn: 'ISRO GSLV MK III Rocket Model (2017)', themeMr: 'भारतीय अंतराळ संशोधन गौरव', themeEn: 'Indian Space Research Glory', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2017_4.png', descMr: 'इस्रोच्या ऐतिहासिक GSLV MK III अंतराळ रॉकेटची भव्य व हुबेहूब प्रतिकृती.', descEn: 'Massive life-size replica of ISRO GSLV MK III heavy-lift rocket with national emblem.', hideFromReel: true },
  { year: '2016', category: 'decorations', titleMr: 'भव्य पॅगोडा मंदिर देखावा (२०१६)', titleEn: 'Grand Chinese Pagoda Pandal (2016)', themeMr: 'प्राच्य पॅगोडा स्थापत्य देखावा', themeEn: 'Oriental Pagoda Architecture Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2016_1.jpg', descMr: 'लाल आणि पिवळ्या रंगातील चायनीज पॅगोडाच्या धर्तीवर उभारलेला आकर्षक मंडप देखावा.', descEn: 'Spectacular Chinese pagoda-themed grand entrance facade illuminated with vibrant lanterns.', hideFromReel: true },
  { year: '2016', category: 'decorations', titleMr: 'पारंपरिक तोरण व कंदील प्रवेशद्वार (२०१६)', titleEn: 'Traditional Chinese Arch & Lantern Gate (2016)', themeMr: 'चिनी कंदील व तोरण सजावट', themeEn: 'Chinese Lanterns & Arch Decor', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2016_2.jpg', descMr: 'विटांच्या भिंती आणि लाल कंदिलांनी सजलेले पारंपरिक चायनीज तोरण प्रवेशद्वार.', descEn: 'Traditional oriental gateway with curved green tiled roof and glowing red lanterns.', hideFromReel: true },
  { year: '2016', category: 'idols', titleMr: 'श्री दर्शन - पॅगोडा शैली मखर (२०१६)', titleEn: 'Ganesha Darshan - Pagoda Sanctum (2016)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2016_3.jpg', descMr: 'विटांची पार्श्वभूमी, गोलाकार खिडक्या आणि कंदिलांच्या प्रकाशात विराजमान झालेले श्रींचे सुंदर रूप.', descEn: 'Lord Ganesha elegantly seated within the oriental brick sanctum adorned with hanging lanterns.', hideFromReel: true },
  { year: '2016', category: 'decorations', titleMr: 'कुंग फू पांडा व व्हिलेज देखावा (२०१६)', titleEn: 'Kung Fu Panda Village Theme (2016)', themeMr: 'कुंग फू पांडा अॅनिमेशन देखावा', themeEn: 'Kung Fu Panda Animated Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2016_4.jpg', descMr: 'लहान मुलांचे खास आकर्षण ठरलेला कुंग फू पांडा आणि चिमुकल्या पांडांचा मनमोहक देखावा.', descEn: 'Exciting Kung Fu Panda martial arts setting featuring Po and baby pandas in an ancient oriental village.', hideFromReel: true },
  { year: '2015', category: 'decorations', titleMr: 'भव्य राजवाडा मंडप देखावा - दिवसाचे दृश्य (२०१५)', titleEn: 'Grand Royal Palace Pandal - Day View (2015)', themeMr: 'ऐतिहासिक राजवाडा देखावा', themeEn: 'Historic Royal Palace Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2015_1.png', descMr: 'भव्य ऐतिहासिक राजवाड्याच्या धर्तीवर उभारलेला नयनरम्य मंडप व सजवलेली बैलजोडी.', descEn: 'Magnificent historic palace-themed facade captured in daylight with adorned royal bullock statues.', hideFromReel: true },
  { year: '2015', category: 'idols', titleMr: 'सुवर्णमयी श्री दर्शन (२०१५)', titleEn: 'Golden Ganesha Darshan (2015)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2015_2.png', descMr: 'भव्य सुवर्ण सिंहासनावर आणि फुलांच्या मखरात विराजमान झालेले श्रींचे विलोभनीय रूप.', descEn: 'Lord Ganesha gloriously seated on the grand golden lion throne adorned with flowers.', hideFromReel: true },
  { year: '2015', category: 'decorations', titleMr: 'भव्य राजवाडा मंडप देखावा - रात्रीचे दृश्य (२०१५)', titleEn: 'Grand Royal Palace Pandal - Night View (2015)', themeMr: 'ऐतिहासिक राजवाडा देखावा', themeEn: 'Historic Royal Palace Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2015_3.png', descMr: 'रात्रीच्या सोनेरी रोषणाईत झगमगणारा भव्य राजवाडा थीमवरील मंडप.', descEn: 'The magnificent royal palace pandal brilliantly illuminated with golden lights at night.', hideFromReel: true },
  { year: '2015', category: 'decorations', titleMr: 'राजवाडा भव्य आतील दरबार (२०१५)', titleEn: 'Grand Royal Palace Interior Darbar (2015)', themeMr: 'राजेशाही दरबार सजावट', themeEn: 'Royal Darbar Interior Decor', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2015_4.jpg', descMr: 'झुंबर, खांब आणि लाल गालिच्यांनी सजलेला अथांग राजेशाही दरबार हॉल देखावा.', descEn: 'Spacious and regal interior palace darbar hall with ornate chandeliers and red carpet.', hideFromReel: true },
  { year: '2014', category: 'decorations', titleMr: 'वाराणसी घाट व शिवभक्ती देखावा कॉरिडॉर (२०१४)', titleEn: 'Varanasi Ghats & Shiva Murals Corridor (2014)', themeMr: 'काशी-वाराणसी घाट देखावा', themeEn: 'Kashi Varanasi Ghats Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2014_1.jpg', descMr: 'वाराणसीचे पवित्र घाट आणि भगवान शंकराच्या चित्रांनी सजलेला मनमोहक कॉरिडॉर देखावा.', descEn: 'Magnificent corridor adorned with holy Varanasi ghats and Shiva mural paintings.', hideFromReel: true },
  { year: '2014', category: 'decorations', titleMr: 'काशी विश्वनाथ रेखाटन व कला देखावा (२०१४)', titleEn: 'Kashi Vishwanath Sketch Art & Murals (2014)', themeMr: 'वाराणसी कलाकृती व रेखाटने', themeEn: 'Varanasi Charcoal Artwork Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2014_2.png', descMr: 'काशी विश्वनाथ आणि साधूंच्या व्यक्तिमत्त्वाचे अप्रतिम कृष्णधवल रेखाटन प्रदर्शन देखावा.', descEn: 'Stunning charcoal sketch mural depicting Kashi ghats and ascetic spirituality.', hideFromReel: true },
  { year: '2014', category: 'decorations', titleMr: 'भव्य मंदिर प्रवेशद्वार व छत्र देखावा (२०१४)', titleEn: 'Grand Temple Entrance & Royal Canopy (2014)', themeMr: 'मंदिर स्थापत्य व राजेशाही छत्री', themeEn: 'Temple Architecture & Royal Umbrellas', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2014_3.jpg', descMr: 'राजेशाही छत्र्या आणि भगव्या ध्वजांनी सजलेले भव्य काशी मंदिर प्रवेशद्वार.', descEn: 'Grand temple entrance facade adorned with ceremonial royal umbrellas and sacred flags.', hideFromReel: true },
  { year: '2014', category: 'idols', titleMr: 'श्री दर्शन - भव्य सिंहासन (२०१४)', titleEn: 'Ganesha Darshan - Royal Throne (2014)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2014_4.png', descMr: 'भव्य सिंहासनावर आणि फळ-नैवेद्याच्या साक्षीने विराजमान झालेले श्रींचे मनमोहक रूप.', descEn: 'Lord Ganesha serenely seated on the majestic lion-carved royal throne.', hideFromReel: true },
  { year: '2013', category: 'decorations', titleMr: 'भारतीय चित्रपटसृष्टीची १०० वर्षे - भव्य देखावा (२०१३)', titleEn: '100 Years of Indian Cinema - Grand Corridor (2013)', themeMr: 'चित्रपटसृष्टी शताब्दी देखावा', themeEn: 'Centenary of Indian Cinema', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2013_1.jpg', descMr: 'भारतीय चित्रपटसृष्टीच्या १०० वर्षांच्या प्रवासावर आधारित भव्य कॉरिडॉर देखावा.', descEn: 'Spectacular grand corridor celebration marking 100 years of Indian cinema.', hideFromReel: true },
  { year: '2013', category: 'decorations', titleMr: 'शाहरुख खान व जागतिक प्रतिकृती देखावा (२०१३)', titleEn: 'Shah Rukh Khan & Global Landmarks (2013)', themeMr: 'बॉलिवूड व जागतिक आकर्षण', themeEn: 'Bollywood & World Icons', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2013_2.jpg', descMr: 'आयफेल टॉवर आणि बॉलिवूड सिल्व्हर स्क्रीनसह शाहरुख खान यांची प्रसिद्ध मुद्रा देखावा.', descEn: 'Iconic open-arms pose of Shah Rukh Khan flanked by global landmarks and film reels.', hideFromReel: true },
  { year: '2013', category: 'idols', titleMr: 'श्री दर्शन व गानकोकिळा लता मंगेशकर (२०१३)', titleEn: 'Ganesha Darshan & Lata Mangeshkar (2013)', themeMr: 'पारंपारिक दर्शन व संगीतरत्न', themeEn: 'Traditional Darshan & Musical Legend', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2013_3.jpg', descMr: 'भव्य सिंहासनावर विराजमान झालेले श्री व भारतरत्न लता मंगेशकर यांची प्रतिकृती.', descEn: 'Lord Ganesha on the ornate golden throne alongside Bharat Ratna Lata Mangeshkar.', hideFromReel: true },
  { year: '2013', category: 'decorations', titleMr: 'शोले देखावा - जय आणि वीरू (२०१३)', titleEn: 'Sholay Theme - Jai & Veeru (2013)', themeMr: 'शोले - अजरामर चित्रपट देखावा', themeEn: 'Iconic Sholay Film Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2013_4.jpg', descMr: 'शोले चित्रपटातील प्रसिद्ध मोटारसायकल, पाण्याची टाकी आणि जय-वीरू यांची प्रतिकृती.', descEn: 'Legendary Sholay movie scene recreated with Jai and Veeru on the iconic motorbike.', hideFromReel: true },
  { year: '2012', category: 'decorations', titleMr: 'भव्य राजवाडा मंडप देखावा (२०१२)', titleEn: 'Grand Castle Pandal (2012)', themeMr: 'काल्पनिक राजवाडा', themeEn: 'Fairytale Castle Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2012_1.jpg', descMr: 'सह्याद्री क्रीडा मंडळाचा भव्य काल्पनिक राजवाडा थीमवरील आकर्षक देखावा व रोषणाई.', descEn: 'The grand fairytale castle-themed pandal facade with spectacular illuminations.', hideFromReel: true },
  { year: '2012', category: 'decorations', titleMr: 'मशरूम व जंगल देखावा (२०१२)', titleEn: 'Giant Mushroom & Forest Pandal (2012)', themeMr: 'काल्पनिक वन देखावा', themeEn: 'Fantasy Forest Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2012_2.jpg', descMr: 'भव्य मशरूम आणि प्राण्यांच्या प्रतिकृतींनी सजलेला मनमोहक आतील देखावा.', descEn: 'Mesmerizing interior tunnel decor featuring giant glowing mushrooms and forest creations.', hideFromReel: true },
  { year: '2012', category: 'idols', titleMr: 'श्री दर्शन (२०१२)', titleEn: 'Ganesha Darshan (2012)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2012_3.png', descMr: 'फुलांच्या कमानीत आणि पारंपरिक पितांबरात विराजमान झालेले श्रींचे विलोभनीय रूप.', descEn: 'Lord Ganesha beautifully adorned with a floral arch and traditional silks.', hideFromReel: true },
  { year: '2012', category: 'decorations', titleMr: 'गुहा मार्ग व देखावा (२०१२)', titleEn: 'Fantasy Cave Walkway (2012)', themeMr: 'काल्पनिक गुहा देखावा', themeEn: 'Fantasy Cave Walkway', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2012_4.jpg', descMr: 'रंगीबेरंगी पात्रांनी सजलेली गुहा व श्री दर्शनाकडे जाणारा मनमोहक मार्ग.', descEn: 'Illuminated whimsical tunnel walkthrough leading towards the main sanctum.', hideFromReel: true },
  { year: '2011', category: 'decorations', titleMr: 'प्राचीन मंदिर मंडप (२०११)', titleEn: 'Temple Pandal (2011)', themeMr: 'मंदिर देखावा', themeEn: 'Temple Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2011_1.jpg', descMr: 'आकर्षक रंगात रंगवलेली भव्य मंदिर सदृश्य मंडप सजावट.', descEn: 'A beautifully crafted and grand temple-themed pandal.', hideFromReel: true },
  { year: '2011', category: 'idols', titleMr: 'श्री दर्शन (२०११)', titleEn: 'Ganesha Darshan (2011)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2011_2.jpg', descMr: 'आकर्षक लाल फेट्यात आणि पितांबरात विराजमान झालेले श्रींचे सुंदर रूप.', descEn: 'A stunning idol of Lord Ganesha adorned with a red turban and gold dhoti against an illuminated purple backdrop.', hideFromReel: true },
  { year: '2010', category: 'decorations', titleMr: 'प्राचीन मंदिर मंडप (२०१०)', titleEn: 'Ancient Temple Pandal (2010)', themeMr: 'प्राचीन मंदिर', themeEn: 'Ancient Temple Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2010_1.png', descMr: 'काळ्या पाषाणात कोरलेले प्राचीन मंदिर दर्शवणारी अप्रतिम मंडप सजावट.', descEn: 'A stunning pandal decoration depicting an intricately carved ancient stone temple.', hideFromReel: true },
  { year: '2010', category: 'idols', titleMr: 'श्री दर्शन (२०१०)', titleEn: 'Ganesha Darshan (2010)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2010_2.jpg', descMr: 'लाल रंगाच्या पितांबरात आणि फेट्यात विराजमान झालेले श्रींचे सुंदर रूप.', descEn: 'A beautiful idol of Lord Ganesha adorned in a red dhoti and traditional turban.', hideFromReel: true },
  { year: '2009', category: 'decorations', titleMr: 'हिमपर्वत मंडप (दिवसाचे दृश्य)', titleEn: 'Snow Mountain Pandal (Day View)', themeMr: 'हिमपर्वत', themeEn: 'Snow Mountain Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2009_1.png', descMr: 'हिमालयाच्या पर्वत रांगांवर आधारित भव्य मंडपाचे दिवसाचे दृश्य.', descEn: 'The magnificent snow-capped mountain themed pandal in daylight.', hideFromReel: true },
  { year: '2009', category: 'decorations', titleMr: 'हिमपर्वत मंडप (रात्रीचे दृश्य)', titleEn: 'Snow Mountain Pandal (Night View)', themeMr: 'हिमपर्वत', themeEn: 'Snow Mountain Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2009_2.png', descMr: 'रात्रीच्या वेळी निळ्या प्रकाशात झगमगून उठणारा हिमपर्वत मंडप.', descEn: 'The snow mountain pandal beautifully illuminated with blue lights at night.', hideFromReel: true },
  { year: '2008', category: 'decorations', titleMr: 'मंडप सजावट (२००८)', titleEn: 'Interior Decoration (2008)', themeMr: 'कार्टून थीम', themeEn: 'Cartoon Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2008_1.jpg', descMr: 'श्रींच्या समोर फुलांची सुंदर रांगोळी आणि आकर्षक मंडप सजावट.', descEn: 'Beautiful interior view featuring a floral rangoli and colorful theme in front of the idol.', hideFromReel: true },
  { year: '2008', category: 'decorations', titleMr: 'राजवाडा मंडप (२००८)', titleEn: 'Castle Theme Pandal (2008)', themeMr: 'कार्टून थीम', themeEn: 'Cartoon Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2008_2.jpg', descMr: 'रात्रीच्या दिव्यांच्या रोषणाईत सजवलेला भव्य राजवाडा थीमवरील मंडप आणि कार्टून कॅरेक्टर्स.', descEn: 'The grand castle-themed pandal illuminated at night, featuring famous cartoon characters.', hideFromReel: true },
  { year: '2007', category: 'decorations', titleMr: 'क्रूझ शिप मंडप (रात्रीचे दृश्य)', titleEn: 'Cruise Ship Pandal (Night View)', themeMr: 'क्रूझ शिप', themeEn: 'Cruise Ship Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2007_1.png', descMr: 'रात्रीच्या दिव्यांच्या रोषणाईत सजवलेला भव्य क्रूझ शिपच्या आकारातील मंडप.', descEn: 'A spectacular view of the cruise ship-themed pandal brilliantly illuminated at night.', hideFromReel: true },
  { year: '2007', category: 'idols', titleMr: 'श्री दर्शन (२००७)', titleEn: 'Ganesha Darshan (2007)', themeMr: 'काचेच्या घुमटात श्री', themeEn: 'Idol in Glass Dome', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2007_2.jpg', descMr: 'काचेच्या घुमटात विराजमान झालेले श्रींचे सुंदर रौप्य रूप.', descEn: 'The beautifully crafted silver idol seated inside a glass dome.', hideFromReel: true },
  { year: '2007', category: 'decorations', titleMr: 'क्रूझ शिप मंडप (दिवसाचे दृश्य)', titleEn: 'Cruise Ship Pandal (Day View)', themeMr: 'क्रूझ शिप', themeEn: 'Cruise Ship Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2007_3.png', descMr: 'दिवसाच्या प्रकाशात दिसणारा भव्य क्रूझ शिप मंडप.', descEn: 'The grand cruise ship-themed pandal in daylight.', hideFromReel: true },
  { year: '2006', category: 'decorations', titleMr: 'भव्य मंडप सजावट (२००६)', titleEn: 'Grand Pandal Decoration (2006)', themeMr: 'राजवाडा सजावट', themeEn: 'Palace Decoration', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses_2006_1.png', descMr: 'दिव्यांच्या रोषणाईने उजळून निघालेला राजवाड्याच्या थीमवरील भव्य मंडप.', descEn: 'A stunning view of the brilliantly illuminated palace-themed pandal at night.', hideFromReel: true },
  { year: '2006', category: 'events', titleMr: 'भव्य मिरवणूक (२००६)', titleEn: 'Grand Procession (2006)', themeMr: 'ढोल-ताशा आणि उत्साह', themeEn: 'Dhol Tasha & Celebration', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/glimpses_2006_2.jpg', descMr: 'ढोल-ताशांच्या गजरात आणि उत्साहात साजरी होणारी भव्य मिरवणूक.', descEn: 'Devotees and a dhol tasha pathak celebrating during the grand procession.', hideFromReel: true },
  { year: '2005', category: 'idols', titleMr: 'श्री दर्शन (२००५)', titleEn: 'Ganesha Darshan (2005)', themeMr: 'स्वर्गीय देखावा', themeEn: 'Celestial Theme', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2005_1.jpg', descMr: 'तारका आणि ढगांनी सजवलेला भव्य स्वर्गीय देखावा.', descEn: 'A magnificent celestial theme featuring a starry sky and clouds.', hideFromReel: true },
  { year: '2005', category: 'idols', titleMr: 'श्री दर्शन (२००५)', titleEn: 'Ganesha Darshan (2005)', themeMr: 'श्रींचे दिव्य रूप', themeEn: 'Divine Idol', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2005_2.jpg', descMr: 'ढगांच्या आसनावर विराजमान झालेले श्रींचे सुंदर रूप.', descEn: 'The beautifully crafted idol seated on a cloud-like structure.', hideFromReel: true },
  { year: '2005', category: 'idols', titleMr: 'श्री दर्शन (२००५)', titleEn: 'Ganesha Darshan (2005)', themeMr: 'पूजा आणि आरती', themeEn: 'Puja & Aarti', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/2005_3.jpg', descMr: 'श्रींच्या सभोवताली पूजा करताना पुरोहित.', descEn: 'Priests performing traditional puja before the idol.', hideFromReel: true },
  { year: '2004', category: 'idols', titleMr: 'श्री दर्शन (२००४)', titleEn: 'Ganesha Darshan (2004)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-lights.jpg', descMr: '२००४ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 2004.', hideFromReel: true },
  { year: '2003', category: 'idols', titleMr: 'श्री दर्शन (२००३)', titleEn: 'Ganesha Darshan (2003)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-night.jpg', descMr: '२००३ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 2003.', hideFromReel: true },
  { year: '2002', category: 'idols', titleMr: 'श्री दर्शन (२००२)', titleEn: 'Ganesha Darshan (2002)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-palace.jpg', descMr: '२००२ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 2002.', hideFromReel: true },
  { year: '2001', category: 'idols', titleMr: 'श्री दर्शन (२००१)', titleEn: 'Ganesha Darshan (2001)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-lights.jpg', descMr: '२००१ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 2001.', hideFromReel: true },
  { year: '2000', category: 'idols', titleMr: 'श्री दर्शन (२०००)', titleEn: 'Ganesha Darshan (2000)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-ganpati-02.jpg', descMr: '२००० सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 2000.', hideFromReel: true },
  { year: '1999', category: 'idols', titleMr: 'श्री दर्शन (१९९९)', titleEn: 'Ganesha Darshan (1999)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-cave.jpg', descMr: '१९९९ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1999.', hideFromReel: true },
  { year: '1998', category: 'idols', titleMr: 'श्री दर्शन (१९९८)', titleEn: 'Ganesha Darshan (1998)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-ganpati-02.jpg', descMr: '१९९८ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1998.', hideFromReel: true },
  { year: '1997', category: 'idols', titleMr: 'श्री दर्शन (१९९७)', titleEn: 'Ganesha Darshan (1997)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-ganpati-01.jpg', descMr: '१९९७ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1997.', hideFromReel: true },
  { year: '1996', category: 'idols', titleMr: 'श्री दर्शन (१९९६)', titleEn: 'Ganesha Darshan (1996)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-ganpati-01.jpg', descMr: '१९९६ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1996.', hideFromReel: true },
  { year: '1995', category: 'idols', titleMr: 'श्री दर्शन (१९९५)', titleEn: 'Ganesha Darshan (1995)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-lights.jpg', descMr: '१९९५ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1995.', hideFromReel: true },
  { year: '1994', category: 'idols', titleMr: 'श्री दर्शन (१९९४)', titleEn: 'Ganesha Darshan (1994)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-night.jpg', descMr: '१९९४ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1994.', hideFromReel: true },
  { year: '1993', category: 'idols', titleMr: 'श्री दर्शन (१९९३)', titleEn: 'Ganesha Darshan (1993)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-night.jpg', descMr: '१९९३ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1993.', hideFromReel: true },
  { year: '1992', category: 'idols', titleMr: 'श्री दर्शन (१९९२)', titleEn: 'Ganesha Darshan (1992)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-cave.jpg', descMr: '१९९२ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1992.', hideFromReel: true },
  { year: '1991', category: 'idols', titleMr: 'श्री दर्शन (१९९१)', titleEn: 'Ganesha Darshan (1991)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-temple.jpg', descMr: '१९९१ सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1991.', hideFromReel: true },
  { year: '1990', category: 'idols', titleMr: 'श्री दर्शन (१९९०)', titleEn: 'Ganesha Darshan (1990)', themeMr: 'पारंपारिक दर्शन', themeEn: 'Traditional Darshan', height: '—', artistMr: 'मंडळ कारागीर', artistEn: 'Mandal Artisans', image: '/images/sahyadri-decoration-cave.jpg', descMr: '१९९० सालचे सुंदर श्री रूप.', descEn: 'Ganesha idol from 1990.', hideFromReel: true }
];

// Social Work Data
const socialWorkData = [
  {
    id: 'sahyadri-sports-tournament',
    title: 'सह्याद्री क्रीडा स्पर्धा', titleMr: 'सह्याद्री क्रीडा स्पर्धा', titleEn: 'Sahyadri Sports Tournament',
    category: 'Sports', categoryMr: 'क्रीडा', categoryEn: 'Sports',
    image: '/images/social-work/sw_1.jpg',
    desc: 'सह्याद्री क्रीडा स्पर्धेतील विजेत्या खेळाडूंना पदके आणि गणपती बाप्पाची पोस्टर देऊन सन्मान.', descMr: 'सह्याद्री क्रीडा स्पर्धेतील विजेत्या खेळाडूंना पदके आणि गणपती बाप्पाची पोस्टर देऊन सन्मान.', descEn: 'Medal-winning athletes felicitated with Ganpati Bappa posters at the Sahyadri Sports Tournament.'
  },
  {
    id: 'school-stationery-distribution',
    title: 'शालेय साहित्य वाटप', titleMr: 'शालेय साहित्य वाटप', titleEn: 'School Stationery Distribution',
    category: 'Education', categoryMr: 'शैक्षणिक मदत', categoryEn: 'Education',
    image: '/images/social-work/sw_2.jpg',
    desc: 'गरजू विद्यार्थ्यांसाठी वह्या, पुस्तके आणि शालेय साहित्याचे मोठ्या प्रमाणात वाटप.', descMr: 'गरजू विद्यार्थ्यांसाठी वह्या, पुस्तके आणि शालेय साहित्याचे मोठ्या प्रमाणात वाटप.', descEn: 'Large-scale distribution of notebooks, textbooks, and school supplies to underprivileged students.'
  },
  {
    id: 'srv-hospital-collaboration',
    title: 'SRV हॉस्पिटल सहकार्य', titleMr: 'SRV हॉस्पिटल सहकार्य', titleEn: 'SRV Hospital Collaboration',
    category: 'Healthcare', categoryMr: 'आरोग्यसेवा', categoryEn: 'Healthcare',
    image: '/images/social-work/sw_3.jpg',
    desc: 'SRV ग्रुप ऑफ हॉस्पिटल्ससोबत आरोग्य सेवा उपक्रमासाठी सहकार्य करार.', descMr: 'SRV ग्रुप ऑफ हॉस्पिटल्ससोबत आरोग्य सेवा उपक्रमासाठी सहकार्य करार.', descEn: 'Partnership with SRV Group of Hospitals for community healthcare initiatives.'
  },
  {
    id: 'notebook-donation-drive',
    title: 'वह्या वाटप उपक्रम', titleMr: 'वह्या वाटप उपक्रम', titleEn: 'Notebook Donation Drive',
    category: 'Education', categoryMr: 'शैक्षणिक मदत', categoryEn: 'Education',
    image: '/images/social-work/sw_4.jpg',
    desc: 'मंडळ सदस्यांकडून विद्यार्थ्यांसाठी शेकडो वह्यांचे वाटप.', descMr: 'मंडळ सदस्यांकडून विद्यार्थ्यांसाठी शेकडो वह्यांचे वाटप.', descEn: 'Mandal members distributing hundreds of notebooks to students in need.'
  },
  {
    id: 'stationery-to-children',
    title: 'मुलांना शालेय साहित्य वाटप', titleMr: 'मुलांना शालेय साहित्य वाटप', titleEn: 'Stationery Distribution to Children',
    category: 'Education', categoryMr: 'शैक्षणिक मदत', categoryEn: 'Education',
    image: '/images/social-work/sw_5.jpg',
    desc: 'गरजू मुलांच्या हातात प्रत्यक्ष वह्या आणि पुस्तके देऊन शिक्षणाला प्रोत्साहन.', descMr: 'गरजू मुलांच्या हातात प्रत्यक्ष वह्या आणि पुस्तके देऊन शिक्षणाला प्रोत्साहन.', descEn: 'Personally handing over notebooks and books to underprivileged children to support their education.'
  }
];

// Committee Members Data - 2025-26
const committeeData = [
  { number: 1, nameMr: 'श्री. राहुल गजानन वाळंज', nameEn: 'Shri. Rahul Gajanan Walanj', designationMr: 'अध्यक्ष', designationEn: 'President', image: '/images/committee/rahul.jpg' },
  { number: 2, nameMr: 'श्री. अमित अशोक सातार्डेकर', nameEn: 'Shri. Amit Ashok Satardekar', designationMr: 'उपाध्यक्ष', designationEn: 'Vice President', image: '/images/committee/amit.jpg' },
  { number: 3, nameMr: 'श्री. राजेंद्र मानसिंग मोहिते', nameEn: 'Shri. Rajendra Mansing Mohite', designationMr: 'सरचिटणीस', designationEn: 'Secretary', image: '/images/committee/rajendra.jpg' },
  { number: 4, nameMr: 'श्री. जया प. शेट्टी', nameEn: 'Shri. Jaya P. Shetty', designationMr: 'खजिनदार', designationEn: 'Treasurer', image: '/images/committee/jaya.jpg' },
  { number: 5, nameMr: 'श्री. प्रदीप दत्तात्रय भांबुरे', nameEn: 'Shri. Pradeep Dattatray Bhambure', designationMr: 'सहचिटणीस', designationEn: 'Joint Secretary', image: '/images/committee/pradip.jpg' },
  { number: 6, nameMr: 'श्री. मंगेश श्रीधर अढतराव', nameEn: 'Shri. Mangesh Shridhar Adhatrao', designationMr: 'सहचिटणीस', designationEn: 'Joint Secretary', image: '/images/committee/mangesh.jpg' },
  { number: 7, nameMr: 'डॉ. मनिष डेलीवाला B.H.M.S. (Mumbai)', nameEn: 'Dr. Manish Deliwala B.H.M.S. (Mumbai)', designationMr: 'सदस्य', designationEn: 'Member', image: '/images/committee/manish.jpg' },
  { number: 8, nameMr: 'श्री. दिग्विजय दिलीप चौधरी', nameEn: 'Shri. Digvijay Dilip Chaudhari', designationMr: 'सदस्य', designationEn: 'Member', image: '/images/committee/digvijay.jpg', objectPosition: 'center 30%' },
  { number: 9, nameMr: 'श्री. अविनाश विलास शिंदे', nameEn: 'Shri. Avinash Vilas Shinde', designationMr: 'सदस्य', designationEn: 'Member', image: '/images/committee/avinash.jpg' },
  { number: 10, nameMr: 'श्री. निखिल नंदकुमार मोरे', nameEn: 'Shri. Nikhil Nandkumar More', designationMr: 'सदस्य', designationEn: 'Member' },
  { number: 11, nameMr: 'श्री. प्रकाश सहदेव मोहिते', nameEn: 'Shri. Prakash Sahadev Mohite', designationMr: 'सदस्य', designationEn: 'Member', image: '/images/committee/prakash.jpg' },
  { number: 12, nameMr: 'श्री. सचिन प्रभाकर सावंत', nameEn: 'Shri. Sachin Prabhakar Sawant', designationMr: 'सदस्य', designationEn: 'Member' },
  { number: 13, nameMr: 'श्री. सौरभ सुनिल चव्हाण', nameEn: 'Shri. Saurabh Sunil Chavhan', designationMr: 'सदस्य', designationEn: 'Member', image: '/images/committee/saurabh.jpg' },
  { number: 14, nameMr: 'श्री. मंगेश यशवंत चव्हाण', nameEn: 'Shri. Mangesh Yashwant Chavhan', designationMr: 'सदस्य', designationEn: 'Member' }
];

module.exports = {
  // Render Home Page
  renderHomePage(req, res) {
    const status = db.getYatraStatus();
    res.render('index', {
      title: 'Sahyadri Krida Mandal',
      activeTab: 'home',
      yatraStatus: status,
      scheduleData: scheduleData.slice(0, 4),
      glimpsesData,
      socialWorkData
    });
  },

  // Render About Us Page
  renderAboutPage(req, res) {
    res.render('about', {
      title: 'आमच्याबद्दल | Sahyadri Krida Mandal Official',
      activeTab: 'about'
    });
  },

  // Render Schedule Page
  renderSchedulePage(req, res) {
    const status = db.getYatraStatus();
    res.render('schedule', {
      title: 'गणेशोत्सव कार्यसूची व आरती वेळ | Sahyadri Krida Mandal',
      activeTab: 'schedule',
      yatraStatus: status,
      scheduleData
    });
  },

  // Render Glimpses Page
  renderGlimpsesPage(req, res) {
    res.render('glimpses', {
      title: 'वर्षभरातील क्षणचित्रे | Sahyadri Krida Mandal',
      activeTab: 'glimpses',
      glimpsesData
    });
  },

  // Render Decade Gallery (Renamed from Photo Booth)
  renderPhotoBoothPage(req, res) {
    res.render('photo-booth', {
      title: 'दशकातील क्षणचित्रे (२०१५-२०२५) | Sahyadri Krida Mandal',
      activeTab: 'photobooth',
      glimpsesData
    });
  },

  // Render Social Work Page
  renderSocialWorkPage(req, res) {
    res.render('social-work', {
      title: 'सामाजिक कार्य व सेवा | Sahyadri Krida Mandal',
      activeTab: 'socialwork',
      socialWorkData
    });
  },

  renderCommitteePage(req, res) {
    res.render('committee', {
      title: 'कार्यकारिणी समिती | Sahyadri Krida Mandal',
      activeTab: 'committee',
      committeeData
    });
  },

  // Live Status API
  getLiveStatusApi(req, res) {
    const status = db.getYatraStatus();
    res.json({ success: true, status });
  }
};
