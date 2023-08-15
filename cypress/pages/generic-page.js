/// <reference types="Cypress" />

class GenericPage {

    getTitle(account) {
        return cy.getByData(`account-${account}`);
    }

    getContinueButton() {
        return cy.getByData("continue-button");
    }

    getProductModal() {
        return cy.get('.modal-content');
        // return cy.get('#cartModal');
    }

    getSuccessMessage() {
        return cy.contains('Congratulations! Your order has been confirmed!', { matchCase: false });
    }

    assertTitle(account) {
        this.getTitle(account)
            .should('be.visible')
            .contains(/^account\s\w+/gmi);
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }

    clickRegisterLoginModal() {
        this.getProductModal().find('a').contains('Register / Login', { matchCase: false }).click();
    }

    clickDownloadInvoice() {
        // workaround to prevent page load waiting when downloading a file 
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            });
            cy.contains('Download Invoice').click();
        })
    }

}

export default new GenericPage();