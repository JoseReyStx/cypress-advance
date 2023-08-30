import { defineConfig } from 'cypress';

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        autoOpen: true,
        timestamp: true
    },
    retries: 2,
    e2e: {
        baseUrl: 'https://www.automationexercise.com',
        // watchForFileChanges: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
