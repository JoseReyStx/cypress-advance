/// <reference types="Cypress" />

class HomePage {

    getNavBar() {
        return cy.get('.navbar-nav');
    }

    getHomeMenuItem() {
        return this.getNavBar().find('a[href="/"]');
    }

    getLoginSignUpMenuItem() {
        return this.getNavBar().find('a[href="/login"]');
    }

    getLogoutMenuItem() {
        return this.getNavBar().find('a[href="/logout"]');
    }

    getLoggedInAsMenuItem() {
        return this.getNavBar().find('li:last');
    }

    getContactUsMenuItem() {
        return this.getNavBar().find('a[href="/contact_us"]');
    }

    getDeleteAccountMenuItem() {
        return this.getNavBar().find('a[href="/delete_account"]');
    }

    getFooterWidget() {
        return cy.get('.footer-widget');
    }

    getSideBar() {
        return cy.get('.left-sidebar');
    }

    clickNavBarItem(item) {
        this.getNavBar().contains(item).click();
    }

    assertUserLoggedInMenuItem(userData) {
        const { username } = userData;
        this.getLoggedInAsMenuItem().should('be.visible')
            .and('contain.text', `Logged in as ${username}`);
    }

    assertFooterTitle() {
        this.getFooterWidget().find('h2').should('have.text', 'Subscription');
    }

    assertSubscription(userData) {
        const { email } = userData;
        this.getFooterWidget().find('input[type="email"]').type(email);
        this.getFooterWidget().find('[type="submit"]').click();
        this.getFooterWidget().find('.alert-success').should('have.text', 'You have been successfully subscribed!');
    }

    assertAndClickCategory(category) {
        const re = new RegExp(`^.${category}`, 'gmi');
        this.getSideBar().find('[data-toggle="collapse"]').contains(re).click();
    }

    clickSubCategory(category) {
        const re = new RegExp(`^.${category}`, 'gmi');
        this.getSideBar().find('[data-toggle="collapse"]').contains(re).parents('.panel-default').find('.panel-body li > a').first().click();
    }

}

export default new HomePage();