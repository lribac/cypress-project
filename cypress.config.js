const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here
    },
  },
  env: {
    envExample: process.env.ENV_EXAMPLE
  }
});
