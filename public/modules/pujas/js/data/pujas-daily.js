/**
 * Daily and Periodic Observances (నిత్య మరియు వార పూజలు)
 * Foundation for daily spiritual discipline, mental peace, and family sanctity.
 */

const PUJAS_DAILY = [
  {
    id: "nitya-deeparadhana-puja",
    category: "daily",
    phase: "Daily Routine (Nityakarma)",
    phaseTe: "నిత్య జీవన విధానం",
    deity: "Deepalakshmi, Gayatri & Ishta Devata",
    deityTe: "దీపలక్ష్మి, గాయత్రీ దేవి మరియు ఇష్టదైవం",
    title: {
      en: "Nitya Deeparadhana & Griha Deva Puja",
      te: "నిత్య దీపారాధన & గృహ దేవతార్చన విధి"
    },
    subtitle: {
      en: "Morning & Evening Twilight Lamp Lighting, Achamanam & Panchopachara Worship",
      te: "ఉదయ, సాయం సంధ్యలలో దీపం వెలిగించి, ఆచమనం, పంచోపచారాలతో ఇష్టదైవాన్ని పూజించే పద్ధతి"
    },
    significance: {
      en: "Nitya Deeparadhana is the foundation of Hindu household sanctity. Lighting two oil lamps with sesame oil or cow ghee (facing East or North) during Sandhya periods (dawn and dusk) purifies the home's subtle atmosphere, repels negative entities, and welcomes Goddess Lakshmi. Coupled with Achamanam and silent chanting of the Gayatri Mantra, it bestows emotional composure, razor-sharp focus, and perennial domestic happiness.",
      te: "ప్రతి హిందూ ఇంట ఉదయం మరియు సాయంత్రం సంధ్యా సమయాలలో దీపం వెలిగించడం పరమ పవిత్రం. ఇత్తడి లేదా వెండి కుందులలో ఆవునెయ్యి లేదా నువ్వుల నూనెతో రెండు వత్తులు వేసి తూర్పు లేదా ఉత్తర ముఖంగా దీపారాధన చేయాలి. ముందుగా విఘ్నేశ్వరుని స్మరించి, ఇష్టదైవానికి ధూప దీప నైవేద్యాలు (పండ్లు లేదా పాలు-బెల్లం) సమర్పించడం వలన గృహంలో శాంతి, ఆరోగ్యాలు నిరంతరం ఉంటాయి."
    },
    bestTiming: {
      en: {
        season: "Every single day without fail (Morning and Evening)",
        tithi: "Daily at Sandhya Kala",
        timeOfDay: "Morning: 5:30 AM - 7:00 AM (Pratah Sandhya); Evening: 6:00 PM - 7:15 PM (Sayam Sandhya)",
        details: "Never blow out the lamp with mouth. Quench with a flower or oil drops."
      },
      te: {
        season: "నిత్యం ప్రతిరోజూ (ఉదయం మరియు సాయంత్రం)",
        tithi: "నిత్య కర్మ",
        timeOfDay: "ఉదయం 5:30 నుండి 7:00 వరకు; సాయంత్రం 6:00 నుండి 7:15 వరకు",
        details: "దీపాన్ని నోటితో ఊది ఆర్పకూడదు. పువ్వుతో లేదా నూనె చుక్కతో శాంతింపజేయాలి."
      }
    },
    samagri: [
      { nameEn: "Brass or Silver Oil Lamps (Pitta/Ittadi Kundulu)", nameTe: "ఇత్తడి లేదా వెండి దీపపు కుందులు", quantity: "2 lamps (Kamala kundulu)", optional: false },
      { nameEn: "Sesame oil (Nuvvula noone) or Pure Cow Ghee", nameTe: "నువ్వుల నూనె లేదా ఆవు నెయ్యి", quantity: "As needed", optional: false },
      { nameEn: "Cotton wicks (Patti vatthulu - 2 wicks together for each lamp)", nameTe: "పత్తి వత్తులు (జంట వత్తులు)", quantity: "4 wicks", optional: false },
      { nameEn: "Incense sticks (Agarbatti) & Dhoop holder", nameTe: "అగరుబత్తీలు మరియు దూపపాత్ర", quantity: "1 packet", optional: false },
      { nameEn: "Bell (Ghanta with Garuda or Nandi seal)", nameTe: "పూజా గంట", quantity: "1", optional: false },
      { nameEn: "Fresh flowers & Sandalwood paste", nameTe: "తాజా పువ్వులు మరియు గంధం", quantity: "Daily fresh", optional: false },
      { nameEn: "Simple Naivedyam: Banana, Raisins, or Milk with Sugar", nameTe: "నైవేద్యం: అరటిపండు, ఎండు ద్రాక్ష, లేదా పంచదార పాలు", quantity: "Small cup", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Achamanam & Deepa Prajwalanam", te: "ఆచమనము & దీపారాధన" },
        description: {
          en: "Take a sip of water from the spoon (Uddharini) chanting Keshavaya Svaha, Narayanaya Svaha, Madhavaya Svaha. Wash hands and light the lamps using a separate matchstick or oil wick.",
          te: "చేతిలో ఉద్ధరిణెతో జలం తీసుకుని ఓం కేశవాయ స్వాహా, ఓం నారాయణాయ స్వాహా, ఓం మాధవాయ స్వాహా అని మూడు మార్లు ఆచమనం చేసి, దీపాలను వెలిగిస్తారు."
        },
        mantra: {
          sanskrit: "శుభం కరోతి కల్యాణం ఆరోగ్యం ధనసంపదః । శత్రుబుద్ధివినాశాయ దీపజ్యోతిర్నమోస్తు తే ॥",
          transliteration: "Shubham Karoti Kalyanam Aarogyam Dhana-sampadah | Shatru-buddhi-vinashaya Deepa-jyotir-namo-stute ||",
          scriptTe: "శుభం కరోతి కల్యాణం ఆరోగ్యం ధనసంపదః । శత్రుబుద్ధివినాశాయ దీపజ్యోతిర్నమోస్తు తే ॥"
        },
        meaning: {
          en: "The divine flame of the lamp brings auspiciousness, supreme welfare, radiant health, and abundant wealth! It dissolves all hostile, dark, and negative thoughts in the intellect; salutations unto the flame of light!",
          te: "శుభములను, శ్రేయస్సును, ఆయురారోగ్యాలను, ధనసంపదలను చేకూర్చునట్టిదీ, దుష్ట ఆలోచనలను నాశనము చేయునట్టిదైన దివ్య దీపజ్యోతికి నా నమస్కారములు."
        },
        audioText: {
          en: "Shubham karoti kalyanam aarogyam dhana-sampadah, shatru-buddhi-vinashaya deepa-jyotir-namostute. Lighting the sacred lamp of wisdom.",
          te: "శుభం కరోతి కల్యాణం ఆరోగ్యం ధనసంపదః. నిత్య దీపారాధన మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Ghanta Nada (Ringing the Sacred Bell)", te: "ఘంటానాదం (పూజా గంట మోగించుట)" },
        description: {
          en: "Ring the temple bell with the left hand while chanting the Ghanta mantra, driving away negative energies and invoking the gods.",
          te: "ఎడమ చేతితో పూజా గంటను మధురంగా మోగిస్తూ, రాక్షస శక్తులను తరిమి దేవతలను స్వాగతించే శ్లోకం పఠిస్తారు."
        },
        mantra: {
          sanskrit: "ఆగమార్థం తు దేవానాం గమనార్థం తు రక్షసామ్ । కుర్వే ఘంటారవం తత్ర దేవతాహ్వాన లాంఛనమ్ ॥",
          transliteration: "Aagamartham tu devanam gamanartham tu rakshasam | Kurve ghanta-ravam tatra devatahvana lanchanam ||",
          scriptTe: "ఆగమార్థం తు దేవానాం గమనార్థం తు రక్షసామ్ । కుర్వే ఘంటారవం తత్ర దేవతాహ్వాన లాంఛనమ్ ॥"
        },
        meaning: {
          en: "For the joyous arrival of the divine gods, and for the prompt departure of all demonic forces, I ring this sacred bell, the herald of divine invocation!",
          te: "దేవతల ఆగమనం కొరకు, దుష్ట శక్తుల నిష్క్రమణ కొరకు దేవతలను ఆహ్వానిస్తూ ఈ ఘంటారావాన్ని మోగిస్తున్నాను."
        },
        audioText: {
          en: "Aagamartham tu devanam gamanartham tu rakshasam. Ringing the sacred bell to sanctify the atmosphere.",
          te: "ఆగమార్థం తు దేవానాం గమనార్థం తు రక్షసామ్. ఘంటానాదం."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Panchopachara Puja (Gandha, Pushpa, Dhoopa, Deepa, Naivedya)", te: "పంచోపచార పూజ & నైవేద్యం" },
        description: {
          en: "Offering the 5 elementary services: Gandha (Sandalwood / Earth), Pushpa (Flowers / Ether), Dhoopa (Fragrant incense / Air), Deepa (Illumination / Fire), Naivedya (Food offering / Water).",
          te: "గంధం, పువ్వులు, ధూపం, దీపం, నైవేద్యం అను పంచోపచారములను స్వామికి భక్తితో సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "లం పృథివ్యాత్మనే గంధం సమర్పయామి । హం ఆకాశాత్మనే పుష్పం సమర్పయామి । యం వాయ్వాత్మనే ధూపం సమర్పయామి । రం వహ్న్యాత్మనే దీపం దర్శయామి । వం అమృతాత్మనే నైవేద్యం నివేదయామి ॥",
          transliteration: "Lam Prithivy-atmane gandham samarpayami | Ham Akashatmane pushpam samarpayami | Yam Vayv-atmane dhoopam samarpayami | Ram Vahny-atmane deepam darshayami | Vam Amritatmane naivedyam nivedayami ||",
          scriptTe: "లం పృథివ్యాత్మనే గంధం సమర్పయామి । హం ఆకాశాత్మనే పుష్పం సమర్పయామి । యం వాయ్వాత్మనే ధూపం సమర్పయామి । రం వహ్న్యాత్మనే దీపం దర్శయామి । వం అమృతాత్మనే నైవేద్యం నివేదయామి ॥"
        },
        meaning: {
          en: "Representing the 5 cosmic elements (Earth, Space, Air, Fire, Water), I offer Sandalwood, Flowers, Incense, Lamp, and Nectar Naivedya to the Divine Presence!",
          te: "పంచభూతముల స్వరూపమైన గంధ, పుష్ప, ధూప, దీప, నైవేద్యములను సమర్పిస్తున్నాను."
        },
        audioText: {
          en: "Offering the five sacred universal elements of Gandha, Pushpa, Dhoopa, Deepa, and Naivedya.",
          te: "పంచోపచార పూజ. గంధ, పుష్ప, ధూప, దీప, నైవేద్య సమర్పణ."
        }
      }
    ]
  },

  {
    id: "shiva-pradosha-puja",
    category: "daily",
    phase: "Bi-monthly (Trayodashi)",
    phaseTe: "త్రయోదశి ప్రదోష కాలం",
    deity: "Lord Shiva & Nandi (Rishabha)",
    deityTe: "పరమశివుడు మరియు నందీశ్వరుడు",
    title: {
      en: "Shiva Pradosha Vrata Puja",
      te: "శ్రీ శివ ప్రదోష వ్రత పూజా విధానం"
    },
    subtitle: {
      en: "Twilight Abhishekam to Lord Shiva & Nandi for Debt Relief, Health & Inner Peace",
      te: "త్రయోదశి సాయం సంధ్యా సమయాన ఋణ విముక్తి, సర్వ పాపహరణానికై చేసే ప్రదోష పూజ"
    },
    significance: {
      en: "Pradosha occurs twice every lunar month on the 13th day (Trayodashi) during Shukla and Krishna Pakshas. The period of 1.5 hours before and after sunset is called Pradosha Kala. On this sacred twilight, Lord Shiva dances on Kailasa in joyful grace while all 33 crore deities play cosmic instruments. Bathing Shiva and Nandi with water, milk, and honey, and viewing Shiva through the horns of Nandi clears crippling financial debts, cures physical ailments, and brings unshakeable peace.",
      te: "ప్రతి పక్షంలో త్రయోదశి తిథి నాడు సూర్యాస్తమయ సమయానికి ముందు-వెనుక 45 నిమిషాల కాలాన్ని ప్రదోష కాలం అంటారు. ఈ సమయంలో పరమశివుడు కైలాసంలో ఆనంద తాండవం చేస్తాడని, సమస్త దేవతలు ఆయనను స్తుతిస్తారని విశ్వాసం. శివలింగానికి, నందీశ్వరునికి పాలు, తేనె, విభూతితో అభిషేకం చేసి, నంది కొమ్ముల మధ్య నుండి శివలింగాన్ని దర్శిస్తే దారిద్ర్యం, దీర్ఘకాలిక ఋణ బాధలు సమసిపోతాయి. శనివారం వచ్చే ప్రదోషాన్ని 'శని ప్రదోషం' అని, సోమవారం వచ్చే దానిని 'సోమ ప్రదోషం' అని అత్యంత పవిత్రంగా భావిస్తారు."
    },
    bestTiming: {
      en: {
        season: "Shukla and Krishna Paksha Trayodashi every month",
        tithi: "Trayodashi (13th lunar day)",
        timeOfDay: "Evening 4:30 PM to 6:30 PM (Sunset twilight)",
        details: "Maha Pradosham falling on Saturday (Shani Pradosham) or Monday (Soma Pradosham) is supreme."
      },
      te: {
        season: "ప్రతినెల శుక్ల మరియు కృష్ణ పక్ష త్రయోదశి తిథులు",
        tithi: "త్రయోదశి",
        timeOfDay: "సాయంత్రం 4:30 నుండి 6:30 గంటల మధ్య సంధ్యా సమయం",
        details: "శనివారం నాడు వచ్చే శని ప్రదోషం లేదా సోమవారం వచ్చే సోమ ప్రదోషం విశేష ఫలప్రదం."
      }
    },
    samagri: [
      { nameEn: "Shiva Linga & Nandi idol", nameTe: "శివలింగం మరియు నంది ప్రతిమ", quantity: "1 set", optional: false },
      { nameEn: "Bilva leaves (Maredu aakulu)", nameTe: "మారేడు దళాలు", quantity: "21 leaves", optional: false },
      { nameEn: "Raw milk, Curd, Honey, Sandal paste", nameTe: "పచ్చి ఆవుపాలు, పెరుగు, తేనె, గంధం", quantity: "Small cup each", optional: false },
      { nameEn: "Vibhuti (Sacred ash)", nameTe: "పవిత్ర విభూతి", quantity: "1 packet", optional: false },
      { nameEn: "Ghee lamp with 2 wicks", nameTe: "ఆవు నెయ్యి దీపం", quantity: "2 lamps", optional: false },
      { nameEn: "Fruits & Cooked Rice / Pongal naivedyam", nameTe: "పండ్లు, నైవేద్య పరమాన్నం లేదా పాయసం", quantity: "1 bowl", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Nandi Puja & Linga Abhishekam", te: "నంది పూజ & శివలింగ అభిషేకం" },
        description: {
          en: "Begin by worshiping Nandi, applying sandalwood to his horns, then bathing the Shiva Linga with milk, honey, and water while chanting Shiva Panchakshari.",
          te: "మొదట నందీశ్వరుని కొమ్ములకు గంధం, విభూతి పూసి పూజించి, అనంతరం శివలింగాన్ని పంచామృతాలతో అభిషేకిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం నమః శివాయ । జయ జయ శంకర హర హర శంకర ॥",
          transliteration: "Om Namah Shivaya | Jaya Jaya Shankara Hara Hara Shankara ||",
          scriptTe: "ఓం నమః శివాయ । జయ జయ శంకర హర హర శంకర ॥"
        },
        meaning: {
          en: "Salutations to Shiva, the supreme auspicious reality! Victory, victory to Shankara, the dispeller of all darkness!",
          te: "ఓం నమః శివాయ. సకల శోకములను హరించే పరమేశ్వరునికి నమస్కారములు."
        },
        audioText: {
          en: "Om namah shivaya, jaya jaya shankara hara hara shankara. Pradosha twilight abhishekam.",
          te: "ఓం నమః శివాయ. ప్రదోష వేళ శివాభిషేకము."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Darshanam between Nandi Horns & Deeparadhana", te: "నంది కొమ్ముల మధ్య నుండి లింగ దర్శనం & హారతి" },
        description: {
          en: "Gaze at the Shiva Linga passing through the space between the two horns of Nandi, followed by lighting the ghee lamp and offering Bilva leaves.",
          te: "నందీశ్వరుని రెండు కొమ్ముల మధ్య నుండి శివలింగాన్ని భక్తితో దర్శించి, మారేడు ఆకులతో పూజించి కర్పూర హారతిని సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "ప్రదోష సమయే దేవం కైలాసశిఖరస్థితమ్ । నృత్యంతం పరమం శంభుం ధ్యాయేత్ సర్వాభీష్టదమ్ ॥",
          transliteration: "Pradosha samaye devam kailasa-shikharasthitam | Nrityantam paramam shambhum dhyayet sarvabheeshtadam ||",
          scriptTe: "ప్రదోష సమయే దేవం కైలాసశిఖరస్థితమ్ । నృత్యంతం పరమం శంభుం ధ్యాయేత్ సర్వాభీష్టదమ్ ॥"
        },
        meaning: {
          en: "During the Pradosha twilight, we meditate upon Lord Shambhu dancing sublimely atop Mount Kailasa, fulfilling every noble longing of His devotees!",
          te: "ప్రదోష వేళ కైలాస పర్వతంపై ఆనంద తాండవం చేస్తూ సర్వ కోరికలను ఈడేర్చే పరమశివుని ధ్యానిస్తున్నాను."
        },
        audioText: {
          en: "Pradosha samaye devam kailasa-shikharasthitam. Contemplating the cosmic dance of Shiva during Pradosha.",
          te: "ప్రదోష సమయే దేవం కైలాసశిఖరస్థితమ్. ప్రదోష దర్శనము."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') window.PUJAS_DAILY = PUJAS_DAILY;
if (typeof globalThis !== 'undefined') globalThis.PUJAS_DAILY = PUJAS_DAILY;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUJAS_DAILY;
}
