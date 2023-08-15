class PaymentPage {
    getInputNameOnCard() {
        return cy.getByData('name-on-card');
    }

    getInputCardNumber() {
        return cy.getByData('card-number');
    }

    getInputCardCVC() {
        return cy.getByData('cvc');
    }

    getInputCardExpirationMonth() {
        return cy.getByData('expiry-month');
    }

    getInputCardExpirationYear() {
        return cy.getByData('expiry-year');
    }

    getConfirmOrderButton() {
        return cy.getByData('pay-button');
    }

    // getSuccessMessage() {
    //     return cy.get('#success_message .alert-success');
    // }

    typePaymentInformation(userData) {
        const { firstName, lastName, payment } = userData;
        const { cardNumber, cvc, expirationMonth, expirationYear } = payment;
        this.getInputNameOnCard().type(firstName + ' ' + lastName);
        this.getInputCardNumber().type(cardNumber);
        this.getInputCardCVC().type(cvc);
        this.getInputCardExpirationMonth().type(expirationMonth);
        this.getInputCardExpirationYear().type(expirationYear);
    }

    clickConfirmOrder() {
        this.getConfirmOrderButton().click();
    }

    // assertSuccessMessage() {
    //     this.getSuccessMessage().should('have.text', 'Your order has been placed successfully!');
    // }
}

export default new PaymentPage();