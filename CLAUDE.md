# CLAUDE.md - ARTES-BUHO_MAPA-MUSICAL

## Que es este proyecto

Gestion del curso M.A.P.A. Musical de Artes Buho.
Conectado al hub central ARTES-BUHO_API-GOOGLE.

## Documento fuente

- Google Docs ID: `1f_TLk2L5w5NHx5YsJhqkUq3QE1xAW2_NKJ4Y_wiUWcs`
- Contiene todo el contenido del curso (MOD 0 a MOD 4)
- ~9000 lineas, ~760KB de texto

## Conexiones Google

Este proyecto depende del hub:
`C:\Users\elrub\Desktop\CARPETA CODEX\01_PROYECTOS\ARTES-BUHO_API-GOOGLE`

APIs que consume:
- Sheets v4 (seguimiento curso)
- Docs v1 (documento fuente)
- Drive v3 (recursos)

Para conectar: `require('../../ARTES-BUHO_API-GOOGLE/src')`

## Reglas de trabajo

1. Responder en espanol simple.
2. No modificar el documento fuente de Google Docs sin confirmacion.
3. La hoja de Sheets es el centro operativo del proyecto.
4. Cualquier script que toque APIs debe usar el hub central, NO credenciales propias.
5. Cuenta Google: booking@artesbuhomanagement.com
