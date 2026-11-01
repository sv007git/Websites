/**
 * Personalized Vedic Sankalpam Generator
 * Combines dynamic calendar calculations with user Gotra, Nakshatra, and Names.
 */

const _panchang = typeof PANCHANG_DATA !== 'undefined' ? PANCHANG_DATA : (typeof globalThis !== 'undefined' && globalThis.PANCHANG_DATA ? globalThis.PANCHANG_DATA : (typeof window !== 'undefined' ? window.PANCHANG_DATA : null));

const Sankalpam = {
  /**
   * Approximate Panchanga elements for date
   */
  getCalendarElements(date = new Date()) {
    const data = _panchang || {
      samvatsaras: [{ en: "Viswavasu", te: "విశ్వావసు" }],
      ayanas: [{ id: "uttarayana", en: "Uttarayana", te: "ఉత్తరాయణే" }],
      ritus: [{ en: "Sharad Ritu", te: "శరద్ ఋతౌ" }],
      masas: [{ en: "Karthika", te: "కార్తీక మాసే" }],
      pakshas: [{ en: "Shukla Paksha", te: "శుక్ల పక్షే" }],
      tithis: [{ en: "Purnima", te: "పూర్ణిమ తిథౌ" }],
      vasaras: [{ en: "Bhrigu Vasara", te: "భృగువాసరే" }]
    };

    const year = date.getFullYear();
    const samvatsaraIndex = (year - 4 + 60) % 60;
    const samvatsara = data.samvatsaras[samvatsaraIndex] || data.samvatsaras[0];

    const month = date.getMonth(); // 0-11
    const isUttarayana = month >= 0 && month <= 5;
    const ayana = isUttarayana ? data.ayanas[0] : (data.ayanas[1] || data.ayanas[0]);

    const rituIndex = Math.floor(((month + 10) % 12) / 2);
    const ritu = data.ritus[rituIndex] || data.ritus[0];

    const masaIndex = (month + 10) % 12;
    const masa = data.masas[masaIndex] || data.masas[0];

    const dayOfMonth = date.getDate();
    const isShukla = dayOfMonth <= 15;
    const paksha = isShukla ? data.pakshas[0] : (data.pakshas[1] || data.pakshas[0]);

    const tithiIndex = (dayOfMonth % 15);
    const tithi = data.tithis[tithiIndex] || data.tithis[0];

    const dayOfWeek = date.getDay(); // 0 = Sun
    const vasara = data.vasaras[dayOfWeek] || data.vasaras[0];

    return { samvatsara, ayana, ritu, masa, paksha, tithi, vasara };
  },

  /**
   * Generate customized Sankalpam
   */
  generate(userProfile = {}, pujaName = "దేవతా పూజాం", lang = 'te') {
    const elements = this.getCalendarElements();
    const gotra = userProfile.gotra ? `${userProfile.gotra}స గోత్రస్య` : 'కాశ్యపస గోత్రస్య';
    const gotraTe = userProfile.gotraTe || userProfile.gotra || 'కాశ్యప';
    const gotraEn = userProfile.gotraEn || userProfile.gotra || 'Kashyapa';

    const nakshatra = userProfile.nakshatra || 'రోహిణీ';
    const nakshatraEn = userProfile.nakshatraEn || userProfile.nakshatra || 'Rohini';

    const name = userProfile.name || 'హరిష్ శర్మ';
    const nameEn = userProfile.nameEn || userProfile.name || 'Harish Sharma';

    const spousePart = userProfile.spouseName 
      ? `ధర్మపత్నీ సమేతస్య శ్రీమతః ${userProfile.spouseName} నామధేయవత్యాః`
      : 'సకుటుంబస్య';
    const spousePartEn = userProfile.spouseName 
      ? `accompanied by Dharmapatni Srimati ${userProfile.spouseName}`
      : 'along with entire family';

    // Sacred Sanskrit text
    const sanskritText = `ఓం తత్సత్! శ్రీ గోవింద గోవింద గోవింద, అద్య శ్రీ భగవతో మహాపురుషస్య విష్ణోరాజ్ఞయా ప్రవర్తమానస్య, అద్య బ్రహ్మణః ద్వితీయ పరార్థే, శ్వేతవరాహ కల్పే, వైవస్వత మన్వంతరే, కలియుగే, ప్రథమ పాదే, జంబూద్వీపే, భరతవర్షే, భరతఖండే, మేరోర్దక్షిణ దిగ్భాగే, శ్రీశైలస్య ఈశాన్య ప్రదేశే, అస్మిన్ వర్తమానే వ్యావహారిక చాంద్రమానేన, ${elements.samvatsara.te} నామ సంవత్సరే, ${elements.ayana.te}, ${elements.ritu.te}, ${elements.masa.te}, ${elements.paksha.te}, ${elements.tithi.te}, ${elements.vasara.te}, శుభ నక్షత్ర, శుభ యోగ, శుభ కరణ ఏవంగుణ విశేషణ విశిష్టాయాం శుభ తిథౌ, శ్రీమాన్ ${gotraTe} గోత్రోద్భవస్య, ${nakshatra} నక్షత్ర జాతస్య, ${name} నామధేయస్య, ${spousePart}, మమ ఆత్మనః శ్రుతి-స్మృతి-పురాణోక్త ఫలప్రాప్త్యర్థం, మమ సహకుటుంబానాం క్షేమ-స్థైర్య-వీర్య-విజయ-అభయ-ఆయురారోగ్య-ఐశ్వర్యాభివృద్ధ్యర్థం, ధర్మార్థ-కామ-మోక్ష చతుర్విధ పురుషార్థ ఫలసిద్ధ్యర్థం, శ్రీమత్ ${pujaName} కర్మ కరిష్యే ॥ తదంగ నిర్విఘ్నతా సిద్ధ్యర్థం శ్రీ మహాగణపతి పూజాం చ కరిష్యే ॥`;

    // Transliteration in English
    const transliteration = `Om Tat-Sat! Shri Govinda Govinda Govinda, Adya Shri Bhagavato Mahapurushasya Vishnor-ajnaya pravartamanasya, Adya Brahmanaah dviteeya parardhe, Shweta-varaha kalpe, Vaivaswata manwantare, Kaliyuge, prathama pade, Jambu-dweepe, Bharata-varshe, Bharata-khande, Meror-dakshina digbhage, Shri-shailasya Ishanya-pradeshe, asmin vartamane vyavaharika chandramanena, ${elements.samvatsara.en} nama samvatsare, ${elements.ayana.en}, ${elements.ritu.en}, ${elements.masa.en}, ${elements.paksha.en}, ${elements.tithi.en}, ${elements.vasara.en}, Shubha nakshatra, shubha yoga, shubha karana yuktayam shubha tithau, ${gotraEn} gotrasya, ${nakshatraEn} nakshatre jatasya, ${nameEn} namadheyasya, ${spousePartEn}, mama atmanah shruti-smriti-puranokta phala-praptyartham, kshema-sthairya-veerya-vijaya-ayurarogya-aishvaryabhivriddhy-artham, dharma-artha-kama-moksha chaturvidha purushartha siddhi-dvaram, Shri ${pujaName} karma karishye ||`;

    // Translation in Telugu
    const meaningTe = `ఓం తత్సత్! భగవంతుడైన శ్రీమహావిష్ణువు ఆజ్ఞచే నడుస్తున్న ఈ జగత్తులో, శ్వేతవరాహ కల్పంలో, వైవస్వత మన్వంతరంలో, కలియుగ ప్రథమ పాదంలో, భరతఖండంలో, ${elements.samvatsara.te} సంవత్సరంలో, ${elements.ayana.te}, ${elements.ritu.te}, ${elements.masa.te}, ${elements.paksha.te}, ${elements.tithi.te}, ${elements.vasara.te} నాడు, ${gotraTe} గోత్రంలో, ${nakshatra} నక్షత్రంలో జన్మించిన ${name} అనే నేను, నా కుటుంబ సమేతంగా సమస్త ఆయురారోగ్యాలు, ఐశ్వర్యం, విజయం, ధర్మార్థకామమోక్షాలనే చతుర్విధ పురుషార్థాల సిద్ధి కొరకు ఈ పవిత్రమైన ${pujaName}ను శ్రద్ధతో ఆచరిస్తున్నాను. ఈ పూజ నిర్విఘ్నంగా పరిసమాప్తి చెందుటకై ముందుగా మహాగణపతిని పూజిస్తున్నాను.`;

    // Translation in English
    const meaningEn = `Om Tat Sat! Under the divine command of the Supreme Lord Vishnu, in this Shweta-Varaha Kalpa, Vaivaswata Manwantara, first quarter of Kali Yuga, in the land of Bharata-varsha, in this ${elements.samvatsara.en} year, during ${elements.ayana.en}, ${elements.ritu.en}, ${elements.masa.en}, ${elements.paksha.en}, on ${elements.tithi.en}, on ${elements.vasara.en}, I, born in the lineage of ${gotraEn} Gotra, under the star ${nakshatraEn}, named ${nameEn}, ${spousePartEn}, for attaining the fruits declared in the Vedas and Puranas, for the health, stability, longevity, and spiritual abundance of my family, perform this sacred ${pujaName}! And for removing all impediments, I first worship Lord Vighneshwara!`;

    return {
      sanskritText,
      transliteration,
      meaningTe,
      meaningEn,
      elements
    };
  }
};

if (typeof window !== 'undefined') {
  window.Sankalpam = Sankalpam;
}
if (typeof globalThis !== 'undefined') {
  globalThis.Sankalpam = Sankalpam;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sankalpam;
}
