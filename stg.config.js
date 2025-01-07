const { defineConfig } = require("Cypress");
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 900,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      //Add custom plugin s if needed
    },
  },
  env: {
    environment: "staging",
  },
});
