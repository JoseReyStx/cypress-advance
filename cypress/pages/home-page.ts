/// <reference types="Cypress" />

import { User } from 'cypress/interfaces/user';

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

    getLoggedInAsMenuItem(username: string) {
        return this.getNavBar().contains(`Logged in as ${username}`, {
            matchCase: false,
        });
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

    clickNavBarItem(item: string) {
        this.getNavBar().contains(item).click();
    }

    assertUserLoggedInMenuItem(userData: User) {
        const { username } = userData;
        this.getLoggedInAsMenuItem(username)
            .should('be.visible')
            .and('contain.text', `Logged in as ${username}`);
    }

    assertFooterTitle() {
        this.getFooterWidget().find('h2').should('have.text', 'Subscription');
    }

    assertSubscription(userData: User) {
        const { email } = userData;
        this.getFooterWidget().find('input[type="email"]').type(email);
        this.getFooterWidget().find('[type="submit"]').click();
        this.getFooterWidget()
            .find('.alert-success')
            .should('have.text', 'You have been successfully subscribed!');
    }

    assertAndClickCategory(category: string) {
        const categoryRegEx = new RegExp(`^.${category}`, 'gmi');
        this.getSideBar().find('[data-toggle="collapse"]').contains(categoryRegEx).click();
    }

    clickSubCategory(category: string) {
        const categoryRegEx = new RegExp(`^.${category}`, 'gmi');
        this.getSideBar()
            .find('[data-toggle="collapse"]')
            .contains(categoryRegEx)
            .parents('.panel-default')
            .find('.panel-body li > a')
            .first()
            .click();
    }
}

export default new HomePage();
