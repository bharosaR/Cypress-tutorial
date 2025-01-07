// cypress.config.js
const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, Config) {
      //implement node event listeners here
    },
  },
});
