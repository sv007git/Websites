/**
 * Vratams and Major Festivals Data (వ్రతాలు మరియు ముఖ్య పండుగలు)
 * Authentic procedures, Samagri, Mantras and Meanings in Telugu and English.
 */

const PUJAS_VRATAMS = [
  {
    id: "satyanarayana-vratam",
    category: "vratam-festival",
    phase: "Universal / Any Phase of Life",
    phaseTe: "సర్వకాలిక / గృహస్థ దశ",
    deity: "Sri Satyanarayana Swamy (Maha Vishnu)",
    deityTe: "శ్రీ సత్యనారాయణ స్వామి (శ్రీమహావిష్ణువు)",
    title: {
      en: "Sri Satyanarayana Swamy Vratam",
      te: "శ్రీ సత్యనారాయణ స్వామి వ్రత విధానం"
    },
    subtitle: {
      en: "The Most Popular & Fulfilling Vaisnava Vrata for Prosperity, Peace & Family Harmony",
      te: "సర్వ పాపహరణం, మనోవాంఛా ఫలసిద్ధి ప్రసాదించే సత్యదేవుని దివ్య వ్రత మహోత్సవం"
    },
    significance: {
      en: "Revealed in the Reva Khanda of the Skanda Purana by Lord Vishnu to Maharishi Narada, this Vratam is performed to remove poverty, anxieties, and hardships, and to attain immense joy, wealth, and liberation. The vow centers on truth (Satya), devotion, listening to the 5 sacred chapters of the divine Katha, and consuming the consecrated 'Sapada Bhakshya' (prasadam made of roasted sooji, milk, ghee, banana, and sugar).",
      te: "స్కాంద పురాణంలోని రేవాఖండంలో సనత్కుమారులు నారదునికి ఉపదేశించిన మహిమాన్వితమైన వ్రతమే శ్రీ సత్యనారాయణ వ్రతం. పూర్ణిమ నాడు లేదా ఏ శుభదినానైనా దీనిని ఆచరించవచ్చు. సత్యమే బ్రహ్మమని, సత్యపాలనతో స్వామిని పూజిస్తే దారిద్ర్య బాధలు, సంకటాలు తొలగి సర్వసౌఖ్యాలు కలుగుతాయని విశ్వాసం. 5 అధ్యాయాల కథా శ్రవణం, నవగ్రహ మండప ఆరాధన, సపాద ప్రసాదం (రవ్వ ప్రసాదం) ఈ వ్రతంలో అతి ముఖ్యమైనవి."
    },
    bestTiming: {
      en: {
        season: "Every Purnima (Full Moon), Karthika, Vaishakha, or on any auspicious milestone",
        tithi: "Purnima (Full moon) or Ekadashi, Sankranti, or Subha Muhurtham",
        timeOfDay: "Evening (Pradosha Kala / Sandhya) or Morning",
        details: "Performing during twilight/evening (Pradosha) on Purnima is believed to bring extraordinary blessings."
      },
      te: {
        season: "ప్రతి పౌర్ణమి, కార్తీక, వైశాఖ మాసాలలో లేదా ఏదేని శుభకార్య సందర్భంలో",
        tithi: "పౌర్ణమి లేదా ఏకాదశి తిథులు అత్యంత శ్రేష్ఠమైనవి",
        timeOfDay: "సాయం సంధ్యా సమయం (ప్రదోష కాలం) లేదా ఉదయ సమయం",
        details: "పౌర్ణమి సాయంత్రం వేళ ఈ వ్రతం ఆచరించడం ద్వారా విశేష లక్ష్మీ కటాక్షం సిద్ధిస్తుంది."
      }
    },
    samagri: [
      { nameEn: "Sri Satyanarayana Swamy photo or silver vigraha", nameTe: "శ్రీ సత్యనారాయణ స్వామి చిత్రపటం లేదా విగ్రహం", quantity: "1", optional: false },
      { nameEn: "Sapada Bhakshyam ingredients: Sooji (Rava), Ghee, Sugar, Bananas, Milk", nameTe: "సపాద ప్రసాద సామాగ్రి: బొంబాయి రవ్వ (1 పావు), పంచదార (1 పావు), ఆవు నెయ్యి (1 పావు), పాలు, అరటిపండ్లు", quantity: "1 1/4 measurement ratio", optional: false, noteEn: "Tradition requires 'Sapada' (1 and 1/4 ratio) portions", noteTe: "సపాద అంటే ఒకటింపావు లెక్కన సమర్పించాలి" },
      { nameEn: "Navadhanyalu (9 sacred grains) & 9 colored cloths for Navagrahas", nameTe: "నవధాన్యాలు మరియు నవగ్రహ వస్త్రాలు (9 రంగులు)", quantity: "1 set", optional: false },
      { nameEn: "Betel leaves & Supari (Tamalapaakulu & Vakkalu)", nameTe: "తమలపాకులు మరియు వక్కలు", quantity: "50 leaves, 25 supari", optional: false },
      { nameEn: "Coconuts (Kobbari kayalu)", nameTe: "కొబ్బరికాయలు", quantity: "5", optional: false },
      { nameEn: "Kalasha chembu (Copper/Brass pot) & Mango leaves", nameTe: "కలశ పాత్ర మరియు మామిడి ఆకులు", quantity: "1 set", optional: false },
      { nameEn: "Flowers, Tulasi leaves, Rose petals", nameTe: "తులసి దళాలు, పువ్వులు, గులాబీ రేకులు", quantity: "2 garlands, 250g flowers", optional: false },
      { nameEn: "Turmeric, Kumkuma, Sandalwood paste, Akshatas", nameTe: "పసుపు, కుంకుమ, గంధం, అక్షతలు", quantity: "Standard", optional: false },
      { nameEn: "Panchamritam: Milk, Curd, Ghee, Honey, Sugar", nameTe: "పంచామృతాలు: పాలు, పెరుగు, నెయ్యి, తేనె, పంచదార", quantity: "Small cup each", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Ganapati, Navagraha & Ashta Dikpala Mandala Puja", te: "గణపతి, నవగ్రహ మరియు అష్టదిక్పాలక పూజ" },
        description: {
          en: "Draw the sacred 9-chamber Navagraha mandala with rice and wheat. Perform initial Ganapati puja to clear hurdles, followed by invoking the Nine Planets and Guardians of the Eight Directions.",
          te: "బియ్యపు పిండితో పీఠం వేసి, నవధాన్యాలతో నవగ్రహ మండలాన్ని ఏర్పరుస్తారు. వినాయకుడిని పసుపు గణపతిగా ఆరాధించి, అనంతరం నవగ్రహాలను, అష్టదిక్పాలకులను పూజిస్తారు."
        },
        mantra: {
          sanskrit: "ధ్యానం సమర్పయామి ఆవాహయామి నవగ్రహ దేవతాభ్యో నమః । సర్వాభీష్ట ప్రదాయకాయ శ్రీ సత్యనారాయణాయ నమః ॥",
          transliteration: "Dhyanam samarpayami aavahayami Navagraha devatabhyo namah | Sarvabheeshta pradayakaya Shri Satyanarayanaya namah ||",
          scriptTe: "ధ్యానం సమర్పయామి ఆవాహయామి నవగ్రహ దేవతాభ్యో నమః । సర్వాభీష్ట ప్రదాయకాయ శ్రీ సత్యనారాయణాయ నమః ॥"
        },
        meaning: {
          en: "I offer meditation and divine welcome to the Navagraha planetary deities and to Lord Sri Satyanarayana, the bestower of all righteous desires!",
          te: "సకల గ్రహ దోషములు తొలగిపోవుటకై నవగ్రహాలకు మరియు భక్తుల కోరికలను ఈడేర్చే సత్యదేవునికి భక్తితో నమస్కరిస్తున్నాను."
        },
        audioText: {
          en: "Dhyanam samarpayami, aavahayami navagraha devatabhyo namah. Commencing the foundational Ganesha and planetary mandala worship.",
          te: "ధ్యానం సమర్పయామి ఆవాహయామి నవగ్రహ దేవతాభ్యో నమః. విఘ్నేశ్వర, నవగ్రహ మండప పూజ."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Prana Pratishtha & Shodashopachara Puja with Tulasi", te: "ప్రాణ ప్రతిష్ఠ & తులసీదళాలతో షోడశోపచార పూజ" },
        description: {
          en: "Invoking the living presence of Lord Satyanarayana into the idol or betel-leaf kalasha, bathing with Panchamrita, adorning with yellow vastram, and performing Archana with 108 names and fragrant Tulasi leaves.",
          te: "స్వామివారిని కలశం లేదా ప్రతిమలో ఆవాహన చేసి, పంచామృతాలతో అభిషేకించి, పీతాంబరాలు అలంకరించి, పవిత్ర తులసీదళాలతో అష్టోత్తర శతనామావళిని భక్తితో సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం సత్యాయ నమః । ఓం సత్యధర్మాయ నమః । ఓం నారాయణాయ నమః । ఓం వాసుదేవాయ నమః । ఓం సత్యస్వరూపిణే నమః ॥",
          transliteration: "Om Satyaya Namah | Om Satyadharmaya Namah | Om Narayanaya Namah | Om Vasudevaya Namah | Om Satyaswaroopine Namah ||",
          scriptTe: "ఓం సత్యాయ నమః । ఓం సత్యధర్మాయ నమః । ఓం నారాయణాయ నమః । ఓం వాసుదేవాయ నమః । ఓం సత్యస్వరూపిణే నమః ॥"
        },
        meaning: {
          en: "Salutations to the One who is absolute Truth! Salutations to the upholder of righteous Dharma! Salutations to Narayana! Salutations to Vasudeva! Salutations to the embodiment of eternal Truth!",
          te: "సత్యస్వరూపుడు, సత్యధర్మ పాలక, నారాయణ, వాసుదేవ నామధారియైన శ్రీ సత్యనారాయణ స్వామికి నమస్కారములు."
        },
        audioText: {
          en: "Om satyaya namah, om narayanaya namah, om satyaswaroopine namah. Performing sacred Tulasi archana with the divine names of Satyanarayana.",
          te: "ఓం సత్యాయ నమః, ఓం నారాయణాయ నమః. తులసీ దళాలతో స్వామివారి అష్టోత్తర పూజ."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Five Chapters of Sacred Katha (కథా శ్రవణం)", te: "శ్రీ సత్యనారాయణ స్వామి పంచమాధ్యాయ కథా శ్రవణం" },
        description: {
          en: "All family members gather with folded hands to listen to the 5 inspiring chapters: (1) Suta-Shunaka dialogue & Poor Brahmin's redemption; (2) Woodcutter's devotion; (3) Merchant Sadhu's vow and testing; (4) King Tungadhwaja's surrender; (5) Glory of Prasadam and conclusion.",
          te: "కుటుంబ సభ్యులందరూ చేతులు జోడించి 5 అధ్యాయాల కథను శ్రద్ధగా వింటారు: (1) శౌనకాది మహర్షుల సంభాషణ & పేద బ్రాహ్మణుని ముక్తి; (2) కట్టెలమ్ముకునే వాని భక్తి; (3) సాధు వర్తకుని ప్రతిజ్ఞ & లీలావతి, కళావతుల వృత్తాంతం; (4) తుంగధ్వజ మహారాజు కథ; (5) ప్రసాద మహత్యం."
        },
        mantra: {
          sanskrit: "సత్యం వ్రతం సత్యపరం త్రిసత్యం సత్యస్య యోనిం నిహితం చ సత్యే । సత్యస్య సత్యమృతసత్యనేత్రం సత్యాత్మకం త్వాం శరణం ప్రపన్నాః ॥",
          transliteration: "Satyam vratam satyaparam trisatyam satyasya yonim nihitam cha satye | Satyasya satyam-rita-satya-netram satyatmakam tvaam sharanam prapannah ||",
          scriptTe: "సత్యం వ్రతం సత్యపరం త్రిసత్యం సత్యస్య యోనిం నిహితం చ సత్యే । సత్యస్య సత్యమృతసత్యనేత్రం సత్యాత్మకం త్వాం శరణం ప్రపన్నాః ॥"
        },
        meaning: {
          en: "Your vow is Truth, You are beyond empirical truth, You are the three-fold Truth (past, present, future)! You are the source of truth, resting in Truth alone. O Soul of Truth, we surrender unto You!",
          te: "స్వామీ! నీ వ్రతమే సత్యం. నీవు త్రికాల సత్యుడవు. సత్యమునకు మూలమైన పరబ్రహ్మవైన ఓ సత్యదేవా! మేము నిన్ను శరణువేడుచున్నాము."
        },
        audioText: {
          en: "Satyam vratam satyaparam trisatyam. Reflecting on the glory of Truth while listening to the five chapters of Sri Satyanarayana Swamy Katha.",
          te: "సత్యం వ్రతం సత్యపరం త్రిసత్యం. శ్రీ సత్యనారాయణ స్వామి కథా శ్రవణం."
        }
      },
      {
        stepNumber: 4,
        title: { en: "Sapada Prasada Naivedyam & Mangala Harati", te: "సపాద ప్రసాద నివేదన & మహామంగళ హారతి" },
        description: {
          en: "Offering the sweet Sapada bhakshya, breaking fresh coconuts, waving Karpura Harati with bells ringing, and distributing the holy prasadam to all without ego or hesitation.",
          te: "రవ్వ, చక్కెర, ఆవునెయ్యి, పాలు, అరటిపండ్లతో చేసిన సపాద ప్రసాదాన్ని సమర్పించి, కొబ్బరికాయలు కొట్టి, కర్పూర నీరాజనం ఇస్తారు. భక్తితో ప్రసాదాన్ని అందరికీ పంచుతారు."
        },
        mantra: {
          sanskrit: "కర్పూర గౌరం కరుణావతారం సంసారసారం భుజగేంద్రహారమ్ । సదావసంతం హృదయారవిందే భవం భవానీసహితం నమామి ॥",
          transliteration: "Karpura-gauram Karuna-vataram Samsara-saram Bhujagendra-haram | Sada-vasantam Hridayaravinde Bhavam Bhavani-sahitam Namami ||",
          scriptTe: "కర్పూర గౌరం కరుణావతారం సంసారసారం భుజగేంద్రహారమ్ । సదావసంతం హృదయారవిందే భవం భవానీసహితం నమామి ॥"
        },
        meaning: {
          en: "Pure white as camphor, the very incarnation of compassion, the essence of all worldly existence! Ever dwelling in the lotus of my heart, I bow to the Divine Lord along with the Divine Mother!",
          te: "కర్పూరము వంటి కాంతి కలవాడు, కరుణామూర్తి, సకల జగత్తుకు సారమైన స్వామిని భక్తిపూర్వకంగా హృదయకమలంలో ధ్యానిస్తూ మంగళ హారతిని సమర్పిస్తున్నాను."
        },
        audioText: {
          en: "Karpura gauram karunavataram. Waving the sacred camphor light and partaking in the sanctifying Sapada prasadam.",
          te: "కర్పూర గౌరం కరుణావతారం. సత్యదేవునికి దివ్య మంగళ హారతి మరియు ప్రసాద వితరణ."
        }
      }
    ]
  },

  {
    id: "varalakshmi-vratam",
    category: "vratam-festival",
    phase: "Universal / Sumangali",
    phaseTe: "సర్వ స్త్రీలకు / సౌభాగ్య వ్రతం",
    deity: "Goddess Varalakshmi (Ashtalakshmi)",
    deityTe: "శ్రీ వరలక్ష్మీ దేవి (అష్టలక్ష్మీ స్వరూపిణి)",
    title: {
      en: "Sri Varalakshmi Vratam",
      te: "శ్రీ వరలక్ష్మీ వ్రత విధానం (నోము)"
    },
    subtitle: {
      en: "Sacred Sravana Sukla Shukravara Vrata for Health, Wealth & Marital Longevity",
      te: "శ్రావణ శుక్రవారాన ముత్తైదువులు సౌభాగ్య సిద్ధి, అష్టైశ్వర్యాల కొరకు ఆచరించే విశిష్ట వ్రతం"
    },
    significance: {
      en: "Varalakshmi Vratam is observed by women on the Friday preceding the full moon day of Sravana Masa. Mother Lakshmi is honored as 'Vara-Lakshmi' (the boon-bestowing Goddess). Parvati Devi herself was initiated into this vrata by Lord Shiva. Key rituals include fashioning a golden face for the Kalasha, worshiping the nine-knotted yellow sacred cord (Navagranthi Toram), and tying it to the right wrist for protection and flourishing prosperity.",
      te: "శ్రావణ మాసంలో పౌర్ణమికి ముందు వచ్చే శుక్రవారం నాడు ముత్తైదువులు వరలక్ష్మీ వ్రతాన్ని అత్యంత భక్తిశ్రద్ధలతో జరుపుకుంటారు. పరమశివుడు పార్వతీ దేవికి ఉపదేశించిన వ్రతమిది. కలశానికి పసుపు లేదా వెండి ముఖాన్ని అలంకరించి, తామర పూలు, పట్టు చీర కట్టి వరలక్ష్మిగా ఆవాహన చేస్తారు. 9 ముడులు వేసిన పసుపు తోరాన్ని పూజించి చేతికి కట్టుకుంటారు. దీనివలన ఆయురారోగ్యాలు, అష్టైశ్వర్యాలు, దీర్ఘ సుమంగళీ ప్రాప్తి కలుగుతాయి."
    },
    bestTiming: {
      en: {
        season: "Sravana Masam (August - September)",
        tithi: "The Friday immediately prior to Sravana Purnima (Rakhi Purnima)",
        timeOfDay: "Morning before 11:30 AM (Brahma / Pratah Muhurtham)",
        details: "If missed due to health/sutaka, it can be performed on the 2nd Friday or any subsequent Friday of Sravana."
      },
      te: {
        season: "శ్రావణ మాసం (ఆగస్టు - సెప్టెంబర్)",
        tithi: "శ్రావణ పౌర్ణమికి ముందు వచ్చే శుక్రవారము",
        timeOfDay: "ఉదయం 11:30 గంటలలోపు",
        details: "ఏదైనా ఆటంకం వలన ఆ శుక్రవారం చేయలేకపోతే, ఆ తరువాతి శ్రావణ శుక్రవారాలలో కూడా ఆచరించవచ్చు."
      }
    },
    samagri: [
      { nameEn: "Lakshmi face (Amma mukham in Silver/Brass/Clay)", nameTe: "అమ్మవారి ముఖ ప్రతిమ (వెండి లేదా ఇత్తడి ముఖం)", quantity: "1", optional: false },
      { nameEn: "Yellow thread for Toram (9 strands with 9 knots)", nameTe: "తోరం దారాలు (9 పోగులు, 9 ముడులు వేసినవి)", quantity: "2-4 sets", optional: false, noteEn: "Adorned with flowers for wrist tying", noteTe: "చేతికి కట్టుకునే పవిత్ర తోరములు" },
      { nameEn: "Lotus flowers (Kamalam) & Jasmine garlands", nameTe: "కమల పుష్పాలు (తామరలు) మరియు మల్లెపూలు", quantity: "5 lotuses, 2 garlands", optional: false },
      { nameEn: "9 varieties of Naivedyam (Kudumulu, Garelu, Payasam, etc.)", nameTe: "నైవేద్యాలు (కుడుములు, పూర్ణాలు, గారెలు, పరమాన్నం, చిత్రాన్నం)", quantity: "9 types", optional: false },
      { nameEn: "Small silk blouse piece or saree to dress the Kalash", nameTe: "కలశానికి అలంకరించే రవికెల గుడ్డ / చిన్న పట్టుచీర", quantity: "1", optional: false },
      { nameEn: "Pasupu, Kumkuma, Sandalwood paste, Glass bangles", nameTe: "పసుపు, కుంకుమ, గంధం, గాజులు", quantity: "Standard", optional: false },
      { nameEn: "Tamboolams for Sumangalis (Fruit, betel leaves, blousetop)", nameTe: "ముత్తైదువుల తాంబూలాలు (రవికెల గుడ్డలు, గాజులు, పండ్లు)", quantity: "For at least 5 sumangalis", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Kalasha Alankaram & Avahanam", te: "కలశ స్థాపన & వరలక్ష్మీ ఆవాహన" },
        description: {
          en: "A bronze/silver pot filled with clean water, raw rice, coins, turmeric root, and fragrant herbs is draped with mango leaves and a coconut. The Lakshmi face is adorned with vermilion and jewels, invoking the Mother.",
          te: "కలశంలో బియ్యం, నాణెం, పసుపుకొమ్ము, సుగంధ ద్రవ్యాలు ఉంచి, మామిడి ఆకులు, కొబ్బరికాయతో కలశాన్ని అలంకరిస్తారు. అమ్మవారి ముఖాన్ని ప్రతిష్ఠించి, లక్ష్మీదేవిగా భావించి పూజిస్తారు."
        },
        mantra: {
          sanskrit: "పద్మాసనే పద్మకరే సర్వలోకైకపూజితే । నారాయణప్రియే దేవి సుప్రీతా భవ సర్వదా ॥",
          transliteration: "Padmasane Padma-kare Sarva-lokaika-poojite | Narayana-priye Devi Supreeta Bhava Sarvada ||",
          scriptTe: "పద్మాసనే పద్మకరే సర్వలోకైకపూజితే । నారాయణప్రియే దేవి సుప్రీతా భవ సర్వదా ॥"
        },
        meaning: {
          en: "Seated upon a divine lotus, holding radiant lotuses in Your hands, venerated across all realms! Beloved consort of Lord Narayana! Be pleased with our worship always!",
          te: "కమలముపై ఆసీనురాలవై, చేతులలో పద్మాలను ధరించి, సమస్త లోకాలచే పూజింపబడే ఓ లక్ష్మీదేవి! నారాయణుని ప్రియురాలవైన జగజ్జననీ, మా యందు సదా ప్రసన్నురాలవు కమ్ము!"
        },
        audioText: {
          en: "Padmasane padma-kare sarva-lokaika-poojite, narayana-priye devi supreeta bhava sarvada. Invoking Goddess Lakshmi upon the sacred Kalasha.",
          te: "పద్మాసనే పద్మకరే సర్వలోకైకపూజితే. శ్రీ వరలక్ష్మీ దేవి దివ్య ఆవాహన."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Toram Puja (Worship of 9 Knots)", te: "తోర పూజ (నవ గ్రంథి పూజ)" },
        description: {
          en: "Worshiping each of the nine sacred knots of the yellow Toram thread by chanting the names of Lakshmi (Kamalakshi, Rama, Lokamatha, etc.) with flowers and akshatas before tying it to the right wrist.",
          te: "తోరంలో ఉన్న 9 ముడులను ఒక్కొక్క నామంతో (కమలాక్షి, రమ, లోకమాత, హరిప్రియ తదితర నామాలతో) పువ్వులు, కుంకుమలతో పూజించి కుడిచేతికి కట్టుకుంటారు."
        },
        mantra: {
          sanskrit: "బధ్నామి దక్షిణే హస్తే నవసూత్రం శుభప్రదమ్ । సర్వసంపత్కరం దేవి త్వత్ప్రసాదాత్ సురేశ్వరి ॥",
          transliteration: "Badhnami dakshine haste nava-sootram shubha-pradam | Sarva-sampat-karam Devi tvat-prasadat Sureshwari ||",
          scriptTe: "బధ్నామి దక్షిణే హస్తే నవసూత్రం శుభప్రదమ్ । సర్వసంపత్కరం దేవి త్వత్ప్రసాదాత్ సురేశ్వరి ॥"
        },
        meaning: {
          en: "I tie this auspicious nine-fold sacred cord on my right hand. By Your grace, O Supreme Goddess of the Celestials, may all auspiciousness and abundance be bestowed!",
          te: "సకల సంపదలను కలిగించే ఈ తొమ్మిది పోగుల పవిత్ర తోరాన్ని నా కుడి చేతికి కట్టుకుంటున్నాను. ఓ సురేశ్వరీ! నీ అనుగ్రహంతో నా కుటుంబానికి సర్వ శుభములు కలుగుగాక!"
        },
        audioText: {
          en: "Badhnami dakshine haste nava-sootram shubha-pradam. Consecrating and tying the protective nine-knot Toram to the wrist.",
          te: "బధ్నామి దక్షిణే హస్తే నవసూత్రం శుభప్రదమ్. పవిత్ర నోము తోరమును చేతికి ధరించుట."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Offering 9 Varieties of Naivedyam & Sumangali Tamboolam", te: "నవవిధ నైవేద్య నివేదన & ముత్తైదువుల తాంబూలం" },
        description: {
          en: "Offering nine types of freshly cooked foods (including sweet jaggery kozhukattai/kudumulu and vadapappu), singing Mangala Harati, and presenting sumangalis with turmeric, kumkum, bangles, and blouse pieces.",
          te: "అమ్మవారికి కుడుములు, గారెలు వంటి 9 రకాల పిండివంటలను నివేదించి, కర్పూర హారతులు పాడి, ముత్తైదువులను లక్ష్మీ స్వరూపంగా భావించి పాదాలకు పసుపు రాసి తాంబూలాలు సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "భాగ్యదా లక్ష్మీ బారమ్మా నమ్మమ్మ నీ సౌభాగ్యదా లక్ష్మీ బారమ్మా । హెజ్జెయ మేలే హెజ్జెయనిక్కుత గజ్జెయ ధ్వనియుత బారమ్మా ॥",
          transliteration: "Bhagyada Lakshmi Baramma Nammamma Nee Bhagyada Lakshmi Baramma | Hejjeya Mele Hejjeyanikkuta Gajjeya Dhvaniyuta Baramma ||",
          scriptTe: "భాగ్యదా లక్ష్మీ బారమ్మా నమ్మమ్మ నీ సౌభాగ్యదా లక్ష్మీ బారమ్మా । హెజ్జెయ మేలే హెజ్జెయనిక్కుత గజ్జెయ ధ్వనియుత బారమ్మా ॥"
        },
        meaning: {
          en: "Come, O Goddess of Fortune! O Mother Lakshmi, enter our dwelling with the delightful chime of ankle bells, gracing each step with boundless boons and prosperity!",
          te: "మా ఇంటికి రారమ్మా భాగ్యలక్ష్మీ! గజ్జెల సవ్వడులతో మా గడప దాటి వచ్చి, అఖండ సౌభాగ్యాలను, ఆనందాలను మా ఇంట నింపవమ్మా!"
        },
        audioText: {
          en: "Bhagyada lakshmi baramma. Singing divine hymns of welcome and distributing auspicious gifts to venerable sumangalis.",
          te: "భాగ్యదా లక్ష్మీ బారమ్మా. మంగళ హారతులు మరియు ముత్తైదువులకు తాంబూల దానము."
        }
      }
    ]
  },

  {
    id: "vinayaka-chavithi",
    category: "vratam-festival",
    phase: "Universal / All Ages",
    phaseTe: "సర్వ జనులకు / వార్షిక పండుగ",
    deity: "Lord Vighneshwara / Ganesha",
    deityTe: "శ్రీ వినాయక స్వామి (ఏకదంతుడు)",
    title: {
      en: "Vinayaka Chavithi (Ganesha Chaturthi)",
      te: "వినాయక చవితి పూజా విధానం (ఏకవింశతి పత్ర పూజ)"
    },
    subtitle: {
      en: "21 Sacred Medicinal Leaves Puja, Modaka Naivedyam & Siddhi Vighneshwara Vratam",
      te: "21 రకాల పవిత్ర పత్రాలతో ఏకవింశతి పత్ర పూజ, కుడుములు మరియు శమంతకోపాఖ్యాన కథా శ్రవణం"
    },
    significance: {
      en: "Observed on Bhadrapada Shukla Chaturthi, Ganesha Chaturthi celebrates the manifestation of the Lord of Beginnings. Ritual highlights include molding an eco-friendly clay idol (Matti Vinayakudu), offering 21 types of sacred medicinal leaves (Ekavimshati Patra Puja, e.g., Bilva, Tulasi, Durva, Shami, Maruvam), chanting the Ashtottara, offering steamed rice-flour Modakas/Kudumulu, and reciting the Shamantakopakhyana Katha to avoid the false blame (Nilapindalu) caused by accidentally sighting the fourth lunar day moon.",
      te: "భాద్రపద శుద్ధ చవితి నాడు మట్టి వినాయకుడిని భక్తితో ప్రతిష్ఠించుకుని ఆరాధిస్తారు. 21 రకాల పవిత్ర పత్రాలతో (ఏకవింశతి పత్ర పూజ) స్వామిని పూజించడం వలన పర్యావరణ శుద్ధి, ఆరోగ్య రక్షణ కలుగుతాయి. ఉండ్రాళ్ళు, కుడుములు నైవేద్యంగా సమర్పించి, చవితి చంద్రుని చూసిన దోషం (నీలాపనిందలు) కలగకుండా ఉండేందుకు శమంతకోపాఖ్యానం (వినాయక వ్రత కథ) విని, శిరస్సుపై అక్షతలు వేసుకుంటారు."
    },
    bestTiming: {
      en: {
        season: "Bhadrapada Masam (August - September)",
        tithi: "Bhadrapada Shukla Chaturthi (Chavithi)",
        timeOfDay: "Madhyahna Kala (Midday between 11:00 AM and 1:30 PM)",
        details: "Madhyahna is the exact time of Lord Ganesha's descent. Reciting the Katha before twilight is customary."
      },
      te: {
        season: "భాద్రపద మాసము (ఆగస్టు - సెప్టెంబర్)",
        tithi: "భాద్రపద శుక్ల చవితి",
        timeOfDay: "మధ్యాహ్న కాలం (ఉదయం 11:00 నుండి మధ్యాహ్నం 1:30 మధ్య)",
        details: "వినాయకుడు మధ్యాహ్న వేళ జన్మించినందున ఆ సమయంలో పూజ చేయడం అత్యంత శ్రేష్ఠం."
      }
    },
    samagri: [
      { nameEn: "Eco-friendly clay Ganesha idol (Matti Ganapati)", nameTe: "మట్టి వినాయకుని ప్రతిమ", quantity: "1", optional: false },
      { nameEn: "21 Sacred leaves (Patri): Durva, Bilva, Tulasi, Shami, Karaveera, etc.", nameTe: "21 రకాల పత్రాలు (ఏకవింశతి పత్రి - గరిక, మారేడు, జమ్మి, ఉత్తరేణి, మాచిపత్రి మొదలైనవి)", quantity: "1 bundle", optional: false },
      { nameEn: "Modakalu & Undrallu (Steamed rice flour dumplings)", nameTe: "ఉండ్రాళ్ళు, కుడుములు, మోదకాలు", quantity: "21 pieces", optional: false },
      { nameEn: "Pala velli (Wooden canopy hanging above deity) & Fruits (Woodapple / Velaga)", nameTe: "పాలవెల్లి మరియు వెలగపండ్లు, మొక్కజొన్న, రేగుపండ్లు", quantity: "1 palavelli, seasonal fruits", optional: false },
      { nameEn: "Durva grass (Garika)", nameTe: "పచ్చని గరిక పోచలు", quantity: "Big bunch", optional: false },
      { nameEn: "Red Hibiscus flowers (Mandaralu)", nameTe: "ఎర్ర మందార పూలు", quantity: "21 flowers", optional: false },
      { nameEn: "Coconuts, Jaggery, Bananas, Panchamritam", nameTe: "కొబ్బరికాయలు, బెల్లం, అరటిపండ్లు, పంచామృతం", quantity: "Standard", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Prana Pratishtha & Shodashopachara", te: "మట్టి వినాయక ప్రాణ ప్రతిష్ఠ & షోడశోపచారాలు" },
        description: {
          en: "Infusing life-energy into the clay idol by invoking the breath of Ganapati, then offering Asana, Padya, Arghya, Snana, and vastram.",
          te: "మట్టి ప్రతిమపై మంత్రజలం ప్రోక్షించి ప్రాణ ప్రతిష్ఠ చేస్తారు. అనంతరం ఆసనం, పాద్యం, స్నానం, పసుపు-కుంకుమల అలంకరణ చేస్తారు."
        },
        mantra: {
          sanskrit: "గణాధిప నమస్తేస్తు ఉమాపుత్రాఘనాశన । వినాయకేశ తనయ సర్వకార్యప్రసాధక ॥",
          transliteration: "Ganadhipa namastestu Uma-putragha-nashana | Vinayakesha tanaya sarva-karya-prasadhaka ||",
          scriptTe: "గణాధిప నమస్తేస్తు ఉమాపుత్రాఘనాశన । వినాయకేశ తనయ సర్వకార్యప్రసాధక ॥"
        },
        meaning: {
          en: "Salutations to You, O Commander of all divine hosts, the beloved son of Mother Uma, destroyer of sins! Son of Lord Shiva, accomplish all our noble endeavors!",
          te: "ఓ గణాధిపా! ఉమాపుత్రా! సమస్త పాపములను నశింపజేసే వినాయకా! నా సమస్త కార్యములను నిర్విఘ్నంగా విజయవంతం చేయుము తండ్రీ!"
        },
        audioText: {
          en: "Ganadhipa namastestu uma-putragha-nashana. Invoking the remover of all obstacles with love and reverence.",
          te: "గణాధిప నమస్తేస్తు ఉమాపుత్రాఘనాశన. విఘ్నేశ్వరునికి షోడశోపచార పూజ."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Ekavimshati Patra Puja (21 Leaves Offering)", te: "ఏకవింశతి పత్ర పూజ (21 రకాల పత్రి)" },
        description: {
          en: "Offering the 21 medicinal leaves one by one, each accompanied by a distinct divine name: Machipatra, Bruhati, Bilva, Durva, Dhattura, Badari, Apamarga, Tulasi, Choota, Karaveera, Maruvaka, Sindhuvara, etc.",
          te: "సుమంగళకరమైన 21 రకాల పత్రాలను ఒక్కొక్క నామంతో స్వామి పాదాల చెంత సమర్పిస్తారు. ఉదాహరణకు: గణాధిపాయ నమః - మాచీపత్రం సమర్పయామి; ఉమాపుత్రాయ నమః - బిల్వపత్రం సమర్పయామి."
        },
        mantra: {
          sanskrit: "గణాధిపాయ నమః మాచీపత్రం సమర్పయామి । ఉమాపుత్రాయ నమః బిల్వపత్రం సమర్పయామి । అఖువాహనాయ నమః దూర్వాయుగ్మం సమర్పయామి ॥",
          transliteration: "Ganadhipaya namah machipatram samarpayami | Uma-putraya namah bilvapatram samarpayami | Akhu-vahanaya namah doorva-yugmam samarpayami ||",
          scriptTe: "గణాధిపాయ నమః మాచీపత్రం సమర్పయామి । ఉమాపుత్రాయ నమః బిల్వపత్రం సమర్పయామి । అఖువాహనాయ నమః దూర్వాయుగ్మం సమర్పయామి ॥"
        },
        meaning: {
          en: "Salutations to the Lord of Ganas, I offer Machipatra; to the son of Uma, I offer Bilva leaf; to the Rider of the Mouse vehicle, I offer blades of fresh green Durva grass!",
          te: "గణాధిపతికి మాచీపత్రం, ఉమాపుత్రునికి బిల్వపత్రం, మూషిక వాహనునికి పవిత్ర గరిక సమర్పిస్తున్నాను."
        },
        audioText: {
          en: "Ganadhipaya namah machipatram samarpayami, bilvapatram samarpayami, doorvayugmam samarpayami. The 21 sacred botanical offerings.",
          te: "ఏకవింశతి పత్ర పూజ. 21 దివ్య ఔషధ పత్రాలను సమర్పిస్తూ స్వామి ఆరాధన."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Vratakatha (Shamantakopakhyanam) & Akshataropana", te: "శమంతకోపాఖ్యానం (వ్రత కథ) & అక్షతలు శిరస్సుపై ధరించుట" },
        description: {
          en: "Reading or listening to the sacred story of Lord Krishna, Jambavati, the Syamantaka jewel, and the lifting of false accusations through devotion to Lord Ganesha. Conclude by placing consecrated yellow rice on heads.",
          te: "శ్రీకృష్ణుడు శమంతకమణి కథ ద్వారా నీలాపనిందలను తొలగించుకున్న పుణ్య గాథను విని, చేతిలో ఉన్న అక్షతలను శిరస్సుపై వేసుకుంటారు."
        },
        mantra: {
          sanskrit: "సింహః ప్రసేనమవధీత్ సింహో జాంబవతా హతః । సుకుమారక మా రోదీః తవ హ్యేష శ్యమంతకః ॥",
          transliteration: "Simhah Prasenam-avadheet simho Jambavata hatah | Sukumaraka ma rodeeh tava hyesha Shyamantakah ||",
          scriptTe: "సింహః ప్రసేనమవధీత్ సింహో జాంబవతా హతః । సుకుమారక మా రోదీః తవ హ్యేష శ్యమంతకః ॥"
        },
        meaning: {
          en: "The lion slew Prasena, and the mighty Jambavan slew the lion! Weep not, little prince! For this radiant Syamantaka jewel is yours!",
          te: "ప్రసేనుని సింహం చంపగా, ఆ సింహాన్ని జాంబవంతుడు చంపెను. ఓ సుకుమారా ఏడవకు, ఈ శమంతకమణి నీదే! నీలాపనిందల నివారణకై పఠించే అక్షతల శ్లోకం."
        },
        audioText: {
          en: "Simhah prasenam-avadheet simho jambavata hatah. Sacred verse placed on heads to ward off all false accusations.",
          te: "సింహః ప్రసేనమవధీత్ సింహో జాంబవతా హతః. కథా శ్రవణానంతరం శిరస్సుపై అక్షతలు వేసుకునే మంత్రం."
        }
      }
    ]
  },

  {
    id: "maha-shivaratri",
    category: "vratam-festival",
    phase: "Universal / Spiritual Seekers",
    phaseTe: "సర్వ జనులకు / ముక్తి సాధన",
    deity: "Lord Shiva (Rudra / Mahadeva)",
    deityTe: "పరమశివుడు (మహాదేవుడు / లింగమూర్తి)",
    title: {
      en: "Maha Shivaratri Lingabhishekam & Jagaran",
      te: "మహా శివరాత్రి లింగాభిషేకం & బిల్వార్చన"
    },
    subtitle: {
      en: "Panchamrita Abhishekam, Bilvashtakam, Rudra Japa & All-Night Vigil for Liberation",
      te: "పంచామృత లింగాభిషేకం, ఏకబిల్వార్చన, రుద్రజపం మరియు రాత్రి జాగరణతో శివసాయుజ్య సిద్ధి"
    },
    significance: {
      en: "Maha Shivaratri falls on Magha Bahula Chaturdashi, celebrating the night Lord Shiva performed the cosmic Ananda Tandava dance and manifested as the infinite Jyotirlinga column of supreme light. Devotees observe strict fasting (Upavasa), stay awake through four quarters of the night (Nishitha Kala Jagaran), bathe the Shiva Linga with milk, curd, honey, sugar, ghee, and tender coconut water, and offer trifoliate Bilva leaves, erasing sins of multiple lifetimes.",
      te: "మాఘ బహుళ చతుర్దశి నాడు జరుపుకునే మహా పర్వదినమే మహాశివరాత్రి. లింగోద్భవ కాలమైన అర్థరాత్రి వేళ స్వామిని పంచామృతాలు, భస్మము, గంగాజలాలతో అభిషేకించడం సర్వశ్రేష్ఠం. 'ఏకబిల్వం శివార్పణం' అంటూ మూడు దళములు గల మారేడు ఆకులతో పూజిస్తే మూడు జన్మల పాపాలు నశిస్తాయని శాస్త్రోక్తి. నిరాహార ఉపవాసం, రాత్రి జాగరణ ద్వారా భక్తులు శివ సాయుజ్యాన్ని పొందుతారు."
    },
    bestTiming: {
      en: {
        season: "Magha Masam (February - March)",
        tithi: "Magha Krishna Chaturdashi",
        timeOfDay: "All through day & night; Lingodbhava Kala (Midnight 11:45 PM to 12:45 AM)",
        details: "The Nishitha Kala (midnight lingodbhava) is the supreme window for Rudrabhisheka."
      },
      te: {
        season: "మాఘ మాసము (ఫిబ్రవరి - మార్చి)",
        tithi: "మాఘ బహుళ చతుర్దశి",
        timeOfDay: "రోజంతా ఉపవాసం, అర్థరాత్రి లింగోద్భవ సమయం (రాత్రి 11:45 నుండి 12:45 వరకు)",
        details: "లింగోద్భవ కాలంలో అభిషేకం చేయడం వలన కోటి జన్మల పుణ్యఫలం దక్కుతుంది."
      }
    },
    samagri: [
      { nameEn: "Shiva Linga (Stone, Spatika, Brass, or Clay)", nameTe: "శివలింగము (స్పటిక, బాణలింగము లేదా ఇత్తడి లింగం)", quantity: "1", optional: false },
      { nameEn: "Bilva leaves (Maredu dalalu)", nameTe: "బిల్వ పత్రాలు (మారేడు దళాలు)", quantity: "108 leaves (trifoliate)", optional: false },
      { nameEn: "Pure Cow Milk & Curd", nameTe: "స్వచ్ఛమైన ఆవు పాలు మరియు పెరుగు", quantity: "1 litre milk, 250g curd", optional: false },
      { nameEn: "Honey, Cow Ghee, Sugar cane juice (Cheruku rasam)", nameTe: "తేనె, ఆవు నెయ్యి, చెరకు రసం", quantity: "100g each", optional: false },
      { nameEn: "Vibhuti (Sacred Bhasmam) & Sandalwood paste", nameTe: "పవిత్ర విభూతి మరియు గంధం", quantity: "1 pack", optional: false },
      { nameEn: "Tender Coconut water (Kobbari neellu)", nameTe: "లేత కొబ్బరి నీళ్ళు", quantity: "2 coconuts", optional: false },
      { nameEn: "Ganga water (Ganga jalam) & Conch (Shankham)", nameTe: "గంగా జలము మరియు శంఖము", quantity: "1 bottle", optional: false },
      { nameEn: "Deepams (Ghee lamps with cotton wicks)", nameTe: "ఆవు నెయ్యి దీపాలు", quantity: "5 or 11 lamps", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Panchamrita & Rudrabhishekam", te: "పంచామృత & రుద్రాభిషేకము" },
        description: {
          en: "Gently bathing the Shiva Linga continuously with continuous streams of Cow Milk, Curd, Ghee, Honey, Sugar, Fruit juices, Coconut water, and pure Ganga water while chanting the sacred Namakam and Chamakam hymns.",
          te: "శివలింగంపై శంఖంతో గాని అభిషేక పాత్రతో గాని ఆవుపాలు, పెరుగు, నెయ్యి, తేనె, పంచదార, కొబ్బరినీరు మరియు గంగాజలంతో ధారగా అభిషేకిస్తూ నమక-చమకాలను పఠిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం నమః శంభవే చ మయోభవే చ నమః శంకరాయ చ మయస్కరాయ చ నమః శివాయ చ శివతరాయ చ ॥",
          transliteration: "Om Namah Sambhave Cha Mayo-bhave Cha Namah Shankaraya Cha Mayas-karaya Cha Namah Shivaya Cha Shiva-taraya Cha ||",
          scriptTe: "ఓం నమః శంభవే చ మయోభవే చ నమః శంకరాయ చ మయస్కరాయ చ నమః శివాయ చ శివతరాయ చ ॥"
        },
        meaning: {
          en: "Salutations to the Source of divine peace and joy! Salutations to the Bestower of worldly and spiritual bliss! Salutations to Shiva, the supremely auspicious, and to Him who is ever most auspicious!",
          te: "ఇహపర సాధకమైన సమస్త శుభాలను, ఆనందాలను ప్రసాదించేవాడు, అత్యంత మంగళకరుడైన పరమశివునికి నా భక్తిపూర్వక నమస్కారములు."
        },
        audioText: {
          en: "Om namah shambhave cha mayobhave cha namah shankaraya cha mayaskaraya cha namah shivaya cha shivataraya cha. Bathing the sacred Linga with Panchamrita.",
          te: "ఓం నమః శంభవే చ మయోభవే చ నమః శంకరాయ చ. పరమశివునికి రుద్రాభిషేక వేద మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Bilvashtaka Archana (Offering 108 Bilva Leaves)", te: "బిల్వాష్టక బిల్వార్చన" },
        description: {
          en: "Adorning the Shiva Linga with white sandalwood, cooling vibhuti, and offering fresh three-leafed Bilva stalks with reverence for destruction of sins.",
          te: "శివలింగానికి గంధం పూసి, విభూతి పెట్టి, త్రిదళం త్రిగుణాకారమైన మారేడు ఆకులతో బిల్వాష్టక శ్లోకాలు చదువుతూ అర్చిస్తారు."
        },
        mantra: {
          sanskrit: "త్రిదళం త్రిగుణాకారం త్రినేత్రం చ త్రియాయుధమ్ । త్రిజన్మపాపసంహారం ఏకబిల్వం శివార్పణమ్ ॥",
          transliteration: "Tridalam Trigunakaram Trinetram Cha Triyayudham | Trijanma-papa-samharam Eka-bilvam Shivaranam ||",
          scriptTe: "త్రిదళం త్రిగుణాకారం త్రినేత్రం చ త్రియాయుధమ్ । త్రిజన్మపాపసంహారం ఏకబిల్వం శివార్పణమ్ ॥"
        },
        meaning: {
          en: "Possessing three petals, representing the three cosmic Gunas (Sattva, Rajas, Tamas), symbol of the three eyes of Shiva and His divine trident weapon, destroyer of sins accumulated across three lifetimes—I offer this single sacred Bilva leaf unto Lord Shiva!",
          te: "మూడు దళాలు కలది, సత్వరజస్తమో గుణాల స్వరూపమైనది, పరమశివుని త్రినేత్రాల వంటిది, మూడు జన్మల పాపాలను సమూలంగా నశింపజేసే పవిత్ర బిల్వపత్రాన్ని శివార్పణము చేయుచున్నాను."
        },
        audioText: {
          en: "Tridalam trigunakaram trinetram cha triyayudham, trijanma-papa-samharam eka-bilvam shivarpanam. Worshipping Shiva with Bilva leaves.",
          te: "త్రిదళం త్రిగుణాకారం త్రినేత్రం చ త్రియాయుధమ్, త్రిజన్మపాపసంహారం ఏకబిల్వం శివార్పణమ్. బిల్వార్చన."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Lingashtakam & Karpura Neerajanam", te: "లింగాష్టకం & కర్పూర నీరాజనం" },
        description: {
          en: "Singing the sublime Lingashtakam hymns, offering fruit naivedyam, waving camphor lamps, and meditating quietly in profound inner absorption (Shivoham).",
          te: "బ్రహ్మమురారి సురార్చిత లింగం అంటూ లింగాష్టకాన్ని గానం చేసి, పండ్లు నివేదించి, కర్పూర హారతిని దర్శించి శివధ్యానంలో లీనమవుతారు."
        },
        mantra: {
          sanskrit: "బ్రహ్మమురారి సురార్చితలింగం నిర్మలభాసిత శోభితలింగమ్ । జన్మజదుఃఖ వినాశకలింగం తత్ ప్రణమామి సదాశివలింగమ్ ॥",
          transliteration: "Brahma-Murari-Surarchita Lingam Nirmala-bhasita Shobhita Lingam | Janmaja-duhkha Vinashaka Lingam Tat Pranamaami Sadashiva Lingam ||",
          scriptTe: "బ్రహ్మమురారి సురార్చితలింగం నిర్మలభాసిత శోభితలింగమ్ । జన్మజదుఃఖ వినాశకలింగం తత్ ప్రణమామి సదాశివలింగమ్ ॥"
        },
        meaning: {
          en: "I bow before that eternal Sadashiva Lingam, worshiped by Brahma, Vishnu, and the celestials, resplendent with spotless radiance, the ultimate destroyer of all sorrow born of worldly cycles!",
          te: "బ్రహ్మ, విష్ణువులు మరియు దేవతలచే నిరంతరం పూజింపబడేది, నిర్మలమైన కాంతి కలది, జనన మరణ సంసార దుఃఖాలను నశింపజేసే ఆ సదాశివ లింగానికి నమస్కరిస్తున్నాను."
        },
        audioText: {
          en: "Brahma-murari-surarchita lingam nirmala-bhasita shobhita lingam. Rejoicing in the divine glory of the eternal Shiva Linga.",
          te: "బ్రహ్మమురారి సురార్చితలింగం నిర్మలభాసిత శోభితలింగమ్. లింగాష్టక స్తోత్రము మరియు కర్పూర హారతి."
        }
      }
    ]
  },

  {
    id: "deepavali-lakshmi-kubera",
    category: "vratam-festival",
    phase: "Universal / Prosperity",
    phaseTe: "సర్వ జనులకు / లక్ష్మీ కటాక్షం",
    deity: "Goddess Mahalakshmi, Lord Kubera & Lord Ganesha",
    deityTe: "శ్రీ మహాలక్ష్మి, ధనాధిపతి కుబేరుడు మరియు వినాయకుడు",
    title: {
      en: "Deepavali Lakshmi-Kubera Puja",
      te: "దీపావళి లక్ష్మీ-కుబేర పూజా విధానం"
    },
    subtitle: {
      en: "Illuminating the Abode with Deepams, Coin Archana & Dhanalakshmi Invocations",
      te: "దీపారాధన, ధన-కనక-నాణేల పూజ, కుబేర పాశుపత మంత్రాలతో దారిద్ర్య నివారణ క్రతువు"
    },
    significance: {
      en: "Observed on Ashwayuja / Karthika Amavasya on the auspicious Diwali night, this puja invites Mahalakshmi (Goddess of Wealth) and Lord Kubera (Treasurer of the Gods) into homes and businesses. Rows of earthenware clay oil lamps (Diyas) are lit to dispel the darkness of ignorance and poverty. Devotees wash and worship silver/gold coins, cash boxes (Galla pette), and business account books, ushering in righteous prosperity.",
      te: "ఆశ్వయుజ/కార్తీక బహుళ అమావాస్య నాటి దీపావళి రాత్రి లక్ష్మీదేవి, కుబేరుడు మరియు గణపతులను పూజిస్తారు. మట్టి ప్రమిదలలో ఆవునెయ్యి లేదా నువ్వుల నూనెతో దీపాలు వెలిగించి చీకట్లను పారద్రోలుతారు. బంగారం, వెండి నాణేలను పాలలో కడిగి పసుపు-కుంకుమలతో పూజిస్తారు. వ్యాపారులు తమ లెక్కల పుస్తకాలకు పూజ చేస్తారు. దీనివలన రుణ బాధలు తొలగి, వ్యాపార లాభాలు, సిరిసంపదలు స్థిరంగా ఉంటాయి."
    },
    bestTiming: {
      en: {
        season: "Ashwayuja / Karthika Amavasya (October - November)",
        tithi: "Amavasya day during Pradosha Kala or Nishitha Kaala",
        timeOfDay: "Evening twilight (Pradosha) or Midnight (Sthira Lagna like Vrishabha Lagna)",
        details: "Performing puja in a Sthira (fixed) Lagna ensures wealth remains permanent in the house."
      },
      te: {
        season: "ఆశ్వయుజ / కార్తీక అమావాస్య (అక్టోబర్ - నవంబర్)",
        tithi: "అమావాస్య తిథి",
        timeOfDay: "సాయంకాలం ప్రదోష వేళ లేదా రాత్రి స్థిర లగ్నంలో (వృషభ లగ్నం)",
        details: "స్థిర లగ్నంలో పూజ చేయడం వలన లక్ష్మీదేవి చంచలత్వాన్ని విడిచి ఇంట్లో స్థిరంగా నివాసం ఉంటుంది."
      }
    },
    samagri: [
      { nameEn: "Clay Diyas (Matti Pramadalu) & Sesame oil / Cow Ghee", nameTe: "మట్టి ప్రమిదలు, నువ్వుల నూనె లేదా ఆవు నెయ్యి", quantity: "21 or 51 diyas", optional: false },
      { nameEn: "Silver or Gold coins (Vendi/Bangarapu Naaneelu)", nameTe: "వెండి లేదా బంగారు నాణేలు", quantity: "At least 1 coin", optional: false },
      { nameEn: "Lotus seeds / Kamalgatta or Red lotus flower", nameTe: "కమలగట్ట లేదా తామర పూలు", quantity: "1 lotus or mala", optional: false },
      { nameEn: "Account books / cash vault key (Talam chevi)", nameTe: "వ్యాపార లెక్కల పుస్తకాలు, బీరువా తాళం చెవి", quantity: "1 set", optional: false },
      { nameEn: "Sweets (Laddu, Kaju Katli) & Puffed rice (Pori/Maramaralu) with Batasha", nameTe: "మిఠాయిలు, పేలాలు (మరమరాలు), పటికబెల్లం / బత్తాసులు", quantity: "1 plate", optional: false },
      { nameEn: "Kumkum, Turmeric, Sandalwood paste, Akshatas", nameTe: "పసుపు, కుంకుమ, గంధం, అక్షతలు", quantity: "Standard", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Deepa Sthapana & Lighting the Auspicious Lamps", te: "దీప స్థాపన & ప్రమిదల ప్రజ్వలన" },
        description: {
          en: "Arranging clean clay diyas filled with sesame oil or ghee. Chanting the Deepa Jyoti mantra as the first wick is lit from an existing oil lamp, welcoming supreme illumination.",
          te: "మట్టి ప్రమిదలలో నువ్వుల నూనె లేదా ఆవు నెయ్యి పోసి, రెండు వత్తులు వేసి, దీపలక్ష్మిని స్మరిస్తూ దీపాలను వెలిగిస్తారు."
        },
        mantra: {
          sanskrit: "దీపో జ్యోతిః పరబ్రహ్మ దీపో జ్యోతిర్జనార్దనః । దీపో హరతు మే పాపం సంధ్యాదీప నమోస్తు తే ॥",
          transliteration: "Deepo Jyotih Para-Brahma Deepo Jyotir-Janardanah | Deepo Haratu Me Papam Sandhya-Deepa Namo-stute ||",
          scriptTe: "దీపో జ్యోతిః పరబ్రహ్మ దీపో జ్యోతిర్జనార్దనః । దీపో హరతు మే పాపం సంధ్యాదీప నమోస్తు తే ॥"
        },
        meaning: {
          en: "The flame of the lamp is the Supreme Absolute Reality! The flame of the lamp is Lord Janardana Himself! May the sacred lamp destroy my sins; salutations unto the twilight flame!",
          te: "దీపపు కాంతి పరబ్రహ్మ స్వరూపము, సాక్షాత్తు శ్రీమహావిష్ణువు. నా పాపములను నశింపజేసే సంధ్యా దీపమా! నీకు నా నమస్కారములు."
        },
        audioText: {
          en: "Deepo jyotih para-brahma deepo jyotir-janardanah, deepo haratu me papam sandhya-deepa namostute. Lighting the lamps of Deepavali.",
          te: "దీపో జ్యోతిః పరబ్రహ్మ దీపో జ్యోతిర్జనార్దనః. దీపారాధన మరియు చీకట్లను పారద్రోలే దివ్య కాంతి."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Kubera & Dhanalakshmi Coin Archana", te: "ధనలక్ష్మి & కుబేర నాణేల పూజ" },
        description: {
          en: "Placing silver and gold coins in a bronze plate, washing them with milk and rose water, applying sandal and vermilion, and worshiping with Kubera and Mahalakshmi mantras.",
          te: "వెండి, బంగారు నాణేలను పాలతో కడిగి పళ్ళెంలో ఉంచి, కుంకుమ, తామర పూలతో కుబేర, లక్ష్మీ మంత్రాలతో అర్చిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం యక్షాయ కుబేరాయ వైశ్రవణాయ ధనధాన్యాధిపతయే ధనధాన్యసమృద్ధిం మే దేహి దాపయ స్వాహా ॥",
          transliteration: "Om Yakshaya Kuberaya Vaishravanaya Dhana-dhanyadhipataye Dhana-dhanya-samriddhim Me Dehi Dapaya Swaha ||",
          scriptTe: "ఓం యక్షాయ కుబేరాయ వైశ్రవణాయ ధనధాన్యాధిపతయే ధనధాన్యసమృద్ధిం మే దేహి దాపయ స్వాహా ॥"
        },
        meaning: {
          en: "Om! Salutations to Lord Kubera, son of Vishrava, king of the Yakshas, master of all wealth and grains! Bestow upon us abundant wealth, prosperity, and grains!",
          te: "సకల ధనధాన్యములకు అధిపతియైన కుబేర స్వామికి నమస్కారము. మాకు అపారమైన ధనధాన్య సమృద్ధిని ప్రసాదించుము స్వామీ!"
        },
        audioText: {
          en: "Om yakshaya kuberaya vaishravanaya dhana-dhanyadhipataye dhana-dhanya-samriddhim me dehi dapaya swaha. Invoking Lord Kubera.",
          te: "ఓం యక్షాయ కుబేరాయ వైశ్రవణాయ ధనధాన్యాధిపతయే. కుబేర మంత్రము మరియు ధన పూజ."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Maha Lakshmi Ashtakam & Prasada Vitarana", te: "మహాలక్ష్మ్యష్టకం & నైవేద్య సమర్పణ" },
        description: {
          en: "Chanting the sacred Mahalakshmi Ashtakam, offering puffed rice (pori), batashas, and traditional sweets, and decorating the doorstep with lit diyas.",
          te: "నమస్తేస్తు మహామాయే అంటూ మహాలక్ష్మ్యష్టకం పఠించి, పేలాలు, బెల్లం, మిఠాయిలను నివేదించి, ఇల్లంతా దీపాలతో కాంతులీనేలా అలంకరిస్తారు."
        },
        mantra: {
          sanskrit: "నమస్తేస్తు మహామాయే శ్రీపీఠే సురపూజితే । శంఖచక్రగదాహస్తే మహాలక్ష్మి నమోస్తు తే ॥",
          transliteration: "Namastestu Maha-maye Shree-peethe Sura-poojite | Shankha-chakra-gada-haste Maha-lakshmi Namo-stute ||",
          scriptTe: "నమస్తేస్తు మహామాయే శ్రీపీఠే సురపూజితే । శంఖచక్రగదాహస్తే మహాలక్ష్మి నమోస్తు తే ॥"
        },
        meaning: {
          en: "Salutations to You, O Great Enchantress of the universe, enthroned upon the holy Sri Peetha, adored by all gods! Holding conch, discus, and mace in Your holy hands, Mahalakshmi, salutations unto You!",
          te: "శ్రీపీఠముపై కొలువుదీరిన తల్లి, దేవతలచే పూజింపబడే దేవి, శంఖ చక్ర గదాధారిణి అయిన ఓ మహాలక్ష్మీ దేవీ! నీకు సాష్టాంగ నమస్కారములు."
        },
        audioText: {
          en: "Namastestu mahamaye shree-peethe sura-poojite, shankha-chakra-gada-haste mahalakshmi namostute. Celebrating Diwali with Mother Mahalakshmi.",
          te: "నమస్తేస్తు మహామాయే శ్రీపీఠే సురపూజితే. మహాలక్ష్మీ అష్టక స్తోత్రము."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') window.PUJAS_VRATAMS = PUJAS_VRATAMS;
if (typeof globalThis !== 'undefined') globalThis.PUJAS_VRATAMS = PUJAS_VRATAMS;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUJAS_VRATAMS;
}
