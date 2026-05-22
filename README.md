# ARTES-BUHO_MAPA-MUSICAL

Proyecto del ecosistema ARTES BUHO para gestionar el curso **M.A.P.A. Musical**.

## Que es MAPA Musical

Formacion online de la industria musical creada por Roman (Artes Buho).
Estructura modular con contenido bloqueado progresivamente.

### Modulos

| Modulo | Nombre | Contenido principal |
|--------|--------|-------------------|
| MOD 0 | Ecosistema | Onboarding: como funciona, Notion, comunidad, wiki |
| MOD 1 | Tu Nueva Oportunidad | Mentalidad, paradigmas, ikigai, mecanismo unico, manifiesto de vida |
| MOD 2 | El Tablero de Juego | Mascaras, CRM del arquitecto, camino artesano vs industria, poliamor estrategico |
| MOD 3 | M.F Artesano Deluxe | Facturacion para artesanos: clases, directos, produccion |
| MOD 3.2 | M.F Industria Musical | Facturacion via industria: booking, management, sellos |
| MOD 4 | Venta, Publi y Marketing | Estrategias de venta, publicidad y marketing musical |

## Documento fuente

Google Docs: `1f_TLk2L5w5NHx5YsJhqkUq3QE1xAW2_NKJ4Y_wiUWcs`

URL: https://docs.google.com/document/d/1f_TLk2L5w5NHx5YsJhqkUq3QE1xAW2_NKJ4Y_wiUWcs/edit

## Conexion con ARTES-BUHO_API-GOOGLE

Este proyecto consume APIs de Google a traves del hub centralizado:

```
C:\Users\elrub\Desktop\CARPETA CODEX\01_PROYECTOS\ARTES-BUHO_API-GOOGLE
```

APIs utilizadas:
- **Google Sheets API v4** — Hoja de seguimiento del curso
- **Google Docs API v1** — Lectura del documento fuente del curso
- **Google Drive API v3** — Gestion de archivos y recursos

Cuenta: `booking@artesbuhomanagement.com`

## Google Sheet del proyecto

Hoja de calculo vinculada para seguimiento, metricas y gestion del curso.

- **ID:** `1AwdMAe276WzG63-pZcsarSJ92ALiYu88pnNaOVTNqcw`
- **URL:** https://docs.google.com/spreadsheets/d/REPLACE_WITH_SHEET_ID/edit

## Estructura del proyecto

```
ARTES-BUHO_MAPA-MUSICAL/
├── README.md
├── CLAUDE.md
├── package.json
├── .env.example
├── .gitignore
├── config/
├── docs/
├── scripts/
├── src/
│   ├── index.js
│   ├── sheets.js
│   └── docs.js
└── tests/
```

## Arranque

```bash
npm install
cp .env.example .env
# Configurar variables en .env
npm run test:connection
```
