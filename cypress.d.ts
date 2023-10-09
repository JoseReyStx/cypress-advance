declare namespace Cypress {
    interface Chainable {
        getByData(selector: string, timeout?: number): Chainable<JQuery<HTMLElement>>;
    }
}
declare module 'cypress-mochawesome-reporter/register';
declare module 'cypress-mochawesome-reporter/plugin';
