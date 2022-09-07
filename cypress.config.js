const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    "reporter" : "mochawesome",
    "charts" :true,
    "overwrite" : false,
    "html" : false,
    "json" : true,
    "reportsDir" : "cypress/reports",

    setupNodeEvents(on, config) {
      
    },
  },
});
