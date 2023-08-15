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

    assertProductsTitle() {
        this.getTitle().should('be.visible');
    }

    assertProductList() {
        this.getProductList().should('be.visible');
    }

    clickProduct() {
        this.getProductItem().contains('View Product').first().click();
    }

    clickAddToCart(length) {
        // this.getProductItem().first().trigger('mouseover');
        // this.getProductItem().first().invoke('show');
        for (let i = 0; i < length; i++) {
            this.getProductItem().eq(i).find('.product-overlay a').click({ force: true });
            if (i + 1 == length) {
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

    assertProductSearch(product) {
        this.getProductItem().each(element => {
            cy.wrap(element).contains(product, { matchCase: false });
        });
    }

}

export default new productsPage()