/**
 * Master Pujas Database
 * Aggregates Life Phase Samskaras, Vratams & Festivals, Dosha Pariharams, and Daily Pujas.
 */

const _life = typeof PUJAS_LIFE_PHASE !== 'undefined' ? PUJAS_LIFE_PHASE : (typeof globalThis !== 'undefined' && globalThis.PUJAS_LIFE_PHASE ? globalThis.PUJAS_LIFE_PHASE : (typeof window !== 'undefined' ? window.PUJAS_LIFE_PHASE : []));
const _vratams = typeof PUJAS_VRATAMS !== 'undefined' ? PUJAS_VRATAMS : (typeof globalThis !== 'undefined' && globalThis.PUJAS_VRATAMS ? globalThis.PUJAS_VRATAMS : (typeof window !== 'undefined' ? window.PUJAS_VRATAMS : []));
const _pariharams = typeof PUJAS_PARIHARAMS !== 'undefined' ? PUJAS_PARIHARAMS : (typeof globalThis !== 'undefined' && globalThis.PUJAS_PARIHARAMS ? globalThis.PUJAS_PARIHARAMS : (typeof window !== 'undefined' ? window.PUJAS_PARIHARAMS : []));
const _daily = typeof PUJAS_DAILY !== 'undefined' ? PUJAS_DAILY : (typeof globalThis !== 'undefined' && globalThis.PUJAS_DAILY ? globalThis.PUJAS_DAILY : (typeof window !== 'undefined' ? window.PUJAS_DAILY : []));

const PUJAS_DATA = [
  ..._life,
  ..._vratams,
  ..._pariharams,
  ..._daily
];

if (typeof window !== 'undefined') {
  window.PUJAS_DATA = PUJAS_DATA;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PUJAS_DATA = PUJAS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUJAS_DATA;
}
