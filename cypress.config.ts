import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';
import { queryTestDB } from 'cypress/utils/db-connection';

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        timestamp: true,
    },
    retries: 2,
    e2e: {
        baseUrl: 'https://www.automationexercise.com',
        // watchForFileChanges: false,
        setupNodeEvents(on) {
            // implement node event listeners here
            on('task', {
                queryDB({ config, query }) {
                    return queryTestDB(config, query);
                },
            });
            mochawesome(on);
        },
    },
});
