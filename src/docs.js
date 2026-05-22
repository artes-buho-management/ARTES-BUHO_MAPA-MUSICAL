/**
 * Conexion con Google Docs API via hub ARTES-BUHO_API-GOOGLE
 * Lee el documento fuente del curso MAPA Musical
 */

const hub = require('artes-buho-api-google');

const DOC_ID = process.env.MAPA_MUSICAL_DOC_ID || 'REPLACE_WITH_SHEET_ID';

async function getDocContent() {
  const docs = hub.clients.docs();
  const res = await docs.documents.get({ documentId: DOC_ID });
  return res.data;
}

async function getDocTitle() {
  const doc = await getDocContent();
  return doc.title;
}

module.exports = { getDocContent, getDocTitle, DOC_ID };
