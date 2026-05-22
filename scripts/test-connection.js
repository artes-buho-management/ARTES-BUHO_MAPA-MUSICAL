/**
 * Verifica la conexion con Google APIs via hub
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

async function testConnection() {
  console.log('=== Test conexion ARTES-BUHO_MAPA-MUSICAL ===\n');

  try {
    const hub = require('artes-buho-api-google');
    console.log('[OK] Hub ARTES-BUHO_API-GOOGLE cargado');

    // Test Docs API
    const { getDocTitle, DOC_ID } = require('../src/docs');
    console.log(`[..] Probando Google Docs API (doc: ${DOC_ID})...`);
    const title = await getDocTitle();
    console.log(`[OK] Documento: "${title}"`);

    // Test Sheets API
    const SHEET_ID = process.env.MAPA_MUSICAL_SHEET_ID;
    if (SHEET_ID) {
      const { getSheetMetadata } = require('../src/sheets');
      console.log(`[..] Probando Google Sheets API (sheet: ${SHEET_ID})...`);
      const meta = await getSheetMetadata();
      console.log(`[OK] Hoja: "${meta.properties.title}"`);
    } else {
      console.log('[!!] MAPA_MUSICAL_SHEET_ID no configurado — Sheets no testeado');
    }

    console.log('\n=== Conexion verificada ===');
  } catch (err) {
    console.error(`[ERROR] ${err.message}`);
    process.exit(1);
  }
}

testConnection();
