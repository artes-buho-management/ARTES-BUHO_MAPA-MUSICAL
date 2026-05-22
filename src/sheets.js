/**
 * Conexion con Google Sheets API via hub ARTES-BUHO_API-GOOGLE
 * Hoja de seguimiento del curso MAPA Musical
 */

const hub = require('artes-buho-api-google');

const SHEET_ID = process.env.MAPA_MUSICAL_SHEET_ID;

async function getSheetData(range = 'A1:Z1000') {
  if (!SHEET_ID) throw new Error('MAPA_MUSICAL_SHEET_ID no configurado en .env');
  const sheets = hub.clients.sheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  });
  return res.data.values || [];
}

async function updateSheetData(range, values) {
  if (!SHEET_ID) throw new Error('MAPA_MUSICAL_SHEET_ID no configurado en .env');
  const sheets = hub.clients.sheets();
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
  return res.data;
}

async function getSheetMetadata() {
  if (!SHEET_ID) throw new Error('MAPA_MUSICAL_SHEET_ID no configurado en .env');
  const sheets = hub.clients.sheets();
  const res = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  return res.data;
}

module.exports = { getSheetData, updateSheetData, getSheetMetadata, SHEET_ID };
