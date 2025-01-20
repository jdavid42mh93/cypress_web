# Cypress Test Automation Guide

## Herramientas requeridas
Asegúrate de tener las siguientes versiones instaladas:

Node.js: v22.13.0
npm: 11.0.0

## Notas importantes
Antes de ejecutar las pruebas, asegúrate de:

1. Crear una carpeta llamada screenshots dentro de la carpeta cypress:
```bash
cypress/screenshots
```
2. Crear una carpeta llamada reports dentro de la carpeta cypress:
```bash
cypress/reports
```

## Ejecutar pruebas y generar reportes

### Reporte en formato HTML
Para ejecutar las pruebas y generar un reporte en formato HTML, utiliza cualquiera de los siguientes comandos:
```bash
npx cypress run --reporter cypress-mochawesome-reporter
npm run testHTMLReport
```

### Reporte en formato Spec
Para ejecutar las pruebas y generar un reporte en formato Spec, utiliza cualquiera de los siguientes comandos:
```bash
npx cypress run --reporter mocha-teamcity-reporter
npm run testSpecReport
```