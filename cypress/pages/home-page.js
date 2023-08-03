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

}

export default new HomePage();