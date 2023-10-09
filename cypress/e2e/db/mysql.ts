/// <reference types="cypress"/>

import { ConnectionConfig } from 'mysql2';
import { Country } from 'tables/country';
import { City } from 'tables/city';
import { CountryLanguage } from 'tables/countrylanguage';

describe('Testing db in local env', () => {
    const { host, user, password, database }: ConnectionConfig = Cypress.env('local');
    const config = {
        host: host,
        user: user,
        password: password,
        database: database,
    };

    it('my first test in cypress with databases', () => {
        const query = 'SELECT * FROM country WHERE name = "Mexico";';
        cy.task('queryDB', { config, query }).then((result) => {
            const resultset = result as Country[];
            console.log(resultset[0]);
            expect(resultset[0].Population).to.equal(98881000);
            expect(resultset[0].Name).to.equal('Mexico');
        });
    });

    it('Testing city table', () => {
        const query = 'SELECT * FROM city WHERE CountryCode = "MEX"';
        cy.task('queryDB', { config, query }).then((result) => {
            const resultset = result as City[];
            expect(resultset.length).to.be.equal(173);
        });
    });

    it('Testing countrylanguage table', () => {
        const query = 'SELECT * FROM countrylanguage WHERE Language = "English"';
        cy.task('queryDB', { config, query }).then((result) => {
            const resultset = result as CountryLanguage[];
            expect(resultset.length).to.be.equal(60);
        });
    });
});
