/**
 * Panchanga and Vedic Calendar Data for Sankalpam & Timing Reference
 * Includes Telugu & English mappings for 60 Samvatsaras, Ayanas, Ritus, Masas, Tithis, Nakshatras & Gotras
 */

const PANCHANG_DATA = {
  samvatsaras: [
    { en: "Prabhava", te: "ప్రభవ" }, { en: "Vibhava", te: "విభవ" }, { en: "Shukla", te: "శుక్ల" },
    { en: "Pramodoota", te: "ప్రమోదూత" }, { en: "Prajotpatti", te: "ప్రజోత్పత్తి" }, { en: "Aangirasa", te: "ఆంగీరస" },
    { en: "Srimukha", te: "శ్రీముఖ" }, { en: "Bhava", te: "భావ" }, { en: "Yuva", te: "యువ" },
    { en: "Dhatru", te: "ధాతృ" }, { en: "Eshwara", te: "ఈశ్వర" }, { en: "Bahudhanya", te: "బహుధాన్య" },
    { en: "Pramathi", te: "ప్రమాథి" }, { en: "Vikrama", te: "విక్రమ" }, { en: "Vrushaprajapati", te: "వృషప్రజాపతి" },
    { en: "Chitrabhanu", te: "చిత్రభాను" }, { en: "Subhanu", te: "స్వభాను" }, { en: "Tarana", te: "తారణ" },
    { en: "Parthiva", te: "పార్థివ" }, { en: "Vyaya", te: "వ్యయ" }, { en: "Sarvajithu", te: "సర్వజిత్తు" },
    { en: "Sarvadhari", te: "సర్వధారి" }, { en: "Virodhi", te: "విరోధి" }, { en: "Vikruthi", te: "వికృతి" },
    { en: "Khara", te: "ఖర" }, { en: "Nandana", te: "నందన" }, { en: "Vijaya", te: "విజయ" },
    { en: "Jaya", te: "జయ" }, { en: "Manmatha", te: "మన్మథ" }, { en: "Durmukhi", te: "దుర్ముఖి" },
    { en: "Hevilambi", te: "హేవిళంబి" }, { en: "Vilambi", te: "విళంబి" }, { en: "Vikari", te: "వికారి" },
    { en: "Sharvari", te: "శార్వరి" }, { en: "Plava", te: "ప్లవ" }, { en: "Shubhakruthu", te: "శుభకృతు" },
    { en: "Sobhakruthu", te: "శోభకృతు" }, { en: "Krodhi", te: "క్రోధి" }, { en: "Viswavasu", te: "విశ్వావసు" },
    { en: "Parabhava", te: "పరాభవ" }, { en: "Plavanga", te: "ప్లవంగ" }, { en: "Keelaka", te: "కీలక" },
    { en: "Saumya", te: "సౌమ్య" }, { en: "Sadharana", te: "సాధారణ" }, { en: "Virodhikruthu", te: "విరోధికృతు" },
    { en: "Paridhavi", te: "పరీధావి" }, { en: "Pramadicha", te: "ప్రమాదీచ" }, { en: "Aananda", te: "ఆనంద" },
    { en: "Rakshasa", te: "రాక్షస" }, { en: "Nala", te: "నల" }, { en: "Pingala", te: "పింగళ" },
    { en: "Kalayukthi", te: "కాళయుక్తి" }, { en: "Siddharthi", te: "సిద్ధార్థి" }, { en: "Roudri", te: "రౌద్రి" },
    { en: "Durmathi", te: "దుర్మతి" }, { en: "Dundubhi", te: "దుందుభి" }, { en: "Rudhirodgari", te: "రుధిరోద్గారి" },
    { en: "Raktakshi", te: "రక్తాక్షి" }, { en: "Krodhana", te: "క్రోధన" }, { en: "Akshaya", te: "అక్షయ" }
  ],

  ayanas: [
    { id: "uttarayana", en: "Uttarayana (Sun moving northwards)", te: "ఉత్తరాయణే (సూర్యుని ఉత్తర గమనం)" },
    { id: "dakshinayana", en: "Dakshinayana (Sun moving southwards)", te: "దక్షిణాయనే (సూర్యుని దక్షిణ గమనం)" }
  ],

  ritus: [
    { en: "Vasanta Ritu (Spring)", te: "వసంత ఋతౌ (చైత్ర, వైశాఖ మాసాలు)" },
    { en: "Greeshma Ritu (Summer)", te: "గ్రీష్మ ఋతౌ (జ్యేష్ఠ, ఆషాఢ మాసాలు)" },
    { en: "Varsha Ritu (Monsoon)", te: "వర్ష ఋతౌ (శ్రావణ, భాద్రపద మాసాలు)" },
    { en: "Sharad Ritu (Autumn)", te: "శరద్ ఋతౌ (ఆశ్వయుజ, కార్తీక మాసాలు)" },
    { en: "Hemanta Ritu (Pre-Winter)", te: "హేమంత ఋతౌ (మార్గశిర, పుష్య మాసాలు)" },
    { en: "Shishira Ritu (Winter)", te: "శిశిర ఋతౌ (మాఘ, ఫాల్గుణ మాసాలు)" }
  ],

  masas: [
    { en: "Chaitra", te: "చైత్ర మాసే" }, { en: "Vaishakha", te: "వైశాఖ మాసే" },
    { en: "Jyeshtha", te: "జ్యేష్ఠ మాసే" }, { en: "Ashadha", te: "ఆషాఢ మాసే" },
    { en: "Shravana", te: "శ్రావణ మాసే" }, { en: "Bhadrapada", te: "భాద్రపద మాసే" },
    { en: "Ashwayuja", te: "ఆశ్వయుజ మాసే" }, { en: "Karthika", te: "కార్తీక మాసే" },
    { en: "Margashirsha", te: "మార్గశీర్ష మాసే" }, { en: "Pushya", te: "పుష్య మాసే" },
    { en: "Magha", te: "మాఘ మాసే" }, { en: "Phalguna", te: "ఫాల్గుణ మాసే" }
  ],

  pakshas: [
    { en: "Shukla Paksha (Waxing moon)", te: "శుక్ల పక్షే (పూర్ణిమ వైపు)" },
    { en: "Krishna Paksha (Waning moon)", te: "కృష్ణ పక్షే (అమావాస్య వైపు)" }
  ],

  tithis: [
    { en: "Padyami (Prathama)", te: "పాడ్యమి తిథౌ" }, { en: "Vidiya (Dwitiya)", te: "విదియ తిథౌ" },
    { en: "Tadiya (Tritiya)", te: "తదియ తిథౌ" }, { en: "Chavithi (Chaturthi)", te: "చవితి తిథౌ" },
    { en: "Panchami", te: "పంచమి తిథౌ" }, { en: "Shashti", te: "షష్ఠి తిథౌ" },
    { en: "Saptami", te: "సప్తమి తిథౌ" }, { en: "Ashtami", te: "అష్టమి తిథౌ" },
    { en: "Navami", te: "నవమి తిథౌ" }, { en: "Dashami", te: "దశమి తిథౌ" },
    { en: "Ekadashi", te: "ఏకాదశి తిథౌ" }, { en: "Dwadashi", te: "ద్వాదశి తిథౌ" },
    { en: "Trayodashi", te: "త్రయోదశి తిథౌ" }, { en: "Chaturdashi", te: "చతుర్దశి తిథౌ" },
    { en: "Purnima (Full Moon)", te: "పూర్ణిమ తిథౌ" }, { en: "Amavasya (New Moon)", te: "అమావాస్య తిథౌ" }
  ],

  vasaras: [
    { en: "Bhanu Vasara (Sunday)", te: "భానువాసరే (ఆదివారం)" },
    { en: "Indu Vasara (Monday)", te: "ఇందువాసరే (సోమవారం)" },
    { en: "Bhauma Vasara (Tuesday)", te: "భౌమవాసరే (మంగళవారం)" },
    { en: "Saumya Vasara (Wednesday)", te: "సౌమ్యవాసరే (బుధవారం)" },
    { en: "Guru Vasara (Thursday)", te: "గురువాసరే (గురువారం)" },
    { en: "Bhrigu Vasara (Friday)", te: "భృగువాసరే (శుక్రవారం)" },
    { en: "Sthira Vasara (Saturday)", te: "స్థిరవాసరే (శనివారం)" }
  ],

  nakshatras: [
    { en: "Ashwini", te: "అశ్విని" }, { en: "Bharani", te: "భరణి" }, { en: "Krittika", te: "కృత్తిక" },
    { en: "Rohini", te: "రోహిణి" }, { en: "Mrigashira", te: "మృగశిర" }, { en: "Ardra", te: "ఆర్ద్ర" },
    { en: "Punarvasu", te: "పునర్వసు" }, { en: "Pushyami", te: "పుష్యమి" }, { en: "Ashlesha", te: "ఆశ్లేష" },
    { en: "Magha", te: "మఖ" }, { en: "Purva Phalguni (Pubba)", te: "పూర్వఫల్గుణి (పుబ్బ)" }, { en: "Uttara Phalguni", te: "ఉత్తరఫల్గుణి (ఉత్తర)" },
    { en: "Hasta", te: "హస్త" }, { en: "Chitra", te: "చిత్త" }, { en: "Swati", te: "స్వాతి" },
    { en: "Vishakha", te: "విశాఖ" }, { en: "Anuradha", te: "అనూరాధ" }, { en: "Jyeshtha", te: "జ్యేష్ఠ" },
    { en: "Moola", te: "మూల" }, { en: "Purvashadha", te: "పూర్వాషాఢ" }, { en: "Uttarashadha", te: "ఉత్తరాషాఢ" },
    { en: "Shravana", te: "శ్రవణ" }, { en: "Dhanishta", te: "ధనిష్ఠ" }, { en: "Shatabhisha", te: "శతభిషం" },
    { en: "Purva Bhadrapada", te: "పూర్వాభాద్ర" }, { en: "Uttara Bhadrapada", te: "ఉత్తరాభాద్ర" }, { en: "Revati", te: "రేవతి" }
  ],

  gotras: [
    { en: "Bharadwaja", te: "భరద్వాజస" }, { en: "Kashyapa", te: "కశ్యపస" },
    { en: "Vashishta", te: "వశిష్టస" }, { en: "Kaundinya", te: "కౌండిన్యస" },
    { en: "Vishwamitra", te: "విశ్వామిత్రస" }, { en: "Gautama", te: "గౌతమస" },
    { en: "Jamadagni", te: "జమదగ్నిస" }, { en: "Haritasa", te: "హరితస" },
    { en: "Atri", te: "ఆత్రేయస" }, { en: "Shrivatsa", te: "శ్రీవత్సస" },
    { en: "Sankhyayana", te: "సాంఖ్యాయనస" }, { en: "Parashara", te: "పరాశరస" },
    { en: "Agastya", te: "అగస్త్యస" }, { en: "Moudgalya", te: "మౌద్గల్యస" },
    { en: "Shoundilya", te: "శౌండిల్యస" }, { en: "Garga", te: "గార్గ్యస" }
  ]
};

if (typeof window !== 'undefined') {
  window.PANCHANG_DATA = PANCHANG_DATA;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PANCHANG_DATA = PANCHANG_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PANCHANG_DATA;
}
