import genericPage from "./generic-page";

class productsPage {
    getProductList() {
        return cy.get('.features_items');
    }

    getProductItem() {
        return cy.get('.product-image-wrapper');
    }

    getSearchProductInput() {
        return cy.get('#search_product');
    }

    getSearchButton() {
        return cy.get('#submit_search');
    }

    getTitle() {
        return cy.get('h2.title');
    }

    clickProduct(name) {
        // this.getProductItem().contains('View Product').first().click();
        this.getProductItem().contains(name).parents('.product-image-wrapper').contains('View Product').click();
    }

    clickAddToCart(productQuantity) {
        // this.getProductItem().first().trigger('mouseover');
        // this.getProductItem().first().invoke('show');
        for (let product = 0; product < productQuantity; product++) {
            this.getProductItem().eq(product).find('.product-overlay a').click({ force: true });
            if (product + 1 == productQuantity) {
                genericPage.getProductModal().find('[href="/view_cart"]').click();
            } else {
                genericPage.getProductModal().contains('continue shopping', { matchCase: false }).click();
            }
        }
    }

    searchProduct(product) {
        this.getSearchProductInput().type(product);
        this.getSearchButton().click();
    }

    assertProductsTitle() {
        this.getTitle().should('be.visible');
    }

    assertProductList() {
        this.getProductList().should('be.visible');
    }

    assertProductSearch(product) {
        this.getProductItem().each(element => {
            cy.wrap(element).contains(product, { matchCase: false });
        });
    }

}

export default new productsPage()