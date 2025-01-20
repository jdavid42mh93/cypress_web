# Cypress Test Automation Guide

## Ejecutar pruebas y generar reportes

### Reporte en HTML
Para ejecutar las pruebas y generar un reporte en formato HTML, utiliza los siguientes comandos:

```bash
npx cypress run --reporter cypress-mochawesome-reporter
npm run testHTMLReport


npx cypress run --reporter mocha-teamcity-reporter
npm run testSpecReport

Notas importantes
Antes de ejecutar las pruebas, asegúrate de:

Crear una carpeta llamada screenshots dentro de la carpeta cypress:
cypress/screenshots
Crear una carpeta llamada reports dentro de la carpeta cypress:
cypress/reports

Herramientas requeridas
Asegúrate de tener las siguientes versiones instaladas:

Node.js: v22.13.0
npm: 11.0.0