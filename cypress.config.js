const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ufagba",
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/separate-reports',
    overwrite: false,
    html: false,
    json: true,
    inline: true
    // timestamp: "mmddyyyy_HHMMss"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
