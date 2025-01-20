// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores específicos por mensaje o tipo
    if (err.message.includes('Error específico') || err.name === 'TypeError') {
      return false; // Evita que Cypress falle la prueba
    }
    
    // Opcional: ignora todos los errores (no recomendado para la mayoría de los casos)
    // return false;
  
    // Permitir que otros errores interrumpan la ejecución
  });