class viewCartPage {

    getCartTable() {
        return cy.get('#cart_info_table tbody');
    }

    getCheckOutButton() {
        return cy.get('a.check_out');
    }

    getRemoveButton() {
        return cy.get('.cart_quantity_delete');
    }

    assertProductsInCart(quantity) {
        this.getCartTable().find('tr').should('have.length', quantity).each((row) => {
            cy.wrap(row).find('.cart_price').should('exist');
            cy.wrap(row).find('.cart_quantity').should('exist');
            cy.wrap(row).find('.cart_total').should('exist');
        });
    }

    assertProductQuantity(quantity) {
        this.getCartTable().find('tr').first().find('.cart_quantity').should(($element) => {
            expect($element).to.contain(quantity);
        });
    }

    clickCheckOutButton() {
        this.getCheckOutButton().click();
    }

    removeProduct(){
        this.getRemoveButton().click();
    }
}

export default new viewCartPage();