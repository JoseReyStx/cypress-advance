import { User } from 'cypress/interfaces/user';
import genericPage from 'pages/generic-page';

class productDetailsPage {
    getProductInfo() {
        return cy.get('.product-information');
    }

    getQuantityInput() {
        return cy.get('input[name="quantity"]');
    }

    getAddToCartButton() {
        return cy.contains('add to cart', { matchCase: false });
    }

    getReviewForm() {
        return cy.get('#review-form');
    }

    assertProductDetails() {
        const price = RegExp(/rs.\s\d+/i);
        this.getProductInfo().find('h2').should('be.visible');
        this.getProductInfo()
            .contains('category', { matchCase: false })
            .should('be.visible');
        this.getProductInfo()
            .contains(price)
            .should('be.visible');
        this.getProductInfo()
            .contains('Availability:', { matchCase: false })
            .should('be.visible');
        this.getProductInfo()
            .contains('Condition:', { matchCase: false })
            .should('be.visible');
        this.getProductInfo()
            .contains('Brand:', { matchCase: false })
            .should('be.visible');
    }

    typeQuantity(quantity: string) {
        this.getQuantityInput().clear().type(quantity);
    }

    clickAddToCartButton() {
        this.getAddToCartButton().click();
    }

    clickViewCart() {
        genericPage.getProductModal().find('[href="/view_cart"]').click();
    }

    fillReviewForm(userData: User) {
        const { firstName, email, review } = userData;
        this.getReviewForm().find('input#name').type(firstName);
        this.getReviewForm().find('input#email').type(email);
        this.getReviewForm().find('textarea#review').type(review);
    }

    clickSubmitReview() {
        this.getReviewForm().find('[type="submit"]').click();
    }

    assertReviewConfirmation() {
        this.getReviewForm()
            .contains('Thank you for your review.')
            .should('be.visible');
    }
}

export default new productDetailsPage();
