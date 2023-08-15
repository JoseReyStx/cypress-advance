class CheckOutPage {
    getTextArea() {
        return cy.get('textarea');
    }

    getPlaceOrderButton() {
        return cy.contains('place order', { matchCase: false });
    }

    typeDetails(text) {
        this.getTextArea().type(text);
    }

    clickPlaceOrder() {
        this.getPlaceOrderButton().click();
    }
}

export default new CheckOutPage();