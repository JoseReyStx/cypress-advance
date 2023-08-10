/// <reference types="Cypress" />

class GenericPage {

    getTitle(account) {
        return cy.getByData(`account-${account}`);
    }

    getContinueButton() {
        return cy.getByData("continue-button");
    }

    assertTitle(account) {
        this.getTitle(account)
        .should('be.visible')
        .contains(/^account\s\w+/gmi);
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }

}

export default new GenericPage();