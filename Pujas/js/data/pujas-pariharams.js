/**
 * Dosha Pariharams and Shantis (దోష పరిహారాలు మరియు శాంతి పూజలు)
 * Authentic remedies for astrological doshas, health, marriage, progeny, and evil eye.
 */

const PUJAS_PARIHARAMS = [
  {
    id: "navagraha-shanti",
    category: "pariharam",
    phase: "Any Phase of Life / Planetary Afflictions",
    phaseTe: "సకల దశలకు / గ్రహ దోష నివారణ",
    deity: "Navagraha Devatas (Surya to Ketu)",
    deityTe: "నవగ్రహ దేవతలు (సూర్యుడు మొదలు కేతువు వరకు)",
    title: {
      en: "Navagraha Shanti & Peeda Pariharam",
      te: "నవగ్రహ శాంతి & పీడా పరిహార పూజ"
    },
    subtitle: {
      en: "Remedies for Sade Sati, Ashtama Shani, Rahu-Ketu Transit & Planetary Afflictions",
      te: "ఏలినాటి శని, అర్ధాష్టమ శని, గురు-రాహు చండాల దోషాల నివారణ మరియు గ్రహానుకూలత క్రతువు"
    },
    significance: {
      en: "The nine celestial grahas govern human karmic fruition. When afflicted in natal charts (Janma Kundali) or transit (Gochara)—such as Shani Sade Sati (7.5 years), Ashtama Shani, or unfavorable Dasha-Antardasha periods—the Navagraha Shanti pacifies malefic influences and amplifies benefic energies. The remedy combines offering specific 9 grains (Navadhanyalu), lighting sesame/mustard oil lamps, and reciting the Navagraha Stotra composed by Maharishi Veda Vyasa.",
      te: "నవగ్రహాలు మానవుల పూర్వజన్మ కర్మల ఫలితాలను అందిస్తాయి. జాతకంలో గ్రహ దోషాలు ఉన్నప్పుడు లేదా గోచారంలో ఏలినాటి శని, అష్టమ శని, గురు మౌఢ్యమి, రాహు-కేతు సంచారాలు ప్రతికూలంగా ఉన్నప్పుడు నవగ్రహ శాంతి ఆచరిస్తారు. నవధాన్యాలు, నవగ్రహ వస్త్రాలు, నువ్వుల నూనె దీపాలు సమర్పించి, వేదవ్యాస ప్రణీత నవగ్రహ స్తోత్రాలను పఠించడం వలన గ్రహ పీడలు తొలగి ఆయురారోగ్యాలు, కార్యసిద్ధి కలుగుతాయి."
    },
    bestTiming: {
      en: {
        season: "Planetary transit day (Peyarchi), Saturdays, or Amavasya/Purnima",
        tithi: "Saturday for Shani/Rahu; Tuesday for Kuja/Ketu; Sunday for Surya; Thursday for Guru",
        timeOfDay: "Early morning before sunrise (Ushas Kala) or during Pradosha",
        details: "Surya during Sunday morning; Shani during Saturday morning before 8:00 AM or after sunset."
      },
      te: {
        season: "గ్రహ సంచార (గోచార) దినాలు, గ్రహణానంతర కాలం లేదా శనివారాలు",
        tithi: "శని/రాహువుకు శనివారం; కుజ/కేతువులకు మంగళవారం; గురుడికి గురువారం; సూర్యునికి ఆదివారం",
        timeOfDay: "సూర్యోదయానికి పూర్వం లేదా సాయంత్రం ప్రదోష వేళ",
        details: "శని దోష పరిహారానికి శనివారం ఉదయం నువ్వుల నూనెతో తైలాభిషేకం చేయడం అత్యుత్తమం."
      }
    },
    samagri: [
      { nameEn: "Navadhanyalu (9 sacred grains): Wheat, Rice, Toor, Moong, Chana, White beans, Sesame, Black gram, Horse gram", nameTe: "నవధాన్యాలు: గోధుమలు, వడ్లు/బియ్యం, కందులు, పెసలు, శనగలు, బొబ్బర్లు, నువ్వులు, మినుములు, ఉలవలు", quantity: "100g each in 9 packets", optional: false },
      { nameEn: "Navagraha vastralu (9 color cloths: Red, White, Red-patterned, Green, Yellow, White-spotted, Black, Smoky, Multi)", nameTe: "నవగ్రహ వస్త్రాలు (9 రంగుల గుడ్డ ముక్కలు)", quantity: "9 cloths", optional: false },
      { nameEn: "Sesame oil (Nuvvula noone) & Iron lamp (Inumu pramide)", nameTe: "నువ్వుల నూనె మరియు ఇనుప/మట్టి ప్రమిదలు", quantity: "500ml oil, 9 diyas", optional: false },
      { nameEn: "Black sesame seeds tied in small black cloth pouch", nameTe: "నల్లటి వస్త్రంలో కట్టిన నల్ల నువ్వుల మూట", quantity: "1 pouch", optional: false, noteEn: "For Shani Pariharam dipping in oil", noteTe: "శని దేవునికి నూనెలో వెలిగించుటకు" },
      { nameEn: "Blue and Red flowers (Neelambari & Mandaram)", nameTe: "నీలి రంగు పువ్వులు మరియు ఎర్ర మందారాలు", quantity: "1 basket", optional: false },
      { nameEn: "Navagraha Yantram or Photo", nameTe: "నవగ్రహ యంత్రం లేదా చిత్రపటం", quantity: "1", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Navadhanya Mandala Sthapana", te: "నవధాన్య మండల స్థాపన" },
        description: {
          en: "Arranging nine small heaps of the 9 sacred grains in their directional stations: Surya (Wheat/Center), Shukra (White beans/East), Kuja (Toor/South), Rahu (Black gram/South-West), Shani (Sesame/West), Ketu (Horse gram/North-West), Brihaspati (Chana/North), Budha (Moong/North-East), Chandra (Rice/South-East).",
          te: "మండలంపై నవధాన్యాలను తొమ్మిది రాశులుగా ఉంచి, ఆయా స్థానాలలో నవగ్రహాలను ఆవాహన చేస్తారు: మధ్యలో సూర్యుడు (గోధుమలు), తూర్పున శుక్రుడు, దక్షిణాన కుజుడు, నైరుతిలో రాహువు, పశ్చిమాన శని (నువ్వులు), వాయువ్యంలో కేతువు, ఉత్తరాన గురుడు, ఈశాన్యాన బుధుడు, ఆగ్నేయాన చంద్రుడు."
        },
        mantra: {
          sanskrit: "ఆదిత్యాయ చ సోమాయ మంగళాయ బుధాయ చ । గురు శుక్ర శనిభ్యశ్చ రాహవే కేతవే నమః ॥",
          transliteration: "Adityaya cha Somaya Mangalaya Budhaya cha | Guru Shukra Shanibhyash-cha Rahave Ketave Namah ||",
          scriptTe: "ఆదిత్యాయ చ సోమాయ మంగళాయ బుధాయ చ । గురు శుక్ర శనిభ్యశ్చ రాహవే కేతవే నమః ॥"
        },
        meaning: {
          en: "Salutations unto Aditya (Sun), Soma (Moon), Mangala (Mars), and Budha (Mercury)! Salutations unto Guru (Jupiter), Shukra (Venus), Shani (Saturn), Rahu, and Ketu!",
          te: "సూర్యుడు, చంద్రుడు, కుజుడు, బుధుడు, బృహస్పతి, శుక్రుడు, శని, రాహువు మరియు కేతువులకు నా నమస్కారములు."
        },
        audioText: {
          en: "Adityaya cha somaya mangalaya budhaya cha, guru shukra shanibhyash-cha rahave ketave namah. Invoking the nine cosmic planets.",
          te: "ఆదిత్యాయ చ సోమాయ మంగళాయ బుధాయ చ. నవగ్రహ ఆవాహన మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Navagraha Stotram Recitation (9 Stanzas)", te: "శ్రీ నవగ్రహ స్తోత్ర పఠనం (వ్యాస ప్రణీతం)" },
        description: {
          en: "Reciting the all-powerful 9-verse hymn of Veda Vyasa, seeking the neutralization of adverse planetary vibrations and inviting peace.",
          te: "మహర్షి వేదవ్యాస విరచిత నవగ్రహ స్తోత్రాన్ని భక్తితో పఠిస్తూ నవగ్రహ ప్రదక్షిణ చేస్తారు."
        },
        mantra: {
          sanskrit: "జపాకుసుమ సంకాశం కాశ్యపేయం మహాద్యుతిమ్ । తమోరిం సర్వపాపఘ్నం ప్రణతోస్మి దివాకరమ్ ॥ నీలాంజన సమాభాసం రవిపుత్రం యమాగ్రజమ్ । ఛాయామ switch ర్తాండ సంభూతం తం నమామి శనైశ్చరమ్ ॥",
          transliteration: "Japakusuma samkasham Kashyapeyam mahadyutim | Tamorim sarva-papaghnam pranato-smi Divakaram || Neelanjana samabhasam Ravi-putram Yamagrajam | Chhaya-Martanda sambhootam tam namami Shanaishcharam ||",
          scriptTe: "జపాకుసుమ సంకాశం కాశ్యపేయం మహాద్యుతిమ్ । తమోరిం సర్వపాపఘ్నం ప్రణతోస్మి దివాకరమ్ ॥ నీలాంజన సమాభాసం రవిపుత్రం యమాగ్రజమ్ । ఛాయామార్తాండ సంభూతం తం నమామి శనైశ్చరమ్ ॥"
        },
        meaning: {
          en: "Surya: Brilliant as the red hibiscus, son of Kashyapa, of immense splendor, enemy of darkness, dispeller of sins—I bow to the Sun! Shani: Resplendent like dark collyrium, son of the Sun, elder brother of Yama, born of Chhaya and the Sun—I bow to slow-moving Saturn!",
          te: "సూర్యుడు: మందార పుష్పం వంటి కాంతి గలవాడు, కశ్యపుని కుమారుడు, చీకట్లను పాపాలను నశింపజేసే సూర్య భగవానునికి ప్రణమిల్లుతున్నాను. శని: కాటుక వంటి శరీర ఛాయ కలవాడు, సూర్యపుత్రుడు, యమునికి సోదరుడైన శనిదేవునికి నమస్కరిస్తున్నాను."
        },
        audioText: {
          en: "Reciting the sacred Navagraha Stotram to pacify Saturn, Sun, Mars, Rahu, and Ketu.",
          te: "జపాకుసుమ సంకాశం... నీలాంజన సమాభాసం. నవగ్రహ స్తోత్ర పఠనము."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Tiladana & Navagraha Pradakshina (9 Circles)", te: "తిలదానం & 9 నవగ్రహ ప్రదక్షిణలు" },
        description: {
          en: "Circling the Navagraha mandala nine times in a clockwise direction with reverence. Offering black sesame seeds, clothes, or oil to the needy, completely dissolving malefic afflictions.",
          te: "నవగ్రహాల చుట్టూ 9 ప్రదక్షిణలు చేసి, నువ్వులు, నూనె లేదా వస్త్రాలను దానం చేయడం ద్వారా గ్రహదోష పరిహారం పూర్తవుతుంది."
        },
        mantra: {
          sanskrit: "నవగ్రహ సుప్రీతాః భవంతు । సర్వారిష్ట నివారణమస్తు ॥",
          transliteration: "Navagraha supreetah bhavantu | Sarvaarishta nivaranam-astu ||",
          scriptTe: "నవగ్రహ సుప్రీతాః భవంతు । సర్వారిష్ట నివారణమస్తు ॥"
        },
        meaning: {
          en: "May all the nine planetary deities be abundantly pleased! May all afflictions, hurdles, and misfortunes be completely resolved!",
          te: "నవగ్రహాలు సంతుష్టులై మాకు అనుకూలించుగాక! సమస్త అరిష్టములు, గ్రహ పీడలు తొలగి శాంతి కలుగుగాక!"
        },
        audioText: {
          en: "Navagraha supreetah bhavantu, sarvaarishta nivaranam astu. Completing the circumambulation and dana.",
          te: "నవగ్రహ సుప్రీతాః భవంతు, సర్వారిష్ట నివారణమస్తు. నవగ్రహ ప్రదక్షిణలు మరియు పరిహార సమాప్తి."
        }
      }
    ]
  },

  {
    id: "rahu-ketu-sarpa-dosha",
    category: "pariharam",
    phase: "Youth & Marriage / Obstacles",
    phaseTe: "వివాహ, సంతాన ఆటంకాల నివారణ",
    deity: "Lord Subrahmanya, Naga Devata & Rahu-Ketu",
    deityTe: "శ్రీ సుబ్రహ్మణ్యేశ్వర స్వామి, నాగ దేవత మరియు రాహు-కేతువులు",
    title: {
      en: "Rahu-Ketu & Sarpa Dosha Nivarana",
      te: "రాహు-కేతు మరియు కాలసర్ప దోష నివారణ పూజ"
    },
    subtitle: {
      en: "Remedy for Kala Sarpa Dosha, Naga Dosha, Unexplained Delays in Marriage & Health",
      te: "వివాహ ఆలస్యం, సంతాన లేమి, పీడకలల నివారణకై నాగ ప్రతిష్ఠ లేదా సుబ్రహ్మణ్యేశ్వర పూజ"
    },
    significance: {
      en: "When all seven planets are hemmed between Rahu and Ketu in a horoscope, it forms Kala Sarpa Dosha. Similarly, Sarpa Dosha occurs when Rahu or Ketu afflicts the 5th house (progeny), 7th house (marriage), or 8th house (longevity). This can cause recurring snake dreams, chronic skin ailments, or unexpected delays. The remedy is dedicated worship of Lord Subrahmanya (conqueror of snakes) with milk abhishekam at an anthill (Puttu), Nagadevata prata pratishtha, or visiting shrines like Kalahasti / Ghati Subramanya.",
      te: "జాతకంలో అన్ని గ్రహాలు రాహు-కేతువుల మధ్య చిక్కుకున్నప్పుడు కాలసర్ప దోషం ఏర్పడుతుంది. అలాగే రాహువు లేదా కేతువు 5వ (సంతాన), 7వ (కళత్ర) భావాలలో ఉన్నప్పుడు నాగదోషం కలుగుతుంది. దీనివలన వివాహంలో తీవ్ర ఆటంకాలు, సంతాన లోపం, భయాందోళనలు కలుగుతాయి. సుబ్రహ్మణ్యేశ్వర స్వామిని, నాగ ప్రతిమను పాలతో అభిషేకించడం, పుట్టలో పాలు పోయడం లేదా శ్రీకాళహస్తి క్షేత్ర దర్శనం చేయడం ద్వారా ఈ దోషాలు సంపూర్ణంగా నివారించబడతాయి."
    },
    bestTiming: {
      en: {
        season: "Naga Panchami (Shravana Shukla Panchami), Subrahmanya Shashti (Margashirsha), or Tuesdays",
        tithi: "Panchami, Shashti, or Amavasya tithis",
        timeOfDay: "Rahu Kalam on Tuesday (3:00 PM - 4:30 PM) for Rahu pacification, or Morning",
        details: "During Rahu Kalam on Tuesdays or Saturdays, lighting lemon-peel lamps (Nimmakaya deepalu) for Goddess Durga / Subrahmanya is highly potent."
      },
      te: {
        season: "నాగ పంచమి (శ్రావణ మాసం), సుబ్రహ్మణ్య షష్ఠి (మార్గశిర మాసం) లేదా మంగళవారాలు",
        tithi: "పంచమి, షష్ఠి లేదా అమావాస్య తిథులు",
        timeOfDay: "మంగళవారం రాహుకాలం (మధ్యాహ్నం 3:00 నుండి 4:30 వరకు) లేదా ఉదయం పూట",
        details: "రాహుకాలంలో దుర్గాదేవికి నిమ్మకాయ దీపాలు వెలిగించడం లేదా సుబ్రహ్మణ్యేశ్వరునికి క్షీరాభిషేకం చేయడం విశేష ఫలితాన్నిస్తుంది."
      }
    },
    samagri: [
      { nameEn: "Lead (Seesam) or Silver Naga Pratima (Serpent idols - 1 pair)", nameTe: "వెండి లేదా సీసపు నాగ ప్రతిమల జంట", quantity: "1 pair", optional: false },
      { nameEn: "Fresh unboiled Cow Milk (Pachi aavu paalu)", nameTe: "పచ్చి ఆవు పాలు", quantity: "1 litre", optional: false },
      { nameEn: "Eggs (Guddu - traditional offering at Nagula Chavithi/Panchami)", nameTe: "కోడిగుడ్లు (పుట్టలో సమర్పించే సంప్రదాయం ఉన్నవారికి)", quantity: "2-4", optional: true },
      { nameEn: "Chimmili (Sesame seeds ground with jaggery) & Chalimidi (Rice flour sweet)", nameTe: "చిమ్మిలి (నువ్వులు-బెల్లం ఉండలు) మరియు చలిమిడి", quantity: "1 bowl each", optional: false, noteEn: "Essential sweet offerings to Naga Devata", noteTe: "నాగదేవతకు అత్యంత ప్రీతిపాత్రమైన నైవేద్యం" },
      { nameEn: "Red flowers & Sandalwood paste", nameTe: "ఎర్రని పూలు, చందనం, పసుపు, కుంకుమ", quantity: "Standard", optional: false },
      { nameEn: "Urad dal (Minumulu) for Rahu & Horse gram (Ulavalu) for Ketu", nameTe: "మినుములు (రాహువుకు) మరియు ఉలవలు (కేతువుకు)", quantity: "100g each", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Subrahmanya & Naga Gayatri Invocation", te: "సుబ్రహ్మణ్య & నాగ గాయత్రీ జపం" },
        description: {
          en: "Bathing the twin silver serpent idols with raw cow milk and chanting the Naga Gayatri and Subrahmanya Gayatri to transmute serpent venom into spiritual wisdom.",
          te: "వెండి నాగ ప్రతిమలను పచ్చి ఆవుపాలతో అభిషేకించి, నాగ గాయత్రి మరియు సుబ్రహ్మణ్య గాయత్రి మంత్రాలను 21 సార్లు జపిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం నవకులాయ విద్మహే విషదంతాయ ధీమహి । తన్నో సర్పః ప్రచోదయాత్ ॥ ఓం తత్పురుషాయ విద్మహే మహాసేనాయ ధీమహి । తన్నః షణ్ముఖః ప్రచోదయాత్ ॥",
          transliteration: "Om Nava-kulaya Vidmahe Visha-dantaya Dheemahi | Tanno Sarpah Prachodayat || Om Tatpurushaya Vidmahe Mahasenaya Dheemahi | Tannah Shanmukhah Prachodayat ||",
          scriptTe: "ఓం నవకులాయ విద్మహే విషదంతాయ ధీమహి । తన్నో సర్పః ప్రచోదయాత్ ॥ ఓం తత్పురుషాయ విద్మహే మహాసేనాయ ధీమహి । తన్నః షణ్ముఖః ప్రచోదయాత్ ॥"
        },
        meaning: {
          en: "We contemplate the Nine Sacred Serpent Lineages; we meditate upon the powerful beings endowed with fangs! May the divine Serpent Deity awaken our inner serpent-power (Kundalini)! We meditate upon Lord Shanmukha / Mahasena; may the Six-Faced Lord inspire our intellect!",
          te: "నవ నాగ కులములను తెలుసుకుంటున్నాము, నాగదేవతను ధ్యానిస్తున్నాము. ఆ సర్ప దేవుడు మాకు జ్ఞానాన్ని ప్రసాదించుగాక! దేవసేనాపతియైన షణ్ముఖునికి ప్రణమిల్లుతున్నాము."
        },
        audioText: {
          en: "Om nava-kulaya vidmahe visha-dantaya dheemahi, tanno sarpah prachodayat. Naga Gayatri mantra for neutralizing serpent dosha.",
          te: "ఓం నవకులాయ విద్మహే విషదంతాయ ధీమహి, తన్నో సర్పః ప్రచోదయాత్. నాగ గాయత్రీ మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Nagaraja Stotram & Chimmili-Chalimidi Naivedyam", te: "నాగరాజ స్తోత్రం & చిమ్మిలి-చలిమిడి నైవేద్యం" },
        description: {
          en: "Invoking the nine great celestial serpents: Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhritarashtra, Takshaka, and Kaliya. Offering sweet chimmili and chalimidi.",
          te: "అనంత, వాసుకి, శేష, పద్మనాభ, కంబళ, శంఖపాల, ధృతరాష్ట్ర, తక్షక, కాళీయులనే నవనాగులను స్మరిస్తూ చిమ్మిలి, చలిమిడి నైవేద్యం పెడతారు."
        },
        mantra: {
          sanskrit: "అనంతం వాసుకిం శేషం పద్మనాభం చ కంబలమ్ । శంఖపాలం ధృతరాష్ట్రం తక్షకం కాళియం తథా ॥ ఏతాని నవ నామాని నాగానాం చ మహాత్మనామ్ । సాయంకాలే పఠేన్నిత్యం ప్రాతఃకాలే విశేషతః । తస్మై విషభయం నాస్తి సర్వత్ర విజయీ భవేత్ ॥",
          transliteration: "Anantam Vasukim Shesham Padmanabham cha Kambalam | Shankhapalam Dhritarashtram Takshakam Kaliyam tatha || Etani nava namani naganam cha mahatmanam | Sayankale pathen-nityam pratah-kale visheshatah | Tasmai visha-bhayam nasti sarvatra vijayee bhavet ||",
          scriptTe: "అనంతం వాసుకిం శేషం పద్మనాభం చ కంబలమ్ । శంఖపాలం ధృతరాష్ట్రం తక్షకం కాళియం తథా ॥ ఏతాని నవ నామాని నాగానాం చ మహాత్మనామ్ । సాయంకాలే పఠేన్నిత్యం ప్రాతఃకాలే విశేషతః । తస్మై విషభయం నాస్తి సర్వత్ర విజయీ భవేత్ ॥"
        },
        meaning: {
          en: "Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhritarashtra, Takshaka, Kaliya—whoever chants these nine names of the great serpents at dawn and dusk will never experience fear of poison, accidents, or venomous enemies, and will be victorious everywhere!",
          te: "అనంతుడు, వాసుకి, ఆదిశేషుడు మొదలైన తొమ్మిది మంది నాగరాజుల పేర్లను నిత్యం ఉదయం, సాయంత్రం స్మరించేవారికి సర్ప భయం, విష భయం ఉండదు; సమస్త కార్యాలలో విజయం చేకూరుతుంది."
        },
        audioText: {
          en: "Anantam vasukim shesham padmanabham cha kambalam. The protective nine names of the sacred serpents.",
          te: "అనంతం వాసుకిం శేషం పద్మనాభం చ కంబలమ్. నవనాగ స్తోత్ర పఠనం."
        }
      }
    ]
  },

  {
    id: "kuja-dosha-pariharam",
    category: "pariharam",
    phase: "Youth & Marriage",
    phaseTe: "యుక్త & వివాహ దశ",
    deity: "Lord Angaraka (Mars) & Lord Subrahmanya",
    deityTe: "అంగారకుడు (కుజుడు) మరియు సుబ్రహ్మణ్య స్వామి",
    title: {
      en: "Kuja Dosha (Manglik) Pariharam",
      te: "కుజ దోష (మంగళ దోష) నివారణ పూజ"
    },
    subtitle: {
      en: "Resolving Delays in Finding a Spouse, Temperament Clashes & Marital Well-being",
      te: "జాతకంలో 1, 2, 4, 7, 8, 12 స్థానాలలో కుజుడు ఉన్నప్పుడు చేసే శాంతి మరియు ఎర్ర కందుల దానం"
    },
    significance: {
      en: "Kuja (Manglik) Dosha arises when planet Mars occupies the 1st, 2nd, 4th, 7th, 8th, or 12th house from the Ascendant (Lagna), Moon, or Venus. It can cause fiery tempers, friction between partners, or extreme delays in finalizing marriage alliances. Because Lord Subrahmanya is the presiding commander deity of Mars, performing Kuja Shanti on Tuesdays with red flowers, lighting ghee lamps, donating red lentils (Kandulu) in red cloth, and offering Kumkuma archana dissolves the aggressive heat of Mars.",
      te: "లగ్న, చంద్ర, శుక్రుల నుండి 1, 2, 4, 7, 8, 12వ స్థానాల్లో కుజుడు స్థితిని బట్టి కుజ దోషం (మంగళ దోషం) ఏర్పడుతుంది. ఇది వివాహ ఆలస్యానికి, దాంపత్యంలో కలహాలకు కారణమవుతుంది. కుజుని అధిష్టాన దైవం సుబ్రహ్మణ్యేశ్వర స్వామి. మంగళవారం నాడు ఎరుపు రంగు వస్త్రంలో కందులు దానం చేయడం, స్వామివారికి ఎర్రని పూలతో కుంకుమార్చన చేయడం, అంగారక అష్టోత్తర శతనామావళి పఠించడం ద్వారా కుజ దోషం తొలగి శీఘ్ర వివాహ ప్రాప్తి కలుగుతుంది."
    },
    bestTiming: {
      en: {
        season: "Tuesdays, especially during Shukla Paksha",
        tithi: "Shashti, Mangala Vasara (Tuesday), or Mrigashira, Chitra, Dhanishta nakshatras",
        timeOfDay: "Morning between 6:00 AM and 7:30 AM (Bhauma Hora) or Sunset",
        details: "Fast on Tuesdays or consume food without salt once a day."
      },
      te: {
        season: "మంగళవారాలు, ముఖ్యంగా శుక్ల పక్షంలో",
        tithi: "షష్ఠి తిథి, మంగళవారం లేదా మృగశిర, చిత్త, ధనిష్ఠ నక్షత్రాలు",
        timeOfDay: "ఉదయం కుజ హోరలో (6:00 నుండి 7:30 మధ్య) లేదా సాయంత్రం",
        details: "మంగళవారం ఉప్పులేని ఆహారం తీసుకోవడం లేదా నక్తోపవాసం చేయడం మంచిది."
      }
    },
    samagri: [
      { nameEn: "Red Lentils (Kandulu / Toor Dal)", nameTe: "ఎర్ర కందులు", quantity: "1.25 kg", optional: false },
      { nameEn: "Red cloth (Erra vastram)", nameTe: "ఎరుపు రంగు వస్త్రం", quantity: "1 meter", optional: false },
      { nameEn: "Red flowers (Red oleander / Hibiscus / Mandara)", nameTe: "ఎర్రని మందారాలు లేదా గన్నేరు పూలు", quantity: "1 basket", optional: false },
      { nameEn: "Copper coin or small copper plate", nameTe: "రాగి నాణెం లేదా రాగి బిళ్ల", quantity: "1", optional: false },
      { nameEn: "Pure cow ghee & Red wicks", nameTe: "ఆవు నెయ్యి మరియు ఎరుపు రంగు వత్తులు", quantity: "Small bottle", optional: false },
      { nameEn: "Jaggery (Bellam)", nameTe: "తాజా బెల్లం ముక్క", quantity: "250g", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Angaraka Dhyanam & Red Flower Archana", te: "అంగారక ధ్యానం & ఎర్రటి పుష్పార్చన" },
        description: {
          en: "Lighting the ghee lamp with red wicks, offering red hibiscus flowers to Lord Angaraka and Lord Subrahmanya, chanting the hymn to the Son of Earth.",
          te: "ఎరుపు వత్తులతో దీపం వెలిగించి, కుజునికి, సుబ్రహ్మణ్య స్వామికి ఎర్రటి మందార పూలను సమర్పిస్తూ ధ్యానిస్తారు."
        },
        mantra: {
          sanskrit: "ధరణీగర్భ సంభూతం విద్యుత్కాంతి సమప్రభమ్ । కుమారం శక్తిహస్తం చ మంగళం ప్రణమామ్యహమ్ ॥",
          transliteration: "Dharani-garbha sambhootam vidyut-kanti samaprabham | Kumaram shakti-hastam cha Mangalam pranamaamy-aham ||",
          scriptTe: "ధరణీగర్భ సంభూతం విద్యుత్కాంతి సమప్రభమ్ । కుమారం శక్తిహస్తం చ మంగళం ప్రణమామ్యహమ్ ॥"
        },
        meaning: {
          en: "Born of the womb of Mother Earth, radiant like a flash of lightning! Possessing eternal youth, holding the divine lance of Shakti—I bow down to Mangala (Mars)!",
          te: "భూమాత గర్భమందు జనించినవాడు, మెరుపు వంటి దివ్య తేజస్సు కలవాడు, చేతిలో శక్తి ఆయుధాన్ని ధరించిన కుమార స్వరూపుడైన మంగళునికి (కుజునికి) నా నమస్కారములు."
        },
        audioText: {
          en: "Dharani-garbha sambhootam vidyut-kanti samaprabham, kumaram shakti-hastam cha mangalam pranamaamy-aham. Prayer to Mars.",
          te: "ధరణీగర్భ సంభూతం విద్యుత్కాంతి సమప్రభమ్. కుజ ధ్యాన శ్లోకము."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Kandula Daanam (Donation of Red Lentils)", te: "కందుల దాన విధి" },
        description: {
          en: "Wrapping 1.25 kg of red lentils with a copper coin and jaggery in the red cloth, tying it, and presenting it to a pious person or temple on Tuesday with sincere prayer for marriage fulfillment.",
          te: "ఎర్రని వస్త్రంలో ఒకటింపావు కిలో కందులు, రాగి నాణెం, బెల్లం ఉంచి మూటకట్టి, 'కుజ ప్రీత్యర్థం' అని సంకల్పం చేసి మంగళవారం నాడు దానం చేస్తారు."
        },
        mantra: {
          sanskrit: "మంగళో భూమిపుత్రశ్చ ఋణహర్తా ధనప్రదః । స్థిరాసనో మహాకాయః సర్వకామ ఫలప్రదః ॥",
          transliteration: "Mangalo bhoomi-putrash-cha rina-harta dhana-pradah | Sthirasano maha-kayah sarva-kama phala-pradah ||",
          scriptTe: "మంగళో భూమిపుత్రశ్చ ఋణహర్తా ధనప్రదః । స్థిరాసనో మహాకాయః సర్వకామ ఫలప్రదః ॥"
        },
        meaning: {
          en: "Mangala, the son of Earth, the remover of all debts, the bestower of wealth, seated firmly with mighty form—grant us the fulfillment of all noble desires!",
          te: "రుణాలను తీర్చి, ఐశ్వర్యాన్ని, ధైర్యాన్ని ప్రసాదించే భూమిపుత్రుడైన కుజుడు మా కుజదోషాన్ని నివారించి సకల మనోరథాలను సిద్ధంపజేయుగాక!"
        },
        audioText: {
          en: "Mangalo bhoomi-putrash-cha rina-harta dhana-pradah. Bestowing courage, marital peace, and freedom from debts.",
          te: "మంగళో భూమిపుత్రశ్చ ఋణహర్తా ధనప్రదః. కుజ దోష నివారణ ప్రార్థన."
        }
      }
    ]
  },

  {
    id: "santana-gopala-puja",
    category: "pariharam",
    phase: "Pregnancy & Parenthood",
    phaseTe: "గర్భధారణ & సంతాన ప్రాప్తి దశ",
    deity: "Sri Santana Gopala Swamy (Balakrishna)",
    deityTe: "శ్రీ సంతాన గోపాల స్వామి (బాలకృష్ణుడు)",
    title: {
      en: "Santana Gopala Puja & Pariharam",
      te: "సంతాన గోపాల కృష్ణ పూజ (సంతాన ప్రాప్తికై)"
    },
    subtitle: {
      en: "Sacred Remedy for Couples Aspiring for Virtuous, Healthy Children",
      te: "సంతాన లేమి, గర్భస్రావాల నివారణ మరియు ఉత్తమ సంతాన ప్రాప్తికై వెన్న-తులసీలతో బాలకృష్ణుని ఆరాధన"
    },
    significance: {
      en: "For couples experiencing delays in conceiving, genetic impediments, or recurrent miscarriages, Santana Gopala Puja invokes Lord Krishna in His endearing infant form crawling with butter. Chanting the Santana Gopala Mantra 108 times daily while offering fresh white butter (Vennamuddalu) and pure cow milk resolves Putra Dosha, fills the home with divine child laughter, and ensures healthy, intellectually brilliant progeny.",
      te: "సంతానం కలగడంలో ఆటంకాలు ఎదుర్కొంటున్న దంపతులు ఈ వ్రతాన్ని ఆచరిస్తారు. వెన్నదొంగ అయిన చిన్ని బాలకృష్ణుని విగ్రహాన్ని వెండి లేదా ఇత్తడి తొట్టెలో ఉంచి, తాజా వెన్న, తులసిమాలలతో అర్చిస్తారు. సంతాన గోపాల మంత్రాన్ని నిత్యం 108 సార్లు జపించి, గోసేవ చేయడం వలన జాతకంలోని పంచమభావ దోషాలు తొలగి, శ్రేష్ఠమైన, సద్గుణ సంపన్నులైన బిడ్డలు జన్మిస్తారని విశ్వాసం."
    },
    bestTiming: {
      en: {
        season: "Shukla Paksha Ashtami, Rohini Nakshatra, or any Thursday / Wednesday",
        tithi: "Shukla Ashtami, Ekadashi, or Purnima",
        timeOfDay: "Morning during Brahma Muhurtham (6:00 AM - 8:30 AM)",
        details: "Conducted continuously for 41 days (Mandalam) by both husband and wife together."
      },
      te: {
        season: "శుక్ల పక్ష అష్టమి, రోహిణి నక్షత్రం లేదా గురు, బుధవారాలు",
        tithi: "శుక్ల పక్ష అష్టమి, ఏకాదశి లేదా పౌర్ణమి తిథులు",
        timeOfDay: "ఉదయం బ్రహ్మ ముహూర్తంలో (6:00 నుండి 8:30 మధ్య)",
        details: "దంపతులు ఇద్దరూ కలిసి 41 రోజుల పాటు (ఒక మండల కాలం) నిష్ఠతో ఈ మంత్రాన్ని జపించడం విశేషం."
      }
    },
    samagri: [
      { nameEn: "Bala Krishna idol (Silver / Brass crawling Krishna)", nameTe: "బాలకృష్ణుని వెండి లేదా ఇత్తడి ప్రతిమ", quantity: "1", optional: false },
      { nameEn: "Fresh unsalted white butter (Middha venna)", nameTe: "తాజా వెన్న ముద్దలు", quantity: "1 cup", optional: false },
      { nameEn: "Cow milk & Sugar candy (Patichedaru / Mishri)", nameTe: "ఆవు పాలు మరియు పటికబెల్లం", quantity: "1 glass, small bowl", optional: false },
      { nameEn: "Tulasi leaves garland (Tulasi mala)", nameTe: "తులసి దళాల మాల", quantity: "1 garland", optional: false },
      { nameEn: "Yellow flowers & Sandalwood paste", nameTe: "పసుపు రంగు పువ్వులు, చందనం, కుంకుమ", quantity: "Standard", optional: false },
      { nameEn: "Small wooden cradle (Chinna Uyyala)", nameTe: "చిన్న చెక్క లేదా వెండి ఊయల", quantity: "1", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Balakrishna Abhishekam & Cradle Placement", te: "బాలకృష్ణ క్షీరాభిషేకం & ఊయలలో ఉంచుట" },
        description: {
          en: "Bathing the infant Balakrishna idol with sweet cow milk and pure water, drying with clean cloth, dressing in yellow garments, and placing Him lovingly into the cradle.",
          te: "బాలకృష్ణుని ప్రతిమను ఆవుపాలతో అభిషేకించి, పట్టు వస్త్రాలు తొడిగి, పూలతో అలంకరించి చిన్న ఊయలలో ఉంచుతారు."
        },
        mantra: {
          sanskrit: "దేవకీసుత గోవింద వాసుదేవ జగత్పతే । దేహి మే తనయం కృష్ణ త్వామహం శరణం గతః ॥",
          transliteration: "Devaki-suta Govinda Vasudeva Jagat-pate | Dehi Me Tanayam Krishna Tvaam-aham Sharanam Gatah ||",
          scriptTe: "దేవకీసుత గోవింద వాసుదేవ జగత్పతే । దేహి మే తనయం కృష్ణ త్వామహం శరణం గతః ॥"
        },
        meaning: {
          en: "O Son of Devaki! O Govinda! O Lord of all cosmos, Vasudeva! Grant unto me a noble, healthy child, O Krishna! I surrender my heart entirely unto Your divine feet!",
          te: "దేవకీ పుత్రుడవైన ఓ గోవిందా! వాసుదేవా! అఖిలాండకోటి బ్రహ్మాండ నాయకా! శ్రీకృష్ణా! నీవే నాకు శరణ్యము. నాకు ఉత్తమమైన సంతానమును అనుగ్రహించు తండ్రీ!"
        },
        audioText: {
          en: "Devaki-suta govinda vasudeva jagat-pate, dehi me tanayam krishna tvaam-aham sharanam gatah. The supreme prayer for parenthood.",
          te: "దేవకీసుత గోవింద వాసుదేవ జగత్పతే, దేహి మే తనయం కృష్ణ త్వామహం శరణం గతః. సంతాన గోపాల మంత్రం."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Santana Gopala Moola Mantra Japa (108 times)", te: "సంతాన గోపాల మూల మంత్ర జపం (108 సార్లు)" },
        description: {
          en: "Sitting facing East, husband and wife chant the Santana Gopala Moola Mantra using a Tulasi bead rosary (Japamala).",
          te: "తులసి మాలతో తూర్పు ముఖంగా కూర్చుని దంపతులు ఈ మంత్రాన్ని 108 సార్లు జపిస్తారు."
        },
        mantra: {
          sanskrit: "ఓం శ్రీం హ్రీం క్లీం గ్లౌం దేవకీసుత గోవింద వాసుదేవ జగత్పతే దేహి మే తనయం కృష్ణ త్వామహం శరణం గతః ॥",
          transliteration: "Om Shreem Hreem Kleem Glaum Devaki-suta Govinda Vasudeva Jagat-pate Dehi Me Tanayam Krishna Tvaam-aham Sharanam Gatah ||",
          scriptTe: "ఓం శ్రీం హ్రీం క్లీం గ్లౌం దేవకీసుత గోవింద వాసుదేవ జగత్పతే దేహి మే తనయం కృష్ణ త్వామహం శరణం గతః ॥"
        },
        meaning: {
          en: "Infused with the divine seed sounds of abundance, vitality, and attraction (Shreem Hreem Kleem Glaum), I plead with Lord Govinda to grace our home with the joy of a child!",
          te: "సకల బీజాక్షర సంపుటితో కూడిన ఈ సంతాన గోపాల మంత్రం గర్భస్థ దోషాలను హరించి సత్సంతాన ప్రాప్తిని చేకూరుస్తుంది."
        },
        audioText: {
          en: "Chanting the Santana Gopala Moola mantra with Tulasi rosary, invoking Krishna's supreme compassion.",
          te: "ఓం శ్రీం హ్రీం క్లీం గ్లౌం దేవకీసుత గోవింద... సంతాన గోపాల మూల మంత్ర జపము."
        }
      },
      {
        stepNumber: 3,
        title: { en: "Venna & Milk Prasadam Offering", te: "వెన్న & పాల ప్రసాద నివేదన" },
        description: {
          en: "Offering the fresh white butter mixed with mishri candy to Krishna, and the husband and wife eating the prasadam with devotion.",
          te: "తాజా వెన్న ముద్దను, పటికబెల్లం పాలను కృష్ణునికి నివేదించి, ఆ ప్రసాదాన్ని దంపతులిద్దరూ భక్తితో స్వీకరిస్తారు."
        },
        mantra: {
          sanskrit: "నవనీత సమాహారం గోపాలాయ నివేదయేత్ । ప్రసాదం స్వీకృతం కృత్వా సర్వకామం సమశ్నుతే ॥",
          transliteration: "Navaneeta samaharam Gopalaya nivedayet | Prasadam sweekritam kritva sarva-kamam samashnute ||",
          scriptTe: "నవనీత సమాహారం గోపాలాయ నివేదయేత్ । ప్రసాదం స్వీకృతం కృత్వా సర్వకామం సమశ్నుతే ॥"
        },
        meaning: {
          en: "Offering delicious pure butter to the beloved Cowherd Boy! Consuming this consecrated grace fulfills every cherished desire of the heart!",
          te: "బాలగోపాలునికి వెన్నను సమర్పించి, ఆ పవిత్ర ప్రసాదాన్ని భుజించడం ద్వారా సకల కోరికలు నెరవేరుతాయి."
        },
        audioText: {
          en: "Offering sweet white butter to child Krishna and partaking in the sanctified grace.",
          te: "నవనీత నివేదన మరియు దంపతుల ప్రసాద స్వీకరణ."
        }
      }
    ]
  },

  {
    id: "dristi-dosha-nivarana",
    category: "pariharam",
    phase: "Infancy to All Ages",
    phaseTe: "బాల్యము నుండి వృద్ధాప్యము వరకు సర్వులకు",
    deity: "Lord Hanuman & Goddess Durga",
    deityTe: "శ్రీ ఆంజనేయ స్వామి మరియు దుర్గాదేవి",
    title: {
      en: "Balarishta & Dristi (Evil Eye) Dosha Nivarana",
      te: "దిష్టి దోష నివారణ & రక్షా విధానం (బాలారిష్ట శాంతి)"
    },
    subtitle: {
      en: "Warding off Negative Vibrations, Jealousy, Nightmares & Sudden Illness with Vedic Remedies",
      te: "ఉప్పు-మిరపకాయలు, కొబ్బరికాయ దిష్టి, ఆంజనేయ రక్షా మంత్రాలతో నరదృష్టి, చెడు శక్తుల నివారణ"
    },
    significance: {
      en: "The ancient adage 'Nara dristi can shatter stones' (నరుడి కన్ను తగిలితే నల్ల రాయి అయినా పగులుతుంది) reflects the psychological and subtle-energy impact of envy and negative projections. When infants cry inconsolably without medical reason, or when families experience sudden setbacks, traditional Dristi Nivarana restores harmonious aura. Methods include waving sea salt with dry red chilies, waving a whole coconut coated with turmeric and vermilion around the person, and tying a sanctified black thread (Nalla dharamu) with the Hanuman Kavacha Mantra.",
      te: "నరుడి దృష్టి (దిష్టి) వల్ల పసిపిల్లలు ఏడవటం, పాలు తాగకపోవడం, వ్యాపారంలో నష్టాలు రావడం, ఉన్నట్లుండి ఇంట్లో అశాంతి కలగడం జరుగుతుందని ప్రతీతి. రాళ్ళూప్పు, ఎండు మిరపకాయలు లేదా నిమ్మకాయలతో దిష్టి తీయడం, కొబ్బరికాయను తల చుట్టూ తిప్పి పగలగొట్టడం, ఆంజనేయ స్వామి రక్షా మంత్రంతో నల్లటి రక్షా దారాన్ని కట్టడం ద్వారా సమస్త నరఘోష, ఈర్ష్యా ద్వేషాలు నశించి రక్షణ కలుగుతుంది."
    },
    bestTiming: {
      en: {
        season: "Tuesday evening, Saturday evening, Amavasya, or Purnima nights",
        tithi: "Tuesday or Saturday evening during twilight (Godhuli Vela)",
        timeOfDay: "Immediately after sunset (Pradosha / Sandhya)",
        details: "Never perform evil eye removal facing inside the house; always stand facing outside the entrance."
      },
      te: {
        season: "మంగళవారం లేదా శనివారం సాయంత్రం, అమావాస్య దినాలు",
        tithi: "మంగళ, శనివారాల సంధ్యా సమయము",
        timeOfDay: "సూర్యాస్తమయం అయిన వెంటనే (గోధూళి వేళ)",
        details: "దిష్టి తీసేటప్పుడు ఇంటి లోపల కాకుండా, సింహద్వారం వెలుపలికి ముఖం పెట్టి తీయాలి."
      }
    },
    samagri: [
      { nameEn: "Whole Sea Salt (Ralluppu) & Dried Red Chilies (Endu Mirapakayalu)", nameTe: "దొడ్డు ఉప్పు (రాళ్ళ ఉప్పు) మరియు ఎండు మిరపకాయలు", quantity: "Handful salt, 3 or 7 chilies", optional: false },
      { nameEn: "Whole Coconut with Husk (Kobbari kaaya)", nameTe: "పీచుతో ఉన్న కొబ్బరికాయ", quantity: "1", optional: false },
      { nameEn: "Lemons (Nimmakaayalu)", nameTe: "నిమ్మకాయలు", quantity: "2-3", optional: false },
      { nameEn: "Black thread (Nalla daaram)", nameTe: "నల్లటి దారం", quantity: "1 piece", optional: false, noteEn: "To tie on ankle or wrist after mantra", noteTe: "పాదానికి లేదా చేతికి కట్టుటకు" },
      { nameEn: "Sindhoor from Hanuman temple", nameTe: "ఆంజనేయ స్వామి సింధూరం", quantity: "Small pinch", optional: false },
      { nameEn: "Camphor (Karpuram) & Brass plate", nameTe: "కర్పూరం మరియు హారతి పళ్ళెం", quantity: "1 cake", optional: false }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Salt & Red Chili Circumambulation (Dristi Teeyuta)", te: "రాళ్ళ ఉప్పు & ఎండు మిరపకాయలతో దిష్టి తీయుట" },
        description: {
          en: "Take whole sea salt, dry red chilies, and a pinch of mustard seeds in closed fists. Circle clockwise three times and counter-clockwise three times around the child/person from head to toe, then throw them into burning embers.",
          te: "పిడికిలిలో రాళ్ళ ఉప్పు, ఎండు మిరపకాయలు, ఆవాలు పట్టుకుని, వ్యక్తి తల నుండి పాదాల వరకు మూడుసార్లు కుడివైపు, మూడుసార్లు ఎడమవైపు తిప్పి 'సకల నరదృష్టి, కనుదృష్టి తొలగిపోవుగాక' అని నిప్పులలో వేస్తారు."
        },
        mantra: {
          sanskrit: "సర్వబాధా ప్రశమనం త్రైలోక్యస్యాఖిలేశ్వరి । ఏవమేవ త్వయా కార్యమస్మద్వైరి వినాశనమ్ ॥",
          transliteration: "Sarva-badha prashamanam trailokyasyakhileshwari | Evameva tvaya karyam-asmad-vairi vinashanam ||",
          scriptTe: "సర్వబాధా ప్రశమనం త్రైలోక్యస్యాఖిలేశ్వరి । ఏవమేవ త్వయా కార్యమస్మద్వైరి వినాశనమ్ ॥"
        },
        meaning: {
          en: "O Supreme Empress of the three worlds! Pacify all afflictions and distress! Extinguish all ill-wishes, envy, and malevolent obstructions directed against us!",
          te: "ఓ జగన్మాతా! త్రిలోకాలలోని సమస్త బాధలను ఉపశమింపజేయుము. మాకు కలిగిన సమస్త నరదృష్టి, శత్రుపీడ, భయములను సమూలంగా నశింపజేయుము!"
        },
        audioText: {
          en: "Sarva-badha prashamanam trailokyasyakhileshwari. Waving salt and dry chilies to dispel evil eye and malevolence.",
          te: "సర్వబాధా ప్రశమనం త్రైలోక్యస్యాఖిలేశ్వరి. రాళ్ళ ఉప్పుతో దిష్టి తీయుట."
        }
      },
      {
        stepNumber: 2,
        title: { en: "Hanuman Kavacha Raksha Dharana", te: "ఆంజనేయ రక్షా మంత్రం & తిలక ధారణ" },
        description: {
          en: "Applying sacred vermilion (Sindhoor) consecrated at Lord Hanuman's feet on the forehead, and tying the sanctified black thread on the right wrist or left ankle.",
          te: "ఆంజనేయ స్వామి సింధూరాన్ని నుదుటిపై తిలకంగా దిద్ది, హనుమాన్ రక్షా మంత్రంతో నల్ల దారాన్ని చేతికి లేదా కాలి మడమకు కడతారు."
        },
        mantra: {
          sanskrit: "మనోజవం మారుతతుల్యవేగం జితేంద్రియం బుద్ధిమతాం వరిష్ఠమ్ । వాతాత్మజం వానరయూథముఖ్యం శ్రీరామదూతం శరణం ప్రపద్యే ॥",
          transliteration: "Manojavam Maruta-tulya-vegam Jitendriyam Buddhimatam Varishtham | Vatatmajam Vanara-yootha-mukhyam Shri-Rama-dootam Sharanam Prapadye ||",
          scriptTe: "మనోజవం మారుతతుల్యవేగం జితేంద్రియం బుద్ధిమతాం వరిష్ఠమ్ । వాతాత్మజం వానరయూథముఖ్యం శ్రీరామదూతం శరణం ప్రపద్యే ॥"
        },
        meaning: {
          en: "Swift as the mind, fleet as the wind! Master of the senses, foremost among intellectuals! Son of the Wind-God, leader of the monkey hosts, supreme envoy of Sri Rama—in You I take ultimate refuge!",
          te: "మనస్సు వంటి వేగం కలవాడు, గాలితో సమానమైన వేగము కలవాడు, ఇంద్రియాలను జయించినవాడు, జ్ఞానులలో శ్రేష్ఠుడు, శ్రీరామదూత అయిన ఆంజనేయ స్వామిని శరణు వేడుతున్నాను."
        },
        audioText: {
          en: "Manojavam maruta-tulya-vegam jitendriyam buddhimatam varishtham. Invoking Lord Hanuman for absolute spiritual protection.",
          te: "మనోజవం మారుతతుల్యవేగం జితేంద్రియం బుద్ధిమతాం వరిష్ఠమ్. ఆంజనేయ రక్షా కవచం."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') window.PUJAS_PARIHARAMS = PUJAS_PARIHARAMS;
if (typeof globalThis !== 'undefined') globalThis.PUJAS_PARIHARAMS = PUJAS_PARIHARAMS;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUJAS_PARIHARAMS;
}
