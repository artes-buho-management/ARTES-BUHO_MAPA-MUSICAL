/**
 * ARTES-BUHO_MAPA-MUSICAL
 * Punto de entrada principal
 */

const hub = require('artes-buho-api-google');
const { getDocContent } = require('./docs');
const { getSheetData, updateSheetData } = require('./sheets');

module.exports = {
  hub,
  getDocContent,
  getSheetData,
  updateSheetData,
};
