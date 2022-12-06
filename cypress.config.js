const { defineConfig } = require("cypress");

/**
 * @see https://docs.cypress.io/guides/references/configuration
 */
module.exports = defineConfig({
  e2e: {
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
