/// <reference types="Cypress" />

class GenericPage {

    getAccountCreatedTitle() {
        return cy.getByData('account-created');
    }

    getAccountDeletedTitle() {
        return cy.getByData('account-deleted');
    }

    getContinueButton() {
        return cy.getByData("continue-button");
    }

}

export default new GenericPage();