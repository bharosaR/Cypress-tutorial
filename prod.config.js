const { defineConfig } = require("Cypress");
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 780,
    viewportHeight: 700,
    setupNodeEvents(on, config) {
      //Add custom plugins if needed
    },
  },
  env: {
    environment: "production",
  },
});
