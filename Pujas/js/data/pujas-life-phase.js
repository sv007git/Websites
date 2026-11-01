/**
 * Life Phase Pujas - Shodasha Samskaras (షోడశ సంస్కారాలు)
 * Authentic rituals from birth to elderhood and ancestral remembrance.
 */

const PUJAS_LIFE_PHASE = [
  {
    id: "seemantham",
    category: "life-phase",
    phase: "Pregnancy & Motherhood",
    phaseTe: "గర్భధారణ & మాతృత్వ దశ",
    deity: "Lakshmi & Raka Devi",
    deityTe: "లక్ష్మీదేవి మరియు రాకా దేవి",
    title: {
      en: "Seemantham (Simantonnayana)",
      te: "సీమంతోన్నయనము (సీమంతం)"
    },
    subtitle: {
      en: "Sacred Baby Shower for Mother's Well-being & Child's Intellect",
      te: "గర్భిణీ స్త్రీ క్షేమం మరియు మేధోవంతమైన సంతానం కొరకు వైదిక సంస్కారం"
    },
    significance: {
      en: "Simantonnayana is the third major Vedic Samskara performed during the 6th, 7th, or 8th month of pregnancy. The husband parts the mother's hair with a sacred porcupine quill, darbha grass, and udumbara twig while chanting Vedic mantras, invoking Goddess Lakshmi and Saraswati for the unborn child's sharp mind, long life, and psychological serenity of the mother.",
      te: "షోడశ సంస్కారాలలో సీమంతం ఎంతో విశిష్టమైనది. గర్భం ధరించిన 6వ, 7వ లేదా 8వ మాసంలో దీనిని ఆచరిస్తారు. భర్త గర్భవతి అయిన భార్య శిరోజాలను ఉదుంబర కొమ్మ, దర్భలు, ముళ్ళపంది ముల్లుతో పాపిట తీస్తూ వేద మంత్రాలను పఠిస్తాడు. దీనివలన పుట్టబోయే బిడ్డకు మేధాశక్తి, ఆయురారోగ్యాలు మరియు తల్లికి మానసిక ప్రశాంతత చేకూరుతాయి."
    },
    bestTiming: {
      en: {
        season: "6th, 7th, or 8th month of pregnancy",
        tithi: "Shukla Paksha Dvitiya, Tritiya, Panchami, Saptami, Dashami, Trayodashi",
        timeOfDay: "Morning (Pratah Kala) before noon",
        details: "Auspicious nakshatras: Rohini, Mrigashira, Pushyami, Uttara, Hasta, Chitra, Anuradha, Shravana, Revati. Avoid Tuesday, Saturday, and Rahu Kalam."
      },
      te: {
        season: "గర్భం ధరించిన 6వ, 7వ లేదా 8వ నెలలో",
        tithi: "శుక్ల పక్ష విదియ, తదియ, పంచమి, సప్తమి, దశమి, త్రయోదశి",
        timeOfDay: "ఉదయం వేళ (ప్రాతఃకాలం - మధ్యాహ్నానికి పూర్వం)",
        details: "రోహిణి, మృగశిర, పుష్యమి, ఉత్తర, హస్త, చిత్త, అనూరాధ, శ్రవణం, రేవతి నక్షత్రాలలో శుభకరం. మంగళ, శనివారాలు మరియు రాహుకాలం వర్జ్యం."
      }
    },
    samagri: [
      { nameEn: "Turmeric & Kumkuma", nameTe: "పసుపు, కుంకుమ", quantity: "100g each", optional: false },
      { nameEn: "Betel leaves & Supari", nameTe: "తమలపాకులు, వక్కలు", quantity: "25 leaves, 15 supari", optional: false },
      { nameEn: "Green glass bangles (Gaajulu)", nameTe: "ఆకుపచ్చ గాజులు", quantity: "2-3 dozen", optional: false, noteEn: "Adorned by mother and offered to sumangalis", noteTe: "తల్లికి వేయడానికి మరియు ముత్తైదువులకు ఇవ్వడానికి" },
      { nameEn: "Porcupine quill (Mullapandi mullu)", nameTe: "ముళ్ళపంది ముల్లు (శల్యము)", quantity: "1", optional: false, noteEn: "Traditional tool for parting hair (Simanta)", noteTe: "పాపిట తీయడానికి సంప్రదాయ వస్తువు" },
      { nameEn: "Udumbara (Athi) branch twig", nameTe: "మేడి కొమ్మ (ఉదుంబర శాఖ)", quantity: "1 with tender fruit", optional: false },
      { nameEn: "Darbha grass & Mango leaves", nameTe: "దర్భలు మరియు మామిడి ఆకులు", quantity: "1 bundle", optional: false },
      { nameEn: "New Silk Saree for Mother", nameTe: "గర్భిణీకి నూతన పట్టు వస్త్రములు", quantity: "1 set", optional: false },
      { nameEn: "Variety Sweets & Chitrannam (5 or 7 varieties of rice)", nameTe: "5 లేదా 7 రకాల ప్రసాదాలు / చిత్రాన్నాలు", quantity: "As per family tradition", optional: false, noteEn: "Pulihara, Sweet Pongal, Daddojanam, etc.", noteTe: "పులిహోర, పాయసం, దద్దోజనం మొదలైనవి" },
      { nameEn: "Coconuts & Seasonal Fruits", nameTe: "కొబ్బరికాయలు, పండ్లు (అరటి, దానిమ్మ, సేపు)", quantity: "5 coconuts, mixed fruits", optional: false },
      { nameEn: "Camphor, Incense & Sandalwood paste", nameTe: "కర్పూరం, అగరుబత్తీలు, మంచి గంధం", quantity: "1 pack each", optional: false },
      { nameEn: "Akshatalu (Sacred yellow rice)", nameTe: "అక్షతలు", quantity: "1 bowl", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Achamanam & Vigneshwara Puja", te: "ఆచమనము & విఘ్నేశ్వర పూజ" },
        description: {
          en: "Begin with Achamanam for inner purification, followed by invoking Lord Ganesha to remove all obstacles from the child's birth and mother's life.",
          te: "మూడు మార్లు ఆచమనం చేసి శుద్ధి పొందాలి. అనంతరం శ్రీ విఘ్నేశ్వరుని స్మరిస్తూ పూజ నిర్విఘ్నంగా జరిగేలా ప్రార్థించాలి."
        },
        mantra: {
          sanskrit: "शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् । प्रसन्नवदनं ध్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥",
          transliteration: "Shuklam-baradharam Vishnum Shashi-varnam Chatur-bhujam | Prasanna-vadanam Dhyayet Sarva-vighnopa-shantaye ||",
          scriptTe: "శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ । ప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥"
        },
        meaning: {
          en: "We meditate on Lord Vishnu/Ganesha, clad in pure white, luminous as the moon, endowed with four arms, possessing a tranquil, benign countenance, for the pacification and cessation of all obstacles.",
          te: "తెల్లని వస్త్రము ధరించినవాడు, చంద్రుని వంటి ప్రకాశం కలవాడు, నాలుగు భుజములు గలవాడు, ప్రసన్నమైన ముఖము కలవాడైన స్వామిని సమస్త విఘ్నములు తొలగిపోవుటకై ధ్యానిస్తున్నాను."
        },
        audioText: {
          en: "Om Shuklam baradharam Vishnum Shashi-varnam Chatur-bhujam. Prasanna-vadanam Dhyayet Sarva-vighnopa-shantaye. Meditating upon Lord Ganesha to remove all hindrances.",
          te: "ఓం శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్, ప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే. విఘ్నేశ్వరుని ప్రార్థించి పూజను ప్రారంభిస్తున్నాము."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Maha Sankalpam for Mother & Baby", te: "గర్భిణీ-శిశు రక్షణ మహా సంకల్పం" },
        description: {
          en: "The husband and wife take akshatas, water, and flowers to state their Gotra, names, location, and the specific prayer for the healthy growth and brilliant intellect of the baby.",
          te: "దంపతులు చేతిలో అక్షతలు, పువ్వులు, జలం ఉంచుకుని గోత్ర నామాలను ఉచ్చరించి, గర్భస్థ శిశువు సుఖ ప్రసవం మరియు జ్ఞానవంతుడగుటకై సంకల్పం చేస్తారు."
        },
        mantra: {
          sanskrit: "मम आत्मनः भार्यायाः गर्भस्थ-శిశోః ఆయుర్-ఆరోగ్య-తేజో-మేధా-సమృద్ధి-పూర్వకం సుఖప్రసవార్థం సీమంతోన్నయన-కర్మ కరిష్యే ॥",
          transliteration: "Mama atmanah bharyayah garbhastha-shishoh ayur-arogya-tejo-medha-samriddhi-purvakam sukha-prasavartham seemantonnayana-karma karishye ||",
          scriptTe: "మమ ఆత్మనః భార్యాయాః గర్భస్థ-శిశోః ఆయుర్-ఆరోగ్య-తేజో-మేధా-సమృద్ధి-పూర్వకం సుఖప్రసవార్థం సీమంతోన్నయన-కర్మ కరిష్యే ॥"
        },
        meaning: {
          en: "For the longevity, sound health, divine brilliance, and high intellect of the child residing within the womb of my wife, and for an auspicious, effortless delivery, I perform this Simantonnayana ritual.",
          te: "నా భార్య గర్భమందున్న శిశువుకు ఆయురారోగ్యాలు, వర్చస్సు, ఉన్నతమైన బుద్ధి కలుగుట కొరకు మరియు క్షేమకరమైన సుఖ ప్రసవం కొరకు ఈ సీమంతోన్నయన కర్మను ఆచరిస్తున్నాను."
        },
        audioText: {
          en: "Mama atmanah bharyayah garbhastha-shishoh ayur-arogya-tejo-medha-samriddhi-purvakam sukha-prasavartham seemantonnayana-karma karishye.",
          te: "మమ ఆత్మనః భార్యాయాః గర్భస్థ శిశోః ఆయురారోగ్య తేజో మేధా సమృద్ధి పూర్వకం సుఖప్రసవార్థం సీమంతోన్నయన కర్మ కరిష్యే."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Parting of Hair (Simanta Vidhi)", te: "సీమంతం - శిరోజాలు పాపిట తీయుట" },
        description: {
          en: "The husband gently parts the mother's hair upwards from forehead to crown using the udumbara twig, porcupine quill, and darbha stalk, chanting the hymn to Raka Devi and the musical Veena invocation.",
          te: "భర్త ఉదుంబర (మేడి) కొమ్మ, శల్యము మరియు దర్భలతో భార్య నుదుటి నుండి పైవరకు పాపిట తీస్తూ రాకా దేవిని స్తుతించే మంత్రాలను పఠిస్తాడు."
        },
        mantra: {
          sanskrit: "రాకామహం సుహవాం సుష్టుతీ హువే శృణోతు నః సుభగా బోధతు త్మనా । సీవ్యత్వపః సూచ్యాచ్చిద్యమానాయా దదాతు వీరం శతదాయముక్థ్యమ్ ॥",
          transliteration: "Rakam-aham suhavam sushtuti huve shrinotu nah subhaga bodhatu tmana | Seevyatv-apah soochyac-chidyamanaya dadatu veeram shatadayam-ukthyam ||",
          scriptTe: "రాకామహం సుహవాం సుష్టుతీ హువే శృణోతు నః సుభగా బోధతు త్మనా । సీవ్యత్వపః సూచ్యాచ్చిద్యమానాయా దదాతు వీరం శతదాయముక్థ్యమ్ ॥"
        },
        meaning: {
          en: "I invoke the benevolent Goddess Raka (Goddess of the full moon of fulfillment) with sacred praise. May She hear our prayer, protect the mother's womb as if sewing with an unbroken needle, and grant us a heroic, luminous child endowed with hundredfold life.",
          te: "సౌభాగ్యప్రదాయిని అయిన రాకా దేవిని చక్కని స్తుతులతో ప్రార్థిస్తున్నాను. ఆమె మా ప్రార్థన విని రక్షించుగాక. గర్భమును సూదితో కుట్టినట్లు స్థిరపరచి, శతాధిక ఆయుష్షు, పరాక్రమము కలిగిన సుపుత్రుని ప్రసాదించుగాక."
        },
        audioText: {
          en: "Chanting the sacred Vedic verse to Goddess Raka while parting the hair, praying for the child's strength, intellect and divine protection.",
          te: "రాకామహం సుహవాం సుష్టుతీ హువే శృణోతు నః సుభగా బోధతు త్మనా. పాపిట తీస్తూ గర్భ రక్షణకై చేసే పవిత్ర వేద మంత్రం."
        }
      },
      {
        stepNumber: 4,
        title: { en: "Bangle Ceremony (Gaajula Utsavam) & Sumangali Blessings", te: "గాజులు వేయుట & ముత్తైదువుల ఆశీర్వచనం" },
        description: {
          en: "Sumangalis (married elders) place green glass bangles onto the mother's wrists, apply sandalwood and vermilion, and shower Akshatas while singing auspicious traditional mangala haratis.",
          te: "ముత్తైదువులు గర్భిణీకి ఆకుపచ్చని గాజులు వేసి, గంధము, కుంకుమలు పెట్టి, మంగళ హారతులు పాడుతూ అక్షతలతో దీవిస్తారు."
        },
        mantra: {
          sanskrit: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే । శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తు తే ॥",
          transliteration: "Sarva-mangala Mangalye Shive Sarvartha Sadhike | Sharanye Tryambake Gauri Narayani Namo-stute ||",
          scriptTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే । శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తు తే ॥"
        },
        meaning: {
          en: "Salutations to You, O Auspicious Gauri, the embodiment of all auspiciousness, the fulfiller of every noble goal, the refuge of all souls, Narayani!",
          te: "సకల మంగళములను ప్రసాదించే తల్లి, సర్వార్థములను నెరవేర్చే శివరూపిణి, ముల్లోకాలకు శరణ్యురాలైన గౌరీ నారాయణికి నమస్కారములు."
        },
        audioText: {
          en: "Sarva mangala mangalye shive sarvartha sadhike, sharanye tryambake gauri narayani namostute. Blessings with bangles, vermilion, and sacred rice.",
          te: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే, శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తు తే. ముత్తైదువుల దీవెనలు మరియు మంగళహారతి."
        }
      }
    ]
  },

  {
    id: "namakaranam",
    category: "life-phase",
    phase: "Infancy & Childhood",
    phaseTe: "శైశవ & బాల్య దశ",
    deity: "Brihaspati, Agni & Kuladevata",
    deityTe: "బృహస్పతి, అగ్నిదేవుడు మరియు కులదైవం",
    title: {
      en: "Namakaranam (Naming Ceremony)",
      te: "నామకరణ సంస్కారము (బారెస / ఊయల పండుగ)"
    },
    subtitle: {
      en: "Bestowing Identity, Astrology Alignment & Vedic Blessings on the Newborn",
      te: "నవజాత శిశువుకు నక్షత్ర నామము మరియు లోక పరిచయము కల్పించే సంస్కారం"
    },
    significance: {
      en: "Namakarana is the 5th Samskara performed typically on the 11th, 12th, or 21st day after childbirth (or after Jatakarma and Shuddhi). The father whispers the sacred astrological name (based on the Janma Nakshatra Pada) and the popular name into the baby's right ear with sacred grass, blessing the child with radiant health, honor, and spiritual dignity.",
      te: "శిశువు జన్మించిన 11వ, 12వ లేక 21వ రోజున నామకరణం (బారెస) జరుపుకుంటారు. శిశువు జన్మ నక్షత్ర పాదం ఆధారంగా నిర్ణయించిన నక్షత్ర నామమును మరియు వ్యవహార నామమును తండ్రి లేక మేనమామ శిశువు కుడి చెవిలో ఉంగరంతో లేదా తమలపాకుతో మూడు మార్లు మెల్లగా ఉచ్చరిస్తారు. ఇది శిశువుకు సంస్కార బలాన్ని, దీర్ఘాయువును చేకూరుస్తుంది."
    },
    bestTiming: {
      en: {
        season: "11th, 12th, 16th, or 21st day after birth",
        tithi: "Shukla or auspicious Krishna Paksha (Dwitiya, Tritiya, Panchami, Saptami, Dashami, Ekadashi, Trayodashi)",
        timeOfDay: "Morning hours during Abhijit Muhurtham or Brahma Muhurtham",
        details: "Fixed nakshatras like Rohini, Uttara Phalguni, Uttarashadha, Uttara Bhadrapada or gentle nakshatras like Hasta, Mrigashira, Anuradha, Revati."
      },
      te: {
        season: "జన్మించిన 11వ, 12వ, 16వ లేదా 21వ రోజున",
        tithi: "విదియ, తదియ, పంచమి, సప్తమి, దశమి, ఏకాదశి, త్రయోదశి తిథులు",
        timeOfDay: "ఉదయం పూట అభిజిత్ ముహూర్తం లేదా శుభ సమయం",
        details: "స్థిర నక్షత్రాలు (రోహిణి, ఉత్తర, ఉత్తరాషాఢ, ఉత్తరాభాద్ర) లేదా మృదు నక్షత్రాలైన హస్త, మృగశిర, అనూరాధ, రేవతిలలో అత్యంత శుభప్రదం."
      }
    },
    samagri: [
      { nameEn: "Gold ring or Betel leaf stem", nameTe: "బంగారు ఉంగరం లేదా తమలపాకు కాడ", quantity: "1", optional: false, noteEn: "Used to whisper the name into the infant's ear", noteTe: "చెవిలో పేరు చెప్పేందుకు" },
      { nameEn: "New wooden cradle (Uyyala) & Decor", nameTe: "నూతన ఊయల, అలంకరణ వస్తువులు", quantity: "1", optional: false },
      { nameEn: "Bronze plate (Kanchu kancham) with raw rice", nameTe: "బియ్యం పోసిన కంచు పళ్ళెం", quantity: "1 plate filled with rice", optional: false, noteEn: "To write the baby's name in rice", noteTe: "బియ్యంలో పేరు వ్రాయడానికి" },
      { nameEn: "Gold piece or coin (Swarnam)", nameTe: "బంగారు ముక్క / నాణెం", quantity: "1", optional: false },
      { nameEn: "New clothes for Baby, Mother & Father", nameTe: "పాప/బాబుకు మరియు తల్లిదండ్రులకు నూతన వస్త్రాలు", quantity: "1 set each", optional: false },
      { nameEn: "Panchagavya or Punyahavachanam kalasha", nameTe: "పుణ్యాహవాచన కలశ సామాగ్రి", quantity: "1 set", optional: false },
      { nameEn: "Ghee, Honey (Madhu-sarpi mixture)", nameTe: "నెయ్యి మరియు స్వచ్ఛమైన తేనె", quantity: "Small cup", optional: false },
      { nameEn: "Flowers, Turmeric, Kumkum & Akshatas", nameTe: "పువ్వులు, పసుపు, కుంకుమ, అక్షతలు", quantity: "Standard puja quantity", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Punyahavachanam (Purification Ritual)", te: "పుణ్యాహవాచనము (శుద్ధి కార్యక్రమం)" },
        description: {
          en: "Purifying the house and baby from birth sutaka (postpartum impurity) by sprinkling consecrated water from the Varuna Kalasha.",
          te: "వరుణ కలశాన్ని ప్రతిష్ఠించి, మంత్రజలంతో ఇల్లంతా మరియు శిశువుపై చల్లి పురిటి సూతక విముక్తి గావిస్తారు."
        },
        mantra: {
          sanskrit: "పునస్తు మాం దేవజనాః పునంతు మనవో ధియా । పునంతు విశ్వ భూతాని పవమానః పునాతు మా ॥",
          transliteration: "Punantu maam devajanah punantu manavo dhiya | Punantu vishva bhootani pavamanah punatu maam ||",
          scriptTe: "పునంతు మాం దేవజనాః పునంతు మనవో ధియా । పునంతు విశ్వ భూతాని పవమానః పునాతు మా ॥"
        },
        meaning: {
          en: "May the divine beings purify me; may wise sages purify my mind; may all creation and the sacred purifying life-force cleanse and sanctify us.",
          te: "దేవగణాలు నన్ను పవిత్రుని చేయుగాక. జ్ఞానులు తమ బుద్ధితో నన్ను పునీతుని చేయుగాక. సమస్త భూతములు మరియు పవిత్ర పవమాన వాయువు నన్ను శుద్ధి చేయుగాక."
        },
        audioText: {
          en: "Punantu maam devajanah punantu manavo dhiya. Sprinkling purified holy water for house and newborn sanctification.",
          te: "పునంతు మాం దేవజనాః పునంతు మనవో ధియా. పుణ్యాహవాచన పవిత్ర జల ప్రోక్షణ."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Writing the Name on Rice (Aksharabhyasa of Name)", te: "బియ్యంలో పేరు వ్రాయుట" },
        description: {
          en: "In a bronze plate filled with raw grains of rice, the father uses a gold ring or betel stem to write the Nakshatra name, the Month-deity name, and the popular name.",
          te: "కంచు పళ్ళెంలో పోసిన బియ్యంపై బంగారు ఉంగరంతో గాని పసుపు కొమ్ముతో గాని తండ్రి శిశువు నక్షత్ర నామాన్ని, వ్యవహారిక నామాన్ని వ్రాస్తాడు."
        },
        mantra: {
          sanskrit: "ఆయుష్మాన్ భవ సౌమ్య ! శతాభివర్ధస్వ ॥",
          transliteration: "Aayushman bhava saumya ! Shatabhivardhaswa ||",
          scriptTe: "ఆయుష్మాన్ భవ సౌమ్య ! శతాభివర్ధస్వ ॥"
        },
        meaning: {
          en: "May you be blessed with longevity, O beloved child! May you grow and flourish for a full century of noble life!",
          te: "ఓ ప్రియమైన బిడ్డా! నీవు సంపూర్ణ ఆయురారోగ్యాలతో, నూరేళ్ళు శ్రేయస్సుతో వర్ధిల్లుదువు గాక!"
        },
        audioText: {
          en: "Aayushman bhava saumya, shatabhivardhaswa. Writing the chosen auspicious name in rice with blessings of a long, prosperous life.",
          te: "ఆయుష్మాన్ భవ సౌమ్య, శతాభివర్ధస్వ. బియ్యంలో పవిత్ర నామాన్ని లిఖిస్తూ ఆశీర్వదించుట."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Whispering the Name in Baby's Ear", te: "శిశువు చెవిలో పేరు చెప్పుట" },
        description: {
          en: "The father gently closes the baby's left ear with a betel leaf and whispers the name three times into the right ear, concluding with 'Namaasi' (Thou art named...).",
          te: "శిశువు ఎడమ చెవిని తమలపాకుతో మూసి, కుడి చెవిలో తండ్రి ఆప్యాయంగా మూడుసార్లు పేరును ఉచ్ఛరిస్తాడు."
        },
        mantra: {
          sanskrit: "అంగాదంగాత్ సంభవసి హృదయాదధిజాయసే । ఆత్మా వై పుత్రనామాసి స జీవ శరదః శతమ్ ॥",
          transliteration: "Angad-angat sambhavasi hridayad-adhijayase | Aatma vai putra-namaasi sa jeeva sharadah shatam ||",
          scriptTe: "అంగాదంగాత్ సంభవసి హృదయాదధిజాయసే । ఆత్మా వై పుత్రనామాసి స జీవ శరదః శతమ్ ॥"
        },
        meaning: {
          en: "Born of every limb of mine, sprung straight from my very heart! You are indeed my very self in the form of a child. May you live a radiant hundred autumns!",
          te: "నా ప్రతి అంగము నుండి సంభవించినవాడవు, నా హృదయము నుండి జనించినవాడవు. నా ఆత్మస్వరూపమే నీవుగా రూపుదిద్దుకున్నావు. అటువంటి నీవు నూరేళ్ళు ఆనందముగా జీవించుము!"
        },
        audioText: {
          en: "Angad-angat sambhavasi hridayad-adhijayase, aatma vai putra-namaasi sa jeeva sharadah shatam. Whispering the sacred name in the child's ear.",
          te: "అంగాదంగాత్ సంభవసి హృదయాదధిజాయసే, ఆత్మా వై పుత్రనామాసి స జీవ శరదః శతమ్. శిశువు కుడి చెవిలో మూడు మార్లు పేరు చెప్పుట."
        }
      },
      {
        stepNumber: 4,
        title: { en: "Cradle Placing & Lullaby (Uyyala Utsavam)", te: "ఊయలలో పడుకోబెట్టుట & జోలపాట" },
        description: {
          en: "The infant is placed into the decorated cradle while family elders sing traditional songs, bless the child with Akshatas, and distribute sweets.",
          te: "అలంకరించిన ఊయలలో శిశువును పడుకోబెట్టి, జో అచ్యుతానంద జోజో ముకుంద వంటి కీర్తనలు పాడుతూ అక్షతలతో దీవిస్తారు."
        },
        mantra: {
          sanskrit: "స్వస్తి నో బృహస్పతిర్దధాతు స్వస్తి నః పూషా విశ్వవేదాః ॥",
          transliteration: "Swasti no Brihaspatir-dadhatu swasti nah Poosha vishva-vedah ||",
          scriptTe: "స్వస్తి నో బృహస్పతిర్దధాతు స్వస్తి నః పూషా విశ్వవేదాః ॥"
        },
        meaning: {
          en: "May Brihaspati, the master of wisdom, bestow well-being upon us; may the all-nourishing Surya/Pushan grant universal peace and security.",
          te: "జ్ఞాన గురువైన బృహస్పతి మనకు శుభములను అనుగ్రహించుగాక. సకల జగత్తును పోషించే భగవంతుడు మనకు శాంతిని రక్షణను ఇచ్చుగాక."
        },
        audioText: {
          en: "Swasti no brihaspatir dadhatu, swasti nah poosha vishva-vedah. Placing the baby in the cradle with Vedic peace invocations.",
          te: "స్వస్తి నో బృహస్పతిర్దధాతు, స్వస్తి నః పూషా విశ్వవేదాః. ఊయలలో శిశువును పడుకోబెట్టి ఆశీర్వదించుట."
        }
      }
    ]
  },

  {
    id: "annaprashana",
    category: "life-phase",
    phase: "Infancy & Childhood",
    phaseTe: "శైశవ & బాల్య దశ",
    deity: "Annapurna, Agni & Prajapati",
    deityTe: "అన్నపూర్ణాదేవి, అగ్ని మరియు ప్రజాపతి",
    title: {
      en: "Annaprashana (First Solid Food Ceremony)",
      te: "అన్నప్రాశన సంస్కారము"
    },
    subtitle: {
      en: "The Sacred Ritual of Introducing Blessed Solid Food & Assessing Life Inclinations",
      te: "శిశువుకు తొలిసారిగా పవిత్ర పాయస అన్నాన్ని తినిపించి ఆయురారోగ్యాలు ప్రార్థించే వైదిక విధి"
    },
    significance: {
      en: "Annaprashana marks the child's transition from liquid mother's milk to solid nourishment, usually performed in the 6th month for a baby boy and in the 5th or 7th month for a baby girl. Consecrated sweet milk rice (paramannam) mixed with ghee and honey is fed with a gold ring or silver spoon, invoking Goddess Annapurna and Lord Agni for robust digestive strength, health, and ethical living. It also features the traditional destiny test where books, pen, gold, flowers, and weapons are placed before the child.",
      te: "శిశువుకు తొలిసారి ఘనాహారం తినిపించే పవిత్ర సంస్కారమే అన్నప్రాశన. మగపిల్లాడికి సాధారణంగా 6వ లేక 8వ నెలలో, ఆడపిల్లకు 5వ లేక 7వ నెలలో (సరి/బేసి మాసాల లెక్క ప్రకారం) చేస్తారు. పాలు, తేనె, నెయ్యి కలిపిన పరమాన్నాన్ని బంగారు ఉంగరంతో శిశువు నాలుకకు తాకిస్తారు. ఆ తరువాత శిశువు ముందు బంగారం, పుస్తకం, కలం, వస్త్రం, కత్తి/వస్తువులు ఉంచి, శిశువు వేటిని తాకుతుందో గమనించి భవిష్యత్ అభిరుచిని తెలుసుకునే ఆచారం ఉంది."
    },
    bestTiming: {
      en: {
        season: "6th or 8th month for boy; 5th or 7th month for girl",
        tithi: "Shukla Paksha Dvitiya, Tritiya, Panchami, Saptami, Dashami, Trayodashi",
        timeOfDay: "Morning before 11:30 AM (Pratah kala)",
        details: "Auspicious nakshatras: Ashwini, Rohini, Mrigashira, Punarvasu, Pushya, Hasta, Chitra, Swati, Anuradha, Shravana. Avoid Rikta tithis (4, 9, 14) and Amavasya."
      },
      te: {
        season: "మగపిల్లాడికి 6వ లేదా 8వ మాసంలో; ఆడపిల్లకు 5వ లేదా 7వ మాసంలో",
        tithi: "శుక్ల పక్ష విదియ, తదియ, పంచమి, సప్తమి, దశమి, త్రయోదశి",
        timeOfDay: "ఉదయం 11:30 గంటలలోపు ప్రాతఃకాలం",
        details: "అశ్విని, రోహిణి, మృగశిర, పునర్వసు, పుష్యమి, హస్త, చిత్త, స్వాతి, అనూరాధ, శ్రవణం నక్షత్రాలు శుభప్రదం. రిక్త తిథులు (4, 9, 14), అమావాస్య పనికిరావు."
      }
    },
    samagri: [
      { nameEn: "Silver plate & Silver bowl (Vendi ginnam)", nameTe: "వెండి పళ్ళెం, వెండి గిన్నె", quantity: "1 set", optional: false },
      { nameEn: "Gold ring (Bangarapu Ungaram)", nameTe: "బంగారు ఉంగరం", quantity: "1", optional: false, noteEn: "Used to feed the sweet rice to infant", noteTe: "అన్నాన్ని శిశువు నాలుకపై పెట్టేందుకు" },
      { nameEn: "Fresh sweet rice pudding (Paramannam)", nameTe: "పాలు, బెల్లం/పంచదారతో చేసిన పరమాన్నం", quantity: "Freshly cooked bowl", optional: false },
      { nameEn: "Pure cow ghee & Wild Honey", nameTe: "ఆవు నెయ్యి మరియు తేనె", quantity: "50g each", optional: false },
      { nameEn: "Objects for Choice Test: Book, Pen, Gold, Food, Tool", nameTe: "భవిష్యత్ పరీక్ష వస్తువులు: గ్రంథం/పుస్తకం, కలం, బంగారం, నాణేలు, పువ్వు", quantity: "1 of each", optional: false, noteEn: "Tradition for discovering the child's natural bent", noteTe: "శిశువు ప్రవృత్తిని చూసే సంప్రదాయ వస్తువులు" },
      { nameEn: "Turmeric, Kumkum, Sandal, Akshatas", nameTe: "పసుపు, కుంకుమ, గంధం, అక్షతలు", quantity: "Standard", optional: false },
      { nameEn: "Lord Venkateswara or Annapurna Deity Photo", nameTe: "శ్రీ అన్నపూర్ణా దేవి లేదా వెంకటేశ్వర స్వామి చిత్రపటం", quantity: "1", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Ganapati Puja & Annapurna Invocation", te: "గణపతి పూజ & అన్నపూర్ణాదేవి ఆవాహన" },
        description: {
          en: "Begin with prayers to Lord Vigneshwara, followed by offering naivedyam to Mother Annapurna, seeking that the child never faces hunger or shortage in life.",
          te: "వినాయక పూజ చేసి, అనంతరం అన్నపూర్ణా దేవికి పరమాన్నాన్ని నివేదించి, బిడ్డకు జీవితంలో ఎన్నడూ ఆహార లోపం రాకుండా ప్రార్థిస్తారు."
        },
        mantra: {
          sanskrit: "అన్నపూర్ణే సదాపూర్ణే శంకరప్రాణవల్లభే । జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి ॥",
          transliteration: "Annapoorne Sada-poorne Shankara-prana-vallabhe | Jnana-vairagya siddhyartham bhiksham dehi cha Parvati ||",
          scriptTe: "అన్నపూర్ణే సదాపూర్ణే శంకరప్రాణవల్లభే । జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి ॥"
        },
        meaning: {
          en: "O Mother Annapurna, ever bountiful and complete, the beloved of Lord Shiva! Bestow upon us the sacred alms of spiritual wisdom and divine fulfillment.",
          te: "ఎల్లప్పుడూ పరిపూర్ణురాలవైన ఓ అన్నపూర్ణా దేవి! శంకరుని ప్రాణప్రియవైన పార్వతీ! మాకు జ్ఞానమును, వైరాగ్యమును మరియు సర్వ శుభములను ప్రసాదించు తల్లీ!"
        },
        audioText: {
          en: "Annapoorne sada-poorne shankara-prana-vallabhe, jnana-vairagya siddhyartham bhiksham dehi cha parvati. Seeking blessings of the Divine Mother.",
          te: "అన్నపూర్ణే సదాపూర్ణే శంకరప్రాణవల్లభే, జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి. అన్నపూర్ణా దేవి కృపాకటాక్ష ప్రార్థన."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Feeding the Sacred Morsel", te: "శిశువుకు అన్నం తినిపించుట" },
        description: {
          en: "The father, grandfather, or maternal uncle coats the gold ring with ghee, honey, and payasam, touching it to the baby's tongue three times while chanting the Prajapati mantra.",
          te: "తండ్రి లేదా మేనమామ బంగారు ఉంగరంతో పరమాన్నాన్ని తేనె, నెయ్యితో కలిపి శిశువు నాలుకకు మూడుసార్లు తాకిస్తూ వేద మంత్రాన్ని పఠిస్తాడు."
        },
        mantra: {
          sanskrit: "శివౌ తే స్తాం వ్రీహియవావబలావాదదో మధు । ఏతౌ యక్ష్యం వి బాధేతే ఏతౌ ముంచతో అంహసః ॥",
          transliteration: "Shivau te staam vreehi-yavav-abalavadado madhu | Etau yakshyam vi badhete etau munchato amhasah ||",
          scriptTe: "శివౌ తే స్తాం వ్రీహియవావబలావాదదో మధు । ఏతౌ యక్ష్యం వి బాధేతే ఏతౌ ముంచతో అంహసః ॥"
        },
        meaning: {
          en: "May this sacred rice and grain nourish you like nectar! May this wholesome food ward off all diseases and keep you free from distress.",
          te: "ఈ దివ్యమైన అన్నము నీకు అమృతతుల్యమై సుఖాన్నిచ్చుగాక! సమస్త రోగములను తొలగించి, నీకు నిరంతర శక్తిని, ఆరోగ్యమును ప్రసాదించుగాక!"
        },
        audioText: {
          en: "Feeding the blessed first solid food to the baby, praying for boundless vigor, disease resistance, and vitality.",
          te: "శిశువుకు తేనె నెయ్యి కలిపిన ప్రథమ అన్నాన్ని తినిపిస్తూ ఆయురారోగ్యాలకై చేసే ప్రార్థన."
        }
      },
      {
        stepNumber: 3,
        title: { en: "The Destiny & Inclination Test (Jeevika Pariksha)", te: "వృత్తి లేదా ప్రవృత్తి పరీక్ష" },
        description: {
          en: "A white cloth is spread with a book/scripture (learning), pen (creativity/administration), gold/coins (wealth), flowers (arts/purity), and cloth. The baby is let forward; whichever the infant reaches for first symbolizes their intrinsic latent inclination.",
          te: "తెల్లని వస్త్రంపై పుస్తకం (విద్య), కలం (జ్ఞానం/రచన), బంగారం (సంపద), అస్త్రం/వస్తువు (రక్షణ), పువ్వు (కళలు) ఉంచుతారు. శిశువు మొదట వేటిని తాకుతుందో దానిని బట్టి వారి భవిష్యత్ ఆసక్తులను పెద్దలు ఆనందంతో గమనిస్తారు."
        },
        mantra: {
          sanskrit: "శతమానం భవతి శతాయుః పురుషః శతేంద్రియ ఆయుష్యేవేంద్రియే ప్రతితిష్ఠతి ॥",
          transliteration: "Shatamanam bhavati shatayu-purushah shatendriya ayushyevendriye pratitishthati ||",
          scriptTe: "శతమానం భవతి శతాయుః పురుషః శతేంద్రియ ఆయుష్యేవేంద్రియే ప్రతితిష్ఠతి ॥"
        },
        meaning: {
          en: "Man is endowed with a hundred years of life and a hundred faculties! May you firmly abide in full longevity, vitality, and sensory brilliance!",
          te: "మనిషి నూరేళ్ళ ఆయుష్షు, నూరు ఇంద్రియాల శక్తి కలవాడు. నీవు సంపూర్ణమైన ఆయుస్సుతో, సకల ఇంద్రియ పాటవంతో వర్ధిల్లుదువు గాక!"
        },
        audioText: {
          en: "Shatamanam bhavati shatayu-purushah shatendriya ayushyevendriye pratitishthati. Elders shower holy Akshatas with long-life blessings.",
          te: "శతమానం భవతి శతాయుః పురుషః శతేంద్రియ ఆయుష్యేవేంద్రియే ప్రతితిష్ఠతి. పెద్దల ఆశీర్వచనం."
        }
      }
    ]
  },

  {
    id: "aksharabhyasa",
    category: "life-phase",
    phase: "Youth & Education",
    phaseTe: "యుక్త & విద్యా దశ",
    deity: "Goddess Saraswati & Lord Hayagreeva",
    deityTe: "శ్రీ సరస్వతీ దేవి మరియు హయగ్రీవ స్వామి",
    title: {
      en: "Aksharabhyasa (Vidyarambha)",
      te: "అక్షరాభ్యాసము (విద్యారంభ సంస్కారము)"
    },
    subtitle: {
      en: "Initiation into the World of Letters, Wisdom & Divine Learning",
      te: "ఓంకారంతో అక్షర లోకంలోకి అడుగుపెడుతూ సరస్వతీ దేవి అనుగ్రహం పొందే పవిత్ర విధి"
    },
    significance: {
      en: "Aksharabhyasa (also celebrated as Vidyarambha on Vijayadashami or Vasant Panchami) is performed around the child's 3rd or 5th year. The guru or parents hold the child's right index finger and trace 'OM' (ॐ), followed by the Bijaksharas and the Telugu/Sanskrit alphabets on raw paddy/rice or slate. It is traditionally performed at holy Saraswati kshetras like Basara or in the family puja room, dedicating the intellect to righteous truth.",
      te: "పిల్లలకు 3వ లేదా 5వ సంవత్సరంలో అక్షరాభ్యాసం చేస్తారు. విజయదశమి, వసంత పంచమి లేదా గురువారం నాడు సరస్వతీ క్షేత్రాలలో (బాసర వంటి పుణ్యతీర్థాలలో) లేక ఇంట్లోనే ఈ పూజ నిర్వహిస్తారు. గురువు లేదా తండ్రి బిడ్డ చేతి వేలును పట్టుకుని బియ్యంలో గాని పలకపై గాని 'ఓం నమః శివాయ సిద్ధం నమః' లేదా 'ఓం శ్రీ సరస్వత్యై నమః' అని రాయిస్తారు. దీనివలన బిడ్డకు అపారమైన జ్ఞాపకశక్తి, విద్యా ప్రాప్తి కలుగుతాయి."
    },
    bestTiming: {
      en: {
        season: "Around 3rd or 5th year of age",
        tithi: "Vijayadashami (Ashwayuja Dashami), Vasant Panchami (Magha Shukla Panchami), Akshaya Tritiya, or any Shukla Paksha Panchami/Dashami",
        timeOfDay: "Morning (Brahma Muhurtham or Pratah Kala)",
        details: "Auspicious days: Thursday (Guru Vasara), Wednesday (Budha Vasara), Friday. Nakshatras: Rohini, Mrigashira, Punarvasu, Pushya, Hasta, Chitra, Swati, Shravana, Shatabhisha."
      },
      te: {
        season: "3వ లేదా 5వ సంవత్సరం పూర్తయిన తర్వాత",
        tithi: "విజయదశమి, వసంత పంచమి, అక్షయ తృతీయ లేదా శుక్ల పక్ష పంచమి/దశమి",
        timeOfDay: "ఉదయం పూట ప్రాతఃకాలం",
        details: "గురువారం, బుధవారం, శుక్రవారాలు అత్యంత అనుకూలం. హస్త, చిత్త, స్వాతి, పునర్వసు, శ్రవణం నక్షత్రాలు శ్రేష్ఠమైనవి."
      }
    },
    samagri: [
      { nameEn: "Slate & Chalk/Slate pencil (Palaka & Balapam)", nameTe: "పలక మరియు బలపం", quantity: "1 set", optional: false },
      { nameEn: "Bronze or Silver plate with raw paddy/rice (Biyyam / Vaddi)", nameTe: "బియ్యం లేదా ధాన్యంతో నింపిన పళ్ళెం", quantity: "1 plate", optional: false },
      { nameEn: "Turmeric roots (Pasupu kommu)", nameTe: "పసుపు కొమ్ములు", quantity: "5", optional: false },
      { nameEn: "Gold coin or Gold ring", nameTe: "బంగారు నాణెం / ఉంగరం", quantity: "1", optional: false },
      { nameEn: "Saraswati & Hayagreeva Yantra / Idol / Photo", nameTe: "సరస్వతీ దేవి, హయగ్రీవ స్వామి పటం", quantity: "1", optional: false },
      { nameEn: "White flowers (Jasmine, Lotus)", nameTe: "తెల్లని పువ్వులు (మల్లెలు, తెల్ల కలువలు)", quantity: "1 garland + loose flowers", optional: false },
      { nameEn: "Pencil, Notebooks & Books to consecrate", nameTe: "పుస్తకాలు, కలం, పెన్సిల్", quantity: "1 set", optional: false },
      { nameEn: "Honey, Ghee, Sweets (Kova/Laddu)", nameTe: "తేనె, నెయ్యి, లడ్డూలు లేదా తీపి పదార్థాలు", quantity: "As desired", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Saraswati & Hayagreeva Dhyanam", te: "సరస్వతీ & హయగ్రీవ ధ్యానం" },
        description: {
          en: "Meditate upon the Goddess of Wisdom, Saraswati, and the Lord of all Vedas, Sri Hayagreeva, offering white fragrant flowers.",
          te: "జ్ఞానప్రదాయిని అయిన సరస్వతీ దేవిని మరియు వేదాల అధిపతి అయిన హయగ్రీవుని ధ్యానిస్తూ శ్వేత పుష్పాలను సమర్పించాలి."
        },
        mantra: {
          sanskrit: "సరస్వతీ నమస్తుభ్యం వరదే కామరూపిణీ । విద్యారంభం కరిష్యామి సిద్ధిర్భవతు మే సదా ॥",
          transliteration: "Saraswati Namas-tubhyam Varade Kama-roopini | Vidyarambham Karishyami Siddhir-bhavatu Me Sada ||",
          scriptTe: "సరస్వతీ నమస్తుభ్యం వరదే కామరూపిణీ । విద్యారంభం కరిష్యామి సిద్ధిర్భవతు మే సదా ॥"
        },
        meaning: {
          en: "O Goddess Saraswati, salutations unto Thee! The giver of divine boons, the embodiment of highest aspirations! As I begin my education today, may complete mastery and success be mine always!",
          te: "కోరిన వరములను అనుగ్రహించే ఓ సరస్వతీ దేవి! నీకు నమస్కారములు. నేను నేడు విద్యారంభము చేయుచున్నాను. నాకు సర్వదా విద్యాసిద్ధి కలుగుగాక!"
        },
        audioText: {
          en: "Saraswati namastubhyam varade kama-roopini, vidyarambham karishyami siddhir bhavatu me sada. Prayer to Saraswati for knowledge and memory.",
          te: "సరస్వతీ నమస్తుభ్యం వరదే కామరూపిణీ, విద్యారంభం కరిష్యామి సిద్ధిర్భవతు మే సదా. విద్యా సిద్ధి కొరకు సరస్వతీ ప్రార్థన."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Tracing the Sacred Bijaksharas", te: "ఓంకారము & వర్ణమాల లిఖించుట" },
        description: {
          en: "The father or Guru holds the child's finger and guides it through the raw rice to write: 'OM' (ॐ), 'Harih Om', and 'Siddham Namah'.",
          te: "గురువు లేదా తండ్రి బిడ్డ చేతి వేలును పట్టుకుని బియ్యంలో 'ఓం', 'శ్రీం', 'ఓం నమః శివాయ సిద్ధం నమః' అని రాయిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం నమః శివాయ సిద్ధం నమః । ఓం ఐం సరస్వత్యై నమః ॥",
          transliteration: "Om Namah Shivaya Siddham Namah | Om Aim Saraswatyai Namah ||",
          scriptTe: "ఓం నమః శివాయ సిద్ధం నమః । ఓం ఐం సరస్వత్యై నమః ॥"
        },
        meaning: {
          en: "Salutations to Shiva, the source of supreme consciousness! May all learning attain fulfillment! Salutations to Saraswati, whose seed syllable is AIM!",
          te: "శివునికి నమస్కారము! నా విద్య సిద్ధించుగాక! జ్ఞాన బీజాక్షర స్వరూపిణి అయిన సరస్వతీ దేవికి నమస్కారము!"
        },
        audioText: {
          en: "Om namah shivaya siddham namah. Om aim saraswatyai namah. Inscribing the sacred seed syllables in grains of rice.",
          te: "ఓం నమః శివాయ సిద్ధం నమః, ఓం ఐం సరస్వత్యై నమః. బియ్యంలో పవిత్ర ఓంకారాన్ని లిఖించుట."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Guru Dakshina & Distribution of Prasadam", te: "గురు దక్షిణ & అక్షతల ఆశీర్వచనం" },
        description: {
          en: "The child offers fruits, betel leaves, and dakshina to the teacher/priest, touching their feet for blessings. Akshatas are showered on the child.",
          te: "బిడ్డ పూజ్యులైన గురువుగారికి / పురోహితునికి తాంబూల దక్షిణలు సమర్పించి నమస్కరిస్తుంది. పెద్దలందరూ అక్షతలు వేసి దీవిస్తారు."
        },
        mantra: {
          sanskrit: "గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః । గురుస్సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః ॥",
          transliteration: "Gurur-Brahma Gurur-Vishnuh Gurur-Devo Maheshwarah | Guruh Sakshat Para-Brahma Tasmai Shri-Gurave Namah ||",
          scriptTe: "గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః । గురుస్సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః ॥"
        },
        meaning: {
          en: "The Guru is Brahma (the Creator of vision), the Guru is Vishnu (the Sustainer of wisdom), the Guru is Maheshwara (the Destroyer of ignorance). The Guru is indeed the Supreme Reality manifest. Salutations to the venerable Guru!",
          te: "గురువే బ్రహ్మ, గురువే విష్ణువు, గురువే మహేశ్వరుడు. గురువే సాక్షాత్తు పరబ్రహ్మ స్వరూపము. అటువంటి పరమ గురువునకు నా నమస్కారములు."
        },
        audioText: {
          en: "Gurur brahma gurur vishnuh gurur devo maheshwarah, guruh sakshat parabrahma tasmai shri gurave namah. Honoring the Guru.",
          te: "గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః, గురుస్సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః. గురు పూజ మరియు ఆశీస్సులు."
        }
      }
    ]
  },

  {
    id: "upanayanam",
    category: "life-phase",
    phase: "Youth & Education",
    phaseTe: "యుక్త & విద్యా దశ",
    deity: "Lord Surya, Gayatri Devi & Agni",
    deityTe: "సూర్య భగవానుడు, గాయత్రీ దేవి మరియు అగ్నిదేవుడు",
    title: {
      en: "Upanayanam (Sacred Thread Ceremony)",
      te: "ఉపనయన సంస్కారము (వడుగు / యజ్ఞోపవీత ధారణ)"
    },
    subtitle: {
      en: "Spiritual Rebirth (Dvija), Yajnopaveetha Investiture & Gayatri Mantra Initiation",
      te: "గాయత్రీ మంత్రోపదేశం, యజ్ఞోపవీత ధారణ ద్వారా ఆధ్యాత్మిక ద్వితీయ జన్మను పొందే వైదిక క్రతువు"
    },
    significance: {
      en: "Upanayana ('bringing near to the Guru and the Divine') is the pivotal 10th Samskara that confers the status of 'Dvija' (twice-born). The young initiate (Vatu) is invested with the sacred threefold thread (Yajnopaveetam representing Brahma, Vishnu, Shiva and the three debts to Gods, Sages, and Ancestors), given the deer-skin Mekhala, palasa staff (Danda), and initiated into the sacred Gayatri Mantra by his father beneath a silk canopy (Brahmopadesham).",
      te: "ఉపనయనం అంటే గురువుకు మరియు జ్ఞానానికి 'సమీపముగా తీసుకువెళ్ళుట'. దీని ద్వారా బాలుడు 'ద్విజుడు' (రెండవ జన్మ పొందినవాడు) అవుతాడు. మూడు పోగుల యజ్ఞోపవీతాన్ని (దేవ, ఋషి, పితృ ఋణాలకు మరియు త్రిమూర్తులకు ప్రతీక) ధరింపజేసి, తండ్రి చేత పట్టు వస్త్రం చాటున పరమ పవిత్రమైన గాయత్రీ మంత్రం ఉపదేశించబడుతుంది. అనంతరం బ్రహ్మచారి అగ్నిహోత్రంలో సమిధలు సమర్పిస్తూ (సమిధాదానం), భిక్షాటన చేస్తాడు."
    },
    bestTiming: {
      en: {
        season: "Between 7th and 16th year, during Uttarayana (Spring/Summer)",
        tithi: "Shukla Paksha Dvitiya, Tritiya, Panchami, Saptami, Dashami, Ekadashi, Trayodashi",
        timeOfDay: "Morning hours before noon (Surya Lagna / Abhijit)",
        details: "Sun must be in Uttarayana (Makara to Mithuna). Auspicious months: Magha, Phalguna, Chaitra, Vaishakha, Jyeshtha. Guru and Shukra must not be combust (Moudhyami)."
      },
      te: {
        season: "7 నుండి 16 సంవత్సరాల వయసులో, ఉత్తరాయణ పుణ్యకాలంలో",
        tithi: "శుక్ల పక్ష విదియ, తదియ, పంచమి, సప్తమి, దశమి, ఏకాదశి, త్రయోదశి",
        timeOfDay: "ఉదయం అభిజిత్ ముహూర్తం లేదా శుభ లగ్నంలో",
        details: "సూర్యుడు ఉత్తరాయణంలో ఉండాలి (మాఘ, ఫాల్గుణ, చైత్ర, వైశాఖ, జ్యేష్ఠ మాసాలు). గురు, శుక్ర మౌఢ్యములు ఉండరాదు."
      }
    },
    samagri: [
      { nameEn: "Yajnopaveetam (Sacred threads - 3 & 6 strand)", nameTe: "యజ్ఞోపవీతములు (జంధ్యములు)", quantity: "3 sets", optional: false },
      { nameEn: "Mounji grass girdle (Mekhala)", nameTe: "మౌంజీ తాడు (మౌంజీ మేఖల)", quantity: "1", optional: false },
      { nameEn: "Palasa or Bilva Danda (Staff)", nameTe: "మోదుగ / బిల్వ కర్ర (దండము)", quantity: "1", optional: false },
      { nameEn: "Deer skin piece (Ajinam)", nameTe: "కృష్ణాజినం (జింక చర్మపు ముక్క)", quantity: "1 small piece tied to thread", optional: false },
      { nameEn: "Homa Samit (Palasa twigs for fire sacrifice)", nameTe: "మోదుగ సమిధలు", quantity: "1 bundle", optional: false },
      { nameEn: "Pure cow ghee for Homa", nameTe: "స్వచ్ఛమైన ఆవు నెయ్యి", quantity: "500g", optional: false },
      { nameEn: "Bhiksha Bowl (Vendi / Ittadi ginnam) & Raw rice", nameTe: "భిక్షా పాత్ర మరియు బియ్యం, పండ్లు", quantity: "1 bowl + 2kg rice", optional: false, noteEn: "For 'Bhavati Bhiksham Dehi' ritual", noteTe: "భవతి భిక్షాం దేహి అను సంప్రదాయానికి" },
      { nameEn: "Silk Pattu Koka / Shawl for Brahmopadesham canopy", nameTe: "బ్రహ్మోపదేశం చాటు కొరకు పట్టు వస్త్రం", quantity: "1 large shawl", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Yajnopaveetha Dharana (Wearing the Sacred Thread)", te: "యజ్ఞోపవీత ధారణ విధి" },
        description: {
          en: "The Vatu stands facing east. The father / Acharya leads the chanting of the Yajnopaveetha mantra while placing the thread across the left shoulder running down to the right hip.",
          te: "వడుగు తూర్పు దిక్కుగా నిలబడగా, ఆచార్యుల మంత్రోచ్ఛారణ నడుమ ఎడమ భుజం మీదుగా కుడి నడుము కిందకు యజ్ఞోపవీతాన్ని ధరింపజేస్తారు."
        },
        mantra: {
          sanskrit: "యజ్ఞోపవీతం పరమం పవిత్రం ప్రజాపతేర్యత్ సహజం పురస్తాత్ । ఆయుష్యమగ్ర్యం ప్రతిముంచ శుభ్రం యజ్ఞోపవీతం బలమస్తు తేజః ॥",
          transliteration: "Yajnopaveetam paramam pavitram prajapater-yat sahajam purastat | Aayushyam-agryam pratimuncha shubhram yajnopaveetam balam-astu tejah ||",
          scriptTe: "యజ్ఞోపవీతం పరమం పవిత్రం ప్రజాపతేర్యత్ సహజం పురస్తాత్ । ఆయుష్యమగ్ర్యం ప్రతిముంచ శుభ్రం యజ్ఞోపవీతం బలమస్తు తేజః ॥"
        },
        meaning: {
          en: "The sacred thread is supremely holy, born along with Prajapati in primordial times. Bestowing long life, pure virtue, spiritual strength, and divine luster, I invest you with this sacred thread!",
          te: "ఈ యజ్ఞోపవీతము పరమ పవిత్రమైనది. సృష్టికర్తయైన బ్రహ్మతో కూడి జన్మించినది. ఇది ఆయుస్సును, వర్చస్సును, పవిత్రతను, బలమును ప్రసాదించును గాక!"
        },
        audioText: {
          en: "Yajnopaveetam paramam pavitram prajapater yat sahajam purastat, aayushyam agryam pratimuncha shubhram yajnopaveetam balam astu tejah.",
          te: "యజ్ఞోపవీతం పరమం పవిత్రం ప్రజాపతేర్యత్ సహజం పురస్తాత్, ఆయుష్యమగ్ర్యం ప్రతిముంచ శుభ్రం యజ్ఞోపవీతం బలమస్తు తేజః. పవిత్ర యజ్ఞోపవీత ధారణ."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Brahmopadesham (Gayatri Mantra Upadesha)", te: "బ్రహ్మోపదేశం (గాయత్రీ మంత్రోపదేశం)" },
        description: {
          en: "Seated beneath a silk mantle alongside his father, the Vatu places his ears close and receives the supreme Gayatri Mantra syllable by syllable.",
          te: "పట్టు వస్త్రం చాటున తండ్రి బాలుని కుడి చెవి దగ్గరగా కూర్చుని, అత్యంత పవిత్రమైన గాయత్రీ మంత్రాన్ని పాదాలవారీగా ఉపదేశిస్తాడు."
        },
        mantra: {
          sanskrit: "ఓం భూర్భువస్సువః । తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి । ధియో యో నః ప్రచోదయాత్ ॥",
          transliteration: "Om Bhur-Bhuvas-Suvah | Tat-Savitur-Varenyam Bhargo Devasya Dheemahi | Dhiyo Yo Nah Prachodayat ||",
          scriptTe: "ఓం భూర్భువస్సువః । తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి । ధియో యో నః ప్రచోదయాత్ ॥"
        },
        meaning: {
          en: "We meditate upon the supreme adorable radiance of the Divine Solar Light (Savitur)! May that Illuminator of the cosmos guide and inspire our intellect toward absolute truth!",
          te: "భూః, భువః, సువః అను త్రిలోకాలను ప్రకాశింపజేసే సూర్య భగవానుని శ్రేష్ఠమైన దివ్య తేజస్సును మేము ధ్యానిస్తున్నాము. ఆ పరమాత్మ మా బుద్ధులను సన్మార్గంలో ప్రేరేపించుగాక!"
        },
        audioText: {
          en: "Om bhur bhuvah suvah, tat savitur varenyam, bhargo devasya dheemahi, dhiyo yo nah prachodayat. The supreme mother of all Vedic mantras.",
          te: "ఓం భూర్భువస్సువః, తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి, ధియో యో నః ప్రచోదయాత్. గాయత్రీ మంత్రోపదేశము."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Bhikshacharana (Bhavati Bhiksham Dehi)", te: "భిక్షాచరణ (భవతి భిక్షాం దేహి)" },
        description: {
          en: "The Vatu takes the begging bowl and approaches his mother first, saying 'Bhavati Bhiksham Dehi', learning humility, self-control, and dependence on Divine grace.",
          te: "వటువు భిక్షాపాత్రను పట్టుకుని మొదట తల్లి వద్దకు వెళ్ళి 'భవతి భిక్షాం దేహి' అని అడుగుతాడు. ఇది అహంకారాన్ని విడిచి వినయంతో జీవించడాన్ని నేర్పుతుంది."
        },
        mantra: {
          sanskrit: "భవతి భిక్షాం దేహి ॥ భవాన్ భిక్షాం దదాతు ॥",
          transliteration: "Bhavati Bhiksham Dehi || Bhavan Bhiksham Dadatu ||",
          scriptTe: "భవతి భిక్షాం దేహి ॥ భవాన్ భిక్షాం దదాతు ॥"
        },
        meaning: {
          en: "O noble Mother, please bestow sacred alms! O noble Sir, please grant sustenance to the Brahmachari!",
          te: "ఓ పూజ్యురాలైన తల్లీ, నాకు భిక్షను అనుగ్రహించండి! విద్యార్థికి వినయ విధేయతలను గుర్తుచేసే పవిత్ర భిక్షా విధి."
        },
        audioText: {
          en: "Bhavati bhiksham dehi. The young Brahmachari asks for alms from his mother and elders in supreme humility.",
          te: "భవతి భిక్షాం దేహి. అహంకారాన్ని వదిలి వినయంతో భిక్ష స్వీకరించే వేద సంప్రదాయం."
        }
      }
    ]
  },

  {
    id: "vivaham",
    category: "life-phase",
    phase: "Marriage & Family",
    phaseTe: "గృహస్థ & దాంపత్య దశ",
    deity: "Lakshmi-Narayana, Shiva-Parvati & Agni",
    deityTe: "లక్ష్మీ-నారాయణులు, శివ-పార్వతులు మరియు అగ్నిదేవుడు",
    title: {
      en: "Vivaha Samskara (Sacred Hindu Marriage Vidhi)",
      te: "హిందూ వివాహ సంస్కారము (కళ్యాణ మహోత్సవ విధి)"
    },
    subtitle: {
      en: "Kanyadanam, Mangalasutradharana, Panigrahana & Saptapadi Rites",
      te: "కన్యాదానం, మంగళసూత్రధారణ, తలంబ్రాలు మరియు సప్తపది పవిత్ర వేద క్రతువు"
    },
    significance: {
      en: "Vivaha is the most profound of Hindu Samskaras, elevating the individual into Grihastha Ashrama—the pillar supporting all other life stages. Witnessed by the sacred fire (Agni Sakshi), the bride and groom unite their souls for Dharma (righteous duty), Artha (honest prosperity), Kama (pure affection & family), and Moksha (spiritual liberation). Key rites include Kanyadanam, Mangalasutra Dharana, Panigrahana (hand-clasping), and Saptapadi (seven vows around the fire).",
      te: "హిందూ ధర్మంలో గృహస్థాశ్రమానికి దారితీసే మహోన్నత సంస్కారమే వివాహం. సమస్త ఆశ్రమాలకూ గృహస్థాశ్రమమే జీవనాధారం. పవిత్రమైన అగ్నిసాక్షిగా, సకల దేవతల సమక్షంలో ధర్మ, అర్థ, కామ, మోక్షాల సాధనకై వధూవరులు ఒక్కటవుతారు. జీలకర్ర-బెల్లం ధారణ, కన్యాదానం, మాంగల్యధారణ, తలంబ్రాలు, పాణిగ్రహణం మరియు సప్తపది వంటి వేదోక్త విధులతో దాంపత్య బంధం జన్మజన్మల అనుబంధంగా ముడిపడుతుంది."
    },
    bestTiming: {
      en: {
        season: "Auspicious wedding muhurthams (Magha, Phalguna, Chaitra, Vaishakha, Jyeshtha, Ashwayuja, Karthika)",
        tithi: "Shukla or auspicious Krishna Paksha (Dvitiya, Tritiya, Panchami, Saptami, Dashami, Ekadashi, Trayodashi)",
        timeOfDay: "Exact Subha Lagna determined by astrologer (Pratah, Madhyahna, or Godhuli)",
        details: "Sun, Jupiter, and Venus must be strong; avoid eclipse days, Sankranti days, and Guru/Shukra Moudhyami."
      },
      te: {
        season: "శుభ వివాహ ముహూర్త కాలాలలో (మాఘ, ఫాల్గుణ, చైత్ర, వైశాఖ, జ్యేష్ఠ, ఆశ్వయుజ, కార్తీక మాసాలు)",
        tithi: "విదియ, తదియ, పంచమి, సప్తమి, దశమి, ఏకాదశి, త్రయోదశి తిథులు",
        timeOfDay: "జ్యోతిషులచే నిర్ణయించబడిన ఖచ్చితమైన శుభ లగ్న సమయం",
        details: "గురు, శుక్ర బలములు మరియు సూర్య బలం అనుకూలించి ఉండాలి. మౌఢ్యమిలు లేని కాలం."
      }
    },
    samagri: [
      { nameEn: "Mangalasutram (Gold pendants with black & yellow beads)", nameTe: "మంగళసూత్రములు (సూత్రతాళ్ళు, బంగారు తాళిబొట్లు)", quantity: "2 sutras", optional: false },
      { nameEn: "Jaggery and Cumin seeds paste (Jeelakarra-Bellam)", nameTe: "జీలకర్ర మరియు బెల్లం ముద్ద", quantity: "2 portions", optional: false, noteEn: "For Sumuhurtha head placement", noteTe: "సుముహూర్తంలో శిరస్సుపై ఉంచేందుకు" },
      { nameEn: "Talambralu (Rice mixed with turmeric, ghee & rosewater)", nameTe: "తలంబ్రాలు (పసుపు, నెయ్యి కలిపిన అక్షతలు)", quantity: "5 kg", optional: false },
      { nameEn: "Homa samagri & Firewood (Samidhalu, Ghee, Camphor)", nameTe: "హోమ సామాగ్రి, సమిధలు, ఆవు నెయ్యి", quantity: "1 complete set", optional: false },
      { nameEn: "Kanyadana bronze vessel & Silver coin", nameTe: "కన్యాదాన పళ్ళెం, వెండి నాణెం, శంఖం", quantity: "1 set", optional: false },
      { nameEn: "Metteyalu (Silver toe rings)", nameTe: "వెండి మెట్టెలు", quantity: "2 pairs", optional: false },
      { nameEn: "Arundhati Darshana equipment (Mirror / pointer)", nameTe: "అరుంధతీ నక్షత్ర దర్శన సాధనం", quantity: "1", optional: false },
      { nameEn: "Garlands (Kalyana Varamalalu)", nameTe: "కళ్యాణ పూలదండలు", quantity: "2 large garlands", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Jeelakarra-Bellam (Sumuhurtha Head Placement)", te: "జీలకర్ర-బెల్లం ధారణ (సుముహూర్తం)" },
        description: {
          en: "At the exact calculated Subha Lagna, the curtain is lowered and the bride and groom place the positive-vibrating paste of cumin and jaggery onto each other's Sahasrara chakra on the head.",
          te: "నిర్ణయించిన ఖచ్చితమైన సుముహూర్త సమయాన తెర తొలగించి, వధూవరులు ఒకరి శిరస్సుపై మరొకరు జీలకర్ర-బెల్లం ముద్దను ఉంచుతారు. ఇది ప్రాణశక్తులను ఐక్యం చేస్తుందని నమ్ముతారు."
        },
        mantra: {
          sanskrit: "ధ్రువం తే రాజా వరుణో ధ్రువం దేవో బృహస్పతిః । ధ్రువం త ఇంద్రశ్చాగ్నిశ్చ రాష్ట్రం ధారయతాం ధ్రువమ్ ॥",
          transliteration: "Dhruvam te raja Varuno dhruvam devo Brihaspatih | Dhruvam ta Indrash-cha-Agnish-cha rashtram dharayataam dhruvam ||",
          scriptTe: "ధ్రువం తే రాజా వరుణో ధ్రువం దేవో బృహస్పతిః । ధ్రువం త ఇంద్రశ్చాగ్నిశ్చ రాష్ట్రం ధారయతాం ధ్రువమ్ ॥"
        },
        meaning: {
          en: "May King Varuna make your union firm and unshakable! May Lord Brihaspati, Indra, and Agni grant permanence and eternal stability to your sacred household!",
          te: "వరుణ దేవుడు, బృహస్పతి, ఇంద్రుడు మరియు అగ్నిదేవుడు మీ దాంపత్యాన్ని ధ్రువ నక్షత్రం వలె స్థిరముగా, చెక్కుచెదరని ఐక్యతతో వర్ధిల్లునట్లు చేయుగాక!"
        },
        audioText: {
          en: "Dhruvam te raja varuno dhruvam devo brihaspatih, dhruvam ta indrash-cha-agnish-cha rashtram dharayataam dhruvam. The sacred bond sealed at the auspicious moment.",
          te: "ధ్రువం తే రాజా వరుణో ధ్రువం దేవో బృహస్పతిః, ధ్రువం త ఇంద్రశ్చాగ్నిశ్చ రాష్ట్రం ధారయతాం ధ్రువమ్. జీలకర్ర బెల్లం ఉంచే సుముహూర్త వేద మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Kanyadanam (The Gift of the Bride)", te: "కన్యాదాన మహా క్రతువు" },
        description: {
          en: "The parents of the bride wash the feet of the groom, viewing him as Lord Narayana, and place their daughter's hand in his, dedicating her with holy water and sacred grass.",
          te: "కన్యాదాత వరుని సాక్షాత్తు శ్రీమహావిష్ణువుగా భావించి పాదములు కడిగి, ధర్మార్థకామ సిద్ధికై తన పుత్రికను దానంగా సమర్పిస్తాడు."
        },
        mantra: {
          sanskrit: "కన్యాం కనకసంపన్నాం కనకాభరణైర్యుతామ్ । దాస్యామి విష్ణవే తుభ్యం బ్రహ్మలోక జిగీషయా ॥",
          transliteration: "Kanyaam kanaka-sampannaam kanakabharanoir-yutaam | Daasyami Vishnave tubhyam Brahma-loka jigeeshaya ||",
          scriptTe: "కన్యాం కనకసంపన్నాం కనకాభరణైర్యుతామ్ । దాస్యామి విష్ణవే తుభ్యం బ్రహ్మలోక జిగీషయా ॥"
        },
        meaning: {
          en: "Endowed with sacred qualities and adorned with golden virtues, I offer this maiden unto Thee, O embodiment of Vishnu, desiring eternal spiritual liberation and auspicious realms!",
          te: "సకల సద్గుణములు, సౌభాగ్యము కలిగిన నా కన్యకను విష్ణు స్వరూపుడవైన నీకు సమర్పిస్తున్నాను. సర్వ శుభములు చేకూరుగాక!"
        },
        audioText: {
          en: "Kanyaam kanaka-sampannaam kanakabharanoir-yutaam, daasyami vishnave tubhyam brahma-loka jigeeshaya. The supreme offering of Kanyadanam.",
          te: "కన్యాం కనకసంపన్నాం కనకాభరణైర్యుతామ్, దాస్యామి విష్ణవే తుభ్యం బ్రహ్మలోక జిగీషయా. కన్యాదాన పవిత్ర వేద ఘట్టం."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Mangalasutradharana (Tying the Sacred Mangalsutra)", te: "మాంగల్యధారణ (తాళి కట్టుట)" },
        description: {
          en: "The groom ties the auspicious golden Mangalasutra around the bride's neck with three knots, praying for a hundred years of shared blissful life.",
          te: "వరుడు వధువు మెడలో మూడు ముళ్ళు వేస్తూ మంగళసూత్రాన్ని ధరింపజేస్తాడు. మొదటి ముడి భర్త, మిగతా రెండు ముళ్ళు ఆడపడుచు వేస్తారు."
        },
        mantra: {
          sanskrit: "మాంగల్యం తంతునానేన మమ జీవన హేతునా । కంఠే బధ్నామి సుభగే సంజీవ శరదః శతమ్ ॥",
          transliteration: "Mangalyam tantunanena mama jeevana hetuna | Kanthe badhnami subhage sanjeeva sharadah shatam ||",
          scriptTe: "మాంగల్యం తంతునానేన మమ జీవన హేతునా । కంఠే బధ్నామి సుభగే సంజీవ శరదః శతమ్ ॥"
        },
        meaning: {
          en: "O auspicious maiden! This sacred thread is the very reason and anchor of my life. I tie it around your neck; may you live happily with me for a full hundred autumns!",
          te: "ఓ సౌభాగ్యవతీ! నా జీవనానికి ఆధారభూతమైన ఈ పవిత్ర మంగళసూత్రాన్ని నీ కంఠమందు బంధిస్తున్నాను. నీవు నాతో కలసి నూరేళ్ళు ఆనందముగా జీవించుము!"
        },
        audioText: {
          en: "Mangalyam tantunanena mama jeevana hetuna, kanthe badhnami subhage sanjeeva sharadah shatam. The immortal vow of marriage.",
          te: "మాంగల్యం తంతునానేన మమ జీవన హేతునా, కంఠే బధ్నామి సుభగే సంజీవ శరదః శతమ్. మంగళసూత్రధారణ."
        }
      },
      {
        stepNumber: 4,
        title: { en: "Saptapadi (The Seven Sacred Steps)", te: "సప్తపది (ఏడు అడుగుల వైదిక ప్రమాణాలు)" },
        description: {
          en: "The couple walks seven steps together around the sacred Agni, taking seven eternal vows for food, strength, wealth, happiness, progeny, seasons, and lifelong divine friendship.",
          te: "అగ్నిహోత్రం చుట్టూ వధూవరులు ఏడడుగులు వేస్తూ ఆహారము, శక్తి, సంపద, ఆనందము, సంతానము, సమతుల్యత మరియు శాశ్వత స్నేహము కొరకు ప్రతిజ్ఞలు చేస్తారు."
        },
        mantra: {
          sanskrit: "ఏకమిషే విష్ణుస్త్వాన్వేతు । ద్వే ఊర్జే... త్రీణి వ్రతాయ... చత్వారి మయోభవాయ... పంచ పశుభ్యః... షడృతుభ్యః... సప్త సప్తభ్యో హోత్రాభ్యః సఖా సప్తపదా భవ ॥",
          transliteration: "Ekam-ishe Vishnus-tvanvetu | Dve oorje... Treeni vrataya... Chatvari mayo-bhavaya... Pancha pashubhyah... Shadrutubhyah... Sapta saptabhyo hotrabhyah sakha saptapada bhava ||",
          scriptTe: "ఏకమిషే విష్ణుస్త్వాన్వేతు । ద్వే ఊర్జే... త్రీణి వ్రతాయ... చత్వారి మయోభవాయ... పంచ పశుభ్యః... షడృతుభ్యః... సప్త సప్తభ్యో హోత్రాభ్యః సఖా సప్తపదా భవ ॥"
        },
        meaning: {
          en: "Step 1: For nourishment. Step 2: For vigor. Step 3: For prosperity and vows. Step 4: For mutual happiness. Step 5: For righteous lineage. Step 6: For all seasons. Step 7: We have become eternal soul-friends! May we never drift apart!",
          te: "మొదటి అడుగు ఆహార సమృద్ధికి, రెండవది శారీరక మానసిక శక్తికి, మూడవది సద్ధర్మ వ్రతానికి, నాల్గవది ఆనందానికి, ఐదవది పశు-సంపదకు, ఆరవది ఋతువుల ఆనందానికి, ఏడవ అడుగు శాశ్వత స్నేహానికి. ఏడడుగులతో నీవు నా ఆత్మబంధువైనావు!"
        },
        audioText: {
          en: "Sakha saptapada bhava, sakhayau saptapada babhoova. With seven steps around the sacred fire, bride and groom become united as eternal companions.",
          te: "సఖా సప్తపదా భవ. అగ్నిసాక్షిగా ఏడడుగులు వేస్తూ పరస్పరం శాశ్వత స్నేహాన్ని, ధర్మాన్ని ప్రతిజ్ఞ చేయుట."
        }
      }
    ]
  },

  {
    id: "grihapravesham",
    category: "life-phase",
    phase: "Marriage & Family",
    phaseTe: "గృహస్థ & దాంపత్య దశ",
    deity: "Vastu Purusha, Lakshmi & Ganapati",
    deityTe: "వాస్తు పురుషుడు, లక్ష్మీదేవి మరియు మహాగణపతి",
    title: {
      en: "Griha Pravesham (New Home Blessing)",
      te: "గృహప్రవేశ మహోత్సవ విధి (వాస్తు శాంతి)"
    },
    subtitle: {
      en: "Consecrating a New Residence with Cow (Go) Puja, Milk Boiling & Vastu Shanti",
      te: "గోపూజ, పాలు పొంగించుట, వాస్తు హోమము మరియు లక్ష్మీ ఆవాహనతో నూతన గృహ ప్రవేశం"
    },
    significance: {
      en: "Griha Pravesha is the sanctification ceremony for entering a newly constructed or acquired home. The family welcomes a cow and calf into the dwelling first (symbolizing all 33 crore divinities), boils fresh milk until it overflows toward the northeast (Ishanya), and performs Vastu Shanti Homa to dispel negative energies and invite boundless peace, health, and wealth.",
      te: "నూతన గృహ నిర్మాణానంతరం లేదా క్రయవిక్రయాల అనంతరం ఆ ఇంట్లోకి శాస్త్రోక్తంగా ప్రవేశించడమే గృహప్రవేశం. గృహప్రవేశంలో గోమాత పూజ, పాలు పొంగించడం, సత్యనారాయణ స్వామి వ్రతం మరియు వాస్తు హోమం ప్రధానమైనవి. ఈశాన్యం వైపు పాలు పొంగితే ఆ ఇంట్లో సిరిసంపదలు, శాంతి సౌభాగ్యాలు వర్ధిల్లుతాయని విశ్వాసం."
    },
    bestTiming: {
      en: {
        season: "Uttarayana months (Magha, Phalguna, Vaishakha, Jyeshtha)",
        tithi: "Shukla Paksha Dvitiya, Tritiya, Panchami, Saptami, Dashami, Ekadashi, Trayodashi",
        timeOfDay: "Early morning before sunrise (Brahma Muhurtham) or Subha Lagna",
        details: "Avoid Tuesday and Saturday. Avoid Ashadha, Bhadrapada, and Pushya months. Nakshatras: Rohini, Mrigashira, Pushya, Uttara Phalguni, Hasta, Chitra, Anuradha, Uttarashadha, Uttara Bhadrapada, Revati."
      },
      te: {
        season: "ఉత్తరాయణ కాలంలో (మాఘ, ఫాల్గుణ, వైశాఖ, జ్యేష్ఠ మాసాలు)",
        tithi: "శుక్ల పక్ష విదియ, తదియ, పంచమి, సప్తమి, దశమి, ఏకాదశి, త్రయోదశి",
        timeOfDay: "తెల్లవారుజామున బ్రహ్మ ముహూర్తం లేదా శుభ లగ్న సమయం",
        details: "మంగళ, శనివారాలు పనికిరావు. ఆషాఢ, భాద్రపద, పుష్య మాసాలు వర్జ్యం. రోహిణి, మృగశిర, పుష్యమి, ఉత్తర, హస్త, చిత్త, అనురాధ, ఉత్తరాషాఢ, ఉత్తరాభాద్ర, రేవతి నక్షత్రాలు శుభప్రదం."
      }
    },
    samagri: [
      { nameEn: "Cow and Calf (Go-Mata with Dooda)", nameTe: "గోమాత మరియు దూడ (లేదా గో ప్రతిమ)", quantity: "1 pair", optional: false, noteEn: "Brought inside the home first", noteTe: "ఇంట్లోకి ముందుగా ప్రవేశింపజేయుటకు" },
      { nameEn: "New Clay Pot or Brass Pot for Milk Boiling", nameTe: "పాలు పొంగించడానికి నూతన మట్టి కుండ లేదా ఇత్తడి పాత్ర", quantity: "1", optional: false },
      { nameEn: "Fresh raw cow milk", nameTe: "స్వచ్ఛమైన ఆవు పాలు", quantity: "2-3 litres", optional: false },
      { nameEn: "Vastu Yantra & Navaratnas (9 gems) or Navadhanya", nameTe: "వాస్తు యంత్రం, నవధాన్యాలు, పంచలోహాలు", quantity: "1 packet each", optional: false },
      { nameEn: "Mango leaf toranam & Plantain trees (Arati chetlu)", nameTe: "మామిడి ఆకుల తోరణాలు, అరటి పిలకలు", quantity: "2 trees, 1 long toranam", optional: false },
      { nameEn: "Homa wood, Ghee, Camphor, Samidhalu", nameTe: "హోమ సమిధలు, ఆవు నెయ్యి, కర్పూరం", quantity: "1 set", optional: false },
      { nameEn: "Goddess Lakshmi Photo & Kalasha pot", nameTe: "లక్ష్మీదేవి పటం మరియు కలశం", quantity: "1 set", optional: false },
      { nameEn: "Sweets, Coconuts, Rice & Jaggery", nameTe: "బెల్లం, కొబ్బరికాయలు, బియ్యం, నైవేద్య పదార్థాలు", quantity: "Ample quantity", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Dwara Puja & Threshold Blessing", te: "ద్వార పూజ & గడప పూజ" },
        description: {
          en: "Worshiping the main threshold (Simha Dwaram) with turmeric, vermilion, flowers, and toranam, invoking Kuladevata and Lakshmi.",
          te: "సింహద్వారపు గడపకు పసుపు, కుంకుమలు రాసి, ముగ్గులు వేసి, పూలతో అలంకరించి లక్ష్మీదేవిగా భావించి పూజ చేస్తారు."
        },
        mantra: {
          sanskrit: "దేవి త్వం ద్వారసంస్థానా పూజితా సర్వసిద్ధిదా । ప్రవిశంతం గృహం మాం త్వం పాలయాయుర్బలాన్వితమ్ ॥",
          transliteration: "Devi tvam dwara-samsthana poojita sarva-siddhida | Pravishantam griham maam tvam palayayur-balanvitam ||",
          scriptTe: "దేవి త్వం ద్వారసంస్థానా పూజితా సర్వసిద్ధిదా । ప్రవిశంతం గృహం మాం త్వం పాలయాయుర్బలాన్వితమ్ ॥"
        },
        meaning: {
          en: "O Divine Mother residing at this threshold, fulfiller of all wishes! Bless and protect all of us as we enter this home endowed with longevity, peace, and vigor!",
          te: "సింహద్వారమందు కొలువై ఉన్న ఓ మాతా! సర్వ కార్యసిద్ధిని ప్రసాదించుము. ఈ గృహంలోకి ప్రవేశిస్తున్న మమ్ములను ఆయురారోగ్యాలతో సదా కాపాడుము!"
        },
        audioText: {
          en: "Devi tvam dwara-samsthana poojita sarva-siddhida, pravishantam griham maam tvam palayayur balanvitam. Sacred threshold puja before entering.",
          te: "దేవి త్వం ద్వారసంస్థానా పూజితా సర్వసిద్ధిదా. సింహద్వార గడప పూజ."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Cow Entry & First Entry into the House", te: "గోప్రవేశం & కలశ ప్రవేశం" },
        description: {
          en: "The cow and calf enter first, followed by the husband carrying the photo of the deity, and the wife carrying the overflowing Kalasha with auspicious items.",
          te: "ముందుగా గోమాతను ఇంట్లోకి ప్రవేశింపజేసి పూజిస్తారు. తరువాత యజమాని దైవపటాన్ని, ఇల్లాలు నిండు కలశాన్ని చేతబూని కుడికాలు ముందుంచి ప్రవేశిస్తారు."
        },
        mantra: {
          sanskrit: "గావో భగో గావ ఇంద్రో మే అచ్ఛాన్ గావః సోమస్య ప్రథమస్య భక్షః । ఏతా ధ్రువా అసి గావః సమగ్మన్ ॥",
          transliteration: "Gaavo bhago gaava Indro me achhaan gaavah somasya prathamasya bhakshah | Eta dhruva asi gaavah samagman ||",
          scriptTe: "గావో భగో గావ ఇంద్రో మే అచ్ఛాన్ గావః సోమస్య ప్రథమస్య భక్షః । ఏతా ధ్రువా అసి గావః సమగ్మన్ ॥"
        },
        meaning: {
          en: "The cow is prosperity! The cow is Indra! The presence of the cow sanctifies the home with the foremost blessings of abundance and immortality!",
          te: "గోమాత సమస్త ఐశ్వర్య ప్రదాయిని. గోమాత పాదధూళితో ఈ ఇల్లు పవిత్రమై, సమస్త దోషములు నశించి నిత్య లక్ష్మీ నివాసమగును గాక!"
        },
        audioText: {
          en: "Welcoming the holy cow and carrying the consecrated Kalasha inside the new home with right foot forward.",
          te: "గోమాత ప్రవేశం, మంగళకర కలశంతో నూతన గృహ ప్రవేశం."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Boiling of Milk (Paalu Ponginchuta)", te: "పాలు పొంగించుట" },
        description: {
          en: "Fresh cow milk is boiled in a new vessel placed on the stove. When the milk boils and overflows (ideally toward the Ishanya/northeast corner), everyone chants Govinda! and celebrates abundance.",
          te: "నూతన పాత్రలో ఆవు పాలు పోసి పొంగిస్తారు. పాలు ఈశాన్యం వైపు పొంగితే అత్యంత శుభకరం. అందరూ 'గోవిందా గోవిందా' అని స్మరిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం శ్రీం హ్రీం క్లీం కమలవాసిన్యై స్వాహా । క్షీరవృద్ధిః ఐశ్వర్యవృద్ధిః భవతు ॥",
          transliteration: "Om Shreem Hreem Kleem Kamala-vasinyai Swaha | Ksheera-vriddhih Aishwarya-vriddhih Bhavatu ||",
          scriptTe: "ఓం శ్రీం హ్రీం క్లీం కమలవాసిన్యై స్వాహా । క్షీరవృద్ధిః ఐశ్వర్యవృద్ధిః భవతు ॥"
        },
        meaning: {
          en: "Salutations to Goddess Lakshmi residing in the lotus! Just as this milk overflows with sweetness and purity, may our home overflow with wealth, virtue, and health!",
          te: "కమలవాసిని అయిన లక్ష్మీదేవికి నమస్కారము. ఈ పాలు పొంగిన రీతిగానే మా గృహమందు సిరిసంపదలు, సౌభాగ్యాలు నిరంతరం వర్ధిల్లును గాక!"
        },
        audioText: {
          en: "Om shreem hreem kleem kamala-vasinyai swaha. As milk boils and overflows, prosperity overflows in every corner of the dwelling.",
          te: "పాలు పొంగించు వేళ లక్ష్మీదేవిని స్మరిస్తూ సమస్త ఐశ్వర్య ప్రాప్తికై ప్రార్థన."
        }
      },
      {
        stepNumber: 4,
        title: { en: "Vastu Shanti & Navagraha Homa", te: "వాస్తు శాంతి & నవగ్రహ హోమము" },
        description: {
          en: "The priest conducts Vastu Purusha invocation and oblations in the sacred fire, neutralizing negative earth energies and sealing the boundaries with positive vibrations.",
          te: "వాస్తు పురుషునికి, నవగ్రహాలకు హోమ హవిస్సులను సమర్పించి గృహ పరిసరాలను సకల వాస్తు దోషాల నుండి శుద్ధి చేస్తారు."
        },
        mantra: {
          sanskrit: "నమస్తే వాస్తుపురుషాయ భూశయ్యాభిరత ప్రభో । మద్గృహం ధనధాన్యాది సమృద్ధం కురు సర్వదా ॥",
          transliteration: "Namaste Vastu-purushaya bhoo-shayyabhirata prabho | Mad-griham dhana-dhanyadi samriddham kuru sarvada ||",
          scriptTe: "నమస్తే వాస్తుపురుషాయ భూశయ్యాభిరత ప్రభో । మద్గృహం ధనధాన్యాది సమృద్ధం కురు సర్వదా ॥"
        },
        meaning: {
          en: "Salutations to You, O Lord Vastu Purusha, who rests on the bosom of Mother Earth! Bless my home always with abundant grains, wealth, peace, and longevity!",
          te: "భూమిపై శయనించి ఉండే ఓ వాస్తు పురుషుడా! నీకు నమస్కారము. నా ఈ గృహమును ధనధాన్యాలతో, ఆనంద సౌఖ్యాలతో ఎల్లప్పుడూ పరిపూర్ణముగా ఉంచుము!"
        },
        audioText: {
          en: "Namaste vastu-purushaya bhoo-shayyabhirata prabho, mad-griham dhana-dhanyadi samriddham kuru sarvada. Vastu Shanti homa prayer.",
          te: "నమస్తే వాస్తుపురుషాయ భూశయ్యాభిరత ప్రభో, మద్గృహం ధనధాన్యాది సమృద్ధం కురు సర్వదా. వాస్తు శాంతి ప్రార్థన."
        }
      }
    ]
  },

  {
    id: "shashtiabdapoorthi",
    category: "life-phase",
    phase: "Elderly & Retirement",
    phaseTe: "వార్ధక్య & శాంతి దశ",
    deity: "Mrityunjaya, Markandeya & Navagrahas",
    deityTe: "శ్రీ మహా మృత్యుంజయుడు, మార్కండేయుడు మరియు నవగ్రహాలు",
    title: {
      en: "Shashtiabdapoorthi (60th Birthday Ugraratha Shanti)",
      te: "షష్టిపూర్తి మహోత్సవము (ఉగ్రరథ శాంతి - 60వ జన్మదిన విధి)"
    },
    subtitle: {
      en: "Celebration of Reaching 60 Years, Ayushya Homa & Renewal of Marriage Vows",
      te: "60 సంవత్సరాల ఆయుష్షు పూర్తయిన సందర్భంగా ఆయురారోగ్య శాంతి పూజ మరియు పునఃకళ్యాణం"
    },
    significance: {
      en: "Shashtiabdapoorthi (also called Ugraratha Shanti) is celebrated upon completion of 60 lunar/solar years—completing one full cycle of the 60 Samvatsaras (from Prabhava to Akshaya). Because the planetary transitions at age 60 can bring bodily and mental challenges, 11 sacred Kalashas are invoked with deities like Markandeya, the Ashta Dikpalas, and Navagrahas. The husband and wife undergo an auspicious Abhishekam of herbal sanctified water, followed by a ceremonial re-tying of the Mangalasutra (Kalyana Mahotsavam).",
      te: "ఒక వ్యక్తి తన జీవితంలో 60 తెలుగు సంవత్సరాల చక్రమును (ప్రభవ నుండి అక్షయ వరకు) పూర్తి చేసుకుని 61వ ఏట అడుగుపెట్టిన సందర్భంలో చేసే మహోన్నత శాంతి ప్రక్రియే షష్టిపూర్తి. 60 ఏళ్ళ వయసులో వచ్చే గ్రహ దోషాలు, శారీరక రుగ్మతలను తొలగించుటకై ఉగ్రరథ శాంతి, ఆయుష్య హోమం, మృత్యుంజయ జపం నిర్వహిస్తారు. పుణ్యజలాలతో అభిషేకం (స్నానం) చేయించి, దంపతులకు నూతన వస్త్రాలు సమర్పించి పునః మాంగల్యధారణ (పెళ్లి వేడుక) జరిపిస్తారు."
    },
    bestTiming: {
      en: {
        season: "On or right after the exact 60th birthday (based on birth Janma Nakshatra and Masa)",
        tithi: "Janma Tithi or any auspicious Shukla Paksha day",
        timeOfDay: "Morning before 12:00 noon",
        details: "Calculated based on the person's birth solar/lunar month and Janma Nakshatra. Highly auspicious when conducted in pilgrim centers like Tirupati, Srisailam, or at home with family."
      },
      te: {
        season: "ఖచ్చితంగా 60 సంవత్సరాలు నిండి 61వ ఏట ప్రవేశించే జన్మ నక్షత్ర/మాస శుభవేళ",
        tithi: "జన్మ తిథి లేదా శుక్ల పక్ష శుభ తిథులు",
        timeOfDay: "ఉదయం 12 గంటలలోపు ప్రాతఃకాలం",
        details: "జన్మ నక్షత్రం రోజున చేయడం శ్రేష్ఠం. తిరుపతి, శ్రీశైలం వంటి క్షేత్రాలలో లేదా స్వగృహంలో బంధుమిత్రుల సమక్షంలో వైభవంగా నిర్వహిస్తారు."
      }
    },
    samagri: [
      { nameEn: "11 or 16 Kalashas with bronze pots & coconuts", nameTe: "11 లేదా 16 కలశ పాత్రలు, కొబ్బరికాయలు", quantity: "1 set", optional: false },
      { nameEn: "Holy river waters (Ganga, Yamuna, Godavari)", nameTe: "తీర్థ జలాలు (గంగ, గోదావరి జలాలు)", quantity: "1 bottle each", optional: false },
      { nameEn: "Herbs for Ayushya Snanam (Sahasradhara jalleda)", nameTe: "సహస్రధార జల్లెడ, ఔషధ ద్రవ్యాలు", quantity: "1 sieve, herbal powders", optional: false, noteEn: "For sprinkling water through sieve over couple", noteTe: "దంపతులపై జల్లెడతో తీర్థ స్నానం చేయించుటకు" },
      { nameEn: "New Mangalasutram (Gold thali or sacred thread)", nameTe: "నూతన మంగళసూత్రం / తాళిబొట్టు", quantity: "1", optional: false },
      { nameEn: "Ayushya & Mrityunjaya Homa samagri", nameTe: "ఆయుష్య, మృత్యుంజయ హోమ సామాగ్రి", quantity: "1 complete kit", optional: false },
      { nameEn: "Silk Pattu clothes for the couple", nameTe: "దంపతులకు నూతన పట్టు వస్త్రాలు", quantity: "1 set each", optional: false },
      { nameEn: "Gold coin or Silver coin for Daanam", nameTe: "దానాల కొరకు నాణేలు, వస్త్రాలు", quantity: "As per capacity", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Ayushya & Maha Mrityunjaya Homa", te: "ఆయుష్య & మహా మృత్యుంజయ హోమం" },
        description: {
          en: "Performing sacred fire oblations with cooked payasam and ghee, chanting the Maha Mrityunjaya Mantra and Ayushya Suktam for boundless longevity and physical vitality.",
          te: "ఆవు నెయ్యి, పరమాన్నంతో అగ్నిహోత్రంలో హవిస్సులు సమర్పిస్తూ మహా మృత్యుంజయ మంత్రం మరియు ఆయుష్య సూక్తాన్ని పఠిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం త్ర్యంబకం యజామహే సుగంధిం పుష్టివర్ధనమ్ । ఉర్వారుకమివ బంధనాన్ మృత్యోర్ముక్షీయ మామృతాత్ ॥",
          transliteration: "Om Tryambakam Yajamahe Sugandhim Pushti-vardhanam | Urvarukam-iva Bandhanan Mrityor-muksheeya Ma-amritat ||",
          scriptTe: "ఓం త్ర్యంబకం యజామహే సుగంధిం పుష్టివర్ధనమ్ । ఉర్వారుకమివ బంధనాన్ మృత్యోర్ముక్షీయ మామృతాత్ ॥"
        },
        meaning: {
          en: "We worship the Three-Eyed Lord Shiva, full of divine fragrance, who nourishes all beings! May He liberate us from death and bodily infirmities to divine immortality, just as a ripe cucumber effortlessly separates from its vine!",
          te: "సుగంధ భరితుడు, సమస్త ప్రాణులను పోషించేవాడైన ముక్కంటి దేవుడైన పరమశివుని పూజిస్తున్నాము. దోసపండు తొడిమ నుండి సునాయాసంగా వేరైనట్లు, మృత్యువు నుండి, వ్యాధుల నుండి విముక్తినిచ్చి మాకు అమృతత్వాన్ని ప్రసాదించుగాక!"
        },
        audioText: {
          en: "Om tryambakam yajamahe sugandhim pushtivardhanam, urvarukamiva bandhanan mrityor muksheeya maamritat. Supreme Maha Mrityunjaya prayer for health and life.",
          te: "ఓం త్ర్యంబకం యజామహే సుగంధిం పుష్టివర్ధనమ్, ఉర్వారుకమివ బంధనాన్ మృత్యోర్ముక్షీయ మామృతాత్. ఆయురారోగ్యాలకై మృత్యుంజయ మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Sahasradhara Abhishekam (Consecrated Bath)", te: "సహస్రధార కలశాభిషేకము" },
        description: {
          en: "The couple sits together on a wooden peetam while sons, daughters, and grandchildren pour sanctified water from the Kalashas through a thousand-hole brass sieve (Sahasradhara) over their heads.",
          te: "దంపతులను పీటలపై కూర్చుండబెట్టి, పిల్లలు, మనుమలు కలశ జలాలను సహస్రధార జల్లెడ ద్వారా వారి శిరస్సుపై పోస్తూ అభిషేకం జరుపుతారు."
        },
        mantra: {
          sanskrit: "ఆపో హి ష్ఠా మయోభువస్తా న ఊర్జే దధాతన । మహే రణాయ చక్షసే ॥",
          transliteration: "Aapo hi shtha mayo-bhuvas-ta na oorje dadhatana | Mahe ranaya chakshase ||",
          scriptTe: "ఆపో హి ష్ఠా మయోభువస్తా న ఊర్జే దధాతన । మహే రణాయ చక్షసే ॥"
        },
        meaning: {
          en: "O Sacred Waters! Verily you are the givers of supreme delight! Nourish us with vital energy, high spirits, and pristine vision!",
          te: "ఓ పవిత్ర తీర్థ జలములారా! మీరు ఆనంద ప్రదాతలు. మాకు అపారమైన శారీరక శక్తిని, తేజస్సును, దీర్ఘాయువును అనుగ్రహించండి!"
        },
        audioText: {
          en: "Aapo hi shtha mayo-bhuvas-ta na oorje dadhatana, mahe ranaya chakshase. The sanctifying herbal shower of longevity.",
          te: "ఆపో హి ష్ఠా మయోభువస్తా న ఊర్జే దధాతన. తీర్థజలాలతో సహస్రధార స్నానము."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Re-tying of Mangalsutra & Grand Mala Garland Exchange", te: "పునః మాంగల్యధారణ & పూలమాలల మార్పిడి" },
        description: {
          en: "Adorned in fresh wedding silk, the husband ties a new golden Mangalasutra around his wife's neck amidst the jubilant cheers and Akshatas of children and grandchildren.",
          te: "నూతన పట్టు వస్త్రాలు ధరించి, వేద మంత్రాల నడుమ భర్త భార్య మెడలో నూతన మంగళసూత్రాన్ని కట్టి, దండలు మార్చుకుని దాంపత్య మాధుర్యాన్ని పునరుద్ఘాటిస్తారు."
        },
        mantra: {
          sanskrit: "జీవేమ శరదః శతం । నందామ శరదః శతం । మోదామ శరదః శతమ్ ॥",
          transliteration: "Jeevema sharadah shatam | Nandama sharadah shatam | Modama sharadah shatam ||",
          scriptTe: "జీవేమ శరదః శతం । నందామ శరదః శతం । మోదామ శరదః శతమ్ ॥"
        },
        meaning: {
          en: "May we live a vibrant hundred autumns! May we rejoice together for a hundred autumns! May we abide in supreme contentment and bliss for a hundred autumns!",
          te: "మేము నూరేళ్ళు ఆనందముగా జీవించుదుము గాక! నూరేళ్ళు మా సంతాన సంపదలతో విరాజిల్లుదుము గాక! నూరేళ్ళు నిత్య సంతోషముతో వర్ధిల్లుదుము గాక!"
        },
        audioText: {
          en: "Jeevema sharadah shatam, nandama sharadah shatam, modama sharadah shatam. Renewing vows of sacred love and lifetime togetherness.",
          te: "జీవేమ శరదః శతం, నందామ శరదః శతం, మోదామ శరదః శతమ్. పునః మాంగల్యధారణ మరియు దంపతుల పరస్పర ఆశీర్వాదం."
        }
      }
    ]
  },

  {
    id: "antyeshti-shraddha",
    category: "life-phase",
    phase: "Ancestral & Transition",
    phaseTe: "పితృ కార్య & మోక్ష దశ",
    deity: "Yama Dharmaraja, Pitru Devatas & Lord Vishnu",
    deityTe: "యమ ధర్మరాజు, పితృ దేవతలు మరియు శ్రీ మహావిష్ణువు",
    title: {
      en: "Pitru Karyam & Shraddha (Ancestral Offerings)",
      te: "శ్రాద్ధ కర్మ మరియు పితృ తర్పణ విధి"
    },
    subtitle: {
      en: "Honoring Departed Forefathers with Sesame, Water (Tarpana) & Pinda Dana",
      te: "తిలలు, దర్భలు, జలములతో పితృ దేవతలకు తర్పణములు, పిండ ప్రదానము సమర్పించే విధి"
    },
    significance: {
      en: "Shraddha (performed with genuine 'Shraddha' or heartfelt devotion) and Mahalaya Tarpana during Pitru Paksha express sacred gratitude to ancestors (Pitrus). By offering black sesame seeds (Tila), Darbha grass, sacred water, and rice balls (Pindas), the descendants liberate souls from intermediate realms, invoke ancestral blessings for family harmony, and preserve generational spiritual lineage.",
      te: "మరణించిన పితృదేవతల పట్ల కృతజ్ఞతతో శ్రద్ధగా ఆచరించే కర్మయే శ్రాద్ధము. మహాలయ పితృపక్షంలో, అమావాస్యలలో లేదా సాంవత్సరిక శ్రాద్ధ తిథి నాడు నల్ల నువ్వులు, దర్భలు, పవిత్ర జలములతో తర్పణము వదులుతారు. అన్నము, నెయ్యితో చేసిన పిండములను పితృదేవతలకు సమర్పించడం వలన పితృ రుణం తీరి, వంశాభివృద్ధి, సంతాన సౌఖ్యం, సకల దోష నివారణ కలుగుతాయి."
    },
    bestTiming: {
      en: {
        season: "Annual death anniversary tithi, Mahalaya Paksha (Bhadrapada Krishna Paksha), or Amavasya days",
        tithi: "Aparahna Kala (afternoon between 12:30 PM and 3:30 PM) during Kutapa / Rohina Muhurtham",
        timeOfDay: "Afternoon (Aparahna - strictly not during morning or night)",
        details: "Mahalaya Amavasya (Sarva Pitru Amavasya) is universally sacred for all ancestors whose exact tithis are unknown."
      },
      te: {
        season: "సాంవత్సరిక తిథి నాడు, మహాలయ పితృ పక్షంలో (భాద్రపద బహుళ పక్షం) లేదా అమావాస్య నాడు",
        tithi: "అపరాహ్న కాలము (మధ్యాహ్నం 12:30 నుండి 3:30 గంటల మధ్య కుతప ముహూర్తం)",
        timeOfDay: "మధ్యాహ్న సమయము (ఉదయం పూట లేదా రాత్రి పూట ఎట్టి పరిస్థితుల్లోనూ చేయరాదు)",
        details: "మహాలయ అమావాస్య నాడు పితృ తిథులు తెలియని వారందరికీ కూడా తర్పణలు సమర్పించవచ్చు."
      }
    },
    samagri: [
      { nameEn: "Black sesame seeds (Nalla nuvvulu / Til)", nameTe: "నల్ల నువ్వులు (తిలలు)", quantity: "100g", optional: false },
      { nameEn: "Darbha grass (Kusha grass) with Pavithram", nameTe: "దర్భలు మరియు దర్భ పవిత్రం", quantity: "1 bundle", optional: false },
      { nameEn: "Raw rice & Barley (Yava)", nameTe: "బియ్యం మరియు యవలు", quantity: "250g", optional: false },
      { nameEn: "Cooked plain rice for Pindas", nameTe: "వండిన అన్నం (పిండముల కొరకు)", quantity: "1 bowl", optional: false },
      { nameEn: "Pure cow ghee & Honey", nameTe: "ఆవు నెయ్యి మరియు తేనె", quantity: "50g each", optional: false },
      { nameEn: "Silver or Copper vessel / Arghya Patra", nameTe: "రాగి లేదా వెండి తర్పణ పాత్ర", quantity: "1", optional: false },
      { nameEn: "Vastram & Dakshina for Brahmana / Guests", nameTe: "వస్త్రదానము మరియు బ్రాహ్మణ దక్షిణ", quantity: "As per family tradition", optional: false },
      { nameEn: "Food for crows and cows (Kaka Bali / Go Grasamu)", nameTe: "కాకులకు బలి అన్నం మరియు గోమాతకు గ్రాసం", quantity: "1 portion", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Pracheenaveeti & Tarpana Invocation", te: "ప్రాచీనావీతి & పితృ తర్పణ ఆరంభం" },
        description: {
          en: "The sacred thread (Yajnopaveetam) is shifted to the right shoulder hanging across to the left waist (Pracheenaveeti). The performer faces South, holding black sesame and water across the base of the thumb (Pitru Teertha).",
          te: "జంధ్యాన్ని అపసవ్యంగా (కుడి భుజంపై నుండి ఎడమ వైపుకు) మార్చుకుని దక్షిణ దిశగా కూర్చుంటారు. బొటనవేలు మరియు చూపుడు వేలు మధ్య నుండి (పితృ తీర్థం) నల్ల నువ్వులు, నీటిని సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "ఉశంతస్త్వా ని ధీమహ్యుశంతః సమిధీమహి । ఉశన్నుశత ఆ వహ పితౄన్ హవిషే అత్తవే ॥",
          transliteration: "Ushantas-tva ni dheemahy-ushantah samidheemahi | Ushan-nushata aa vaha pitroon havishe attave ||",
          scriptTe: "ఉశంతస్త్వా ని ధీమహ్యుశంతః సమిధీమహి । ఉశన్నుశత ఆ వహ పితౄన్ హవిషే అత్తవే ॥"
        },
        meaning: {
          en: "With earnest devotion we kindle this sacred contemplation; with reverence we offer this oblations! O sacred divine guide, welcome our cherished forefathers to receive and delight in this offering!",
          te: "శ్రద్ధాభక్తులతో మేము ఈ కార్యమును ఆచరిస్తున్నాము. మా పితృదేవతలు ఇక్కడికి విచ్చేసి మా సమర్పణలను స్వీకరించి మమ్ములను ఆశీర్వదించుదురు గాక!"
        },
        audioText: {
          en: "Ushantas-tva ni dheemahy-ushantah samidheemahi, ushan-nushata aa vaha pitroon havishe attave. Invoking departed souls with sacred water and sesame.",
          te: "ఉశంతస్త్వా ని ధీమహ్యుశంతః సమిధీమహి. తిల తర్పణ ఆవాహన."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Pinda Pradanam (Offering Sacred Rice Balls)", te: "పిండ ప్రదాన విధి" },
        description: {
          en: "Rice cooked soft, mixed with black sesame, ghee, and honey, is shaped into round balls (Pindas) and placed upon Darbha grass while invoking three generations: Father/Mother (Pita), Grandfather (Pitamaha), and Great-Grandfather (Prapitamaha).",
          te: "నెయ్యి, తేనె, నల్ల నువ్వులు కలిపిన అన్నంతో పిండాలు చేసి, దర్భలపై ఉంచుతూ పితృ, పితామహ, ప్రపితామహులకు శ్రద్ధగా సమర్పిస్తారు."
        },
        mantra: {
          sanskrit: "యేషాం న మాతా న పితా న బంధుః నాన్యగోత్రిణః । తే సర్వే తృప్తిమాయాంతు మయోత్సృష్టైః కుశోదకైః ॥",
          transliteration: "Yeshaam na mata na pita na bandhuh naanya-gotrinah | Te sarve triptim-aayantu mayotsrishtaih kushodakaih ||",
          scriptTe: "యేషాం న మాతా న పితా న బంధుః నాన్యగోత్రిణః । తే సర్వే తృప్తిమాయాంతు మయోత్సృష్టైః కుశోదకైః ॥"
        },
        meaning: {
          en: "Those ancestors who have neither mother, nor father, nor kin surviving to offer them sustenance—may all those souls attain peace and supreme satisfaction through this sacred water and Darbha grass!",
          te: "ఎవరికైతే తల్లి, తండ్రి, బంధువులు ఎవరూ లేక పిండ ప్రదానాలు అందక అలమటిస్తున్నారో, అటువంటి అనాథ ఆత్మలందరూ కూడా నేను సమర్పించిన ఈ దర్భ జలాల వలన పరిపూర్ణ తృప్తిని పొందుదురు గాక!"
        },
        audioText: {
          en: "Yeshaam na mata na pita na bandhuh naanya-gotrinah, te sarve triptim aayantu mayotsrishtaih kushodakaih. Universal compassion offering to all departed ancestors.",
          te: "యేషాం న మాతా న పితా న బంధుః. సమస్త పితృదేవతలకు సద్గతి మరియు తృప్తి కలగాలని పిండ సమర్పణ."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Kaka Bali & Go Grasamu (Offering to Crows & Cows)", te: "కాక బలి & గో గ్రాస సమర్పణ" },
        description: {
          en: "Portions of the cooked offerings are respectfully placed on an elevated clean place for crows (messengers of Yama / ancestors) and fed to cows, praying for universal redemption.",
          te: "పిండ శేషాన్ని కాకులకు (యమ దూతలు మరియు పితృ సంకేతం) సమర్పించి, ఆవుకు పచ్చగడ్డి, అన్నాన్ని తినిపిస్తారు."
        },
        mantra: {
          sanskrit: "ఐంద్రవాయవ్యయామ్యాశ్చ నైరృతాశ్చైవ వాయసాః । ప్రాప్నువంతు బలిం పుణ్యం యమదూతా నమస్తు తే ॥",
          transliteration: "Aindra-vayavya-yamyash-cha nairritash-chaiva vayasah | Prapnuvantu balim punyam yama-doota namastu te ||",
          scriptTe: "ఐంద్రవాయవ్యయామ్యాశ్చ నైరృతాశ్చైవ వాయసాః । ప్రాప్నువంతు బలిం పుణ్యం యమదూతా నమస్తు తే ॥"
        },
        meaning: {
          en: "May the sacred messengers of the directional quarters accept this blessed offering; salutations unto the messengers of Yama! May our ancestors be pleased!",
          te: "నలుదిక్కుల నుండి విచ్చేసే పక్షులు, యమదూతలు ఈ పవిత్ర బలి అన్నాన్ని స్వీకరించి పితృదేవతలకు శాంతిని మోక్షాన్ని చేకూర్చుదురు గాక!"
        },
        audioText: {
          en: "Offering the sacred food to birds and cows, concluding the ancestral Shraddha with humility and gratitude.",
          te: "కాక బలి మరియు గో గ్రాస సమర్పణతో పితృ కార్య పరిసమాప్తి."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') window.PUJAS_LIFE_PHASE = PUJAS_LIFE_PHASE;
if (typeof globalThis !== 'undefined') globalThis.PUJAS_LIFE_PHASE = PUJAS_LIFE_PHASE;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUJAS_LIFE_PHASE;
}
