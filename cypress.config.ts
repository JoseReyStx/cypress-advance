import { defineConfig } from 'cypress';

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.automationexercise.com',
        // watchForFileChanges: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
