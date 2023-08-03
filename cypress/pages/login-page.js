/// <reference types="Cypress" />

class LoginPage {

    getSignUpForm() {
        return cy.get('.signup-form');
    }

    getSignUpFormTitle() {
        return this.getSignUpForm().find('h2:first');
    }

    getLoginForm() {
        return cy.get('.login-form');
    }

    getLoginFormTitle() {
        return this.getLoginForm().find('h2:first');
    }

    getNameInput() {
        return cy.getByData("signup-name");
    }

    getEmailSignupInput() {
        return cy.getByData("signup-email");
    }

    getEmailLoginInput() {
        return cy.getByData("login-email");
    }
    
    getPasswordInput() {
        return cy.getByData("login-password");
    }

    getLoginButton() {
        return cy.getByData("login-button");
    }

    getSignUpButton() {
        return cy.getByData("signup-button");
    }

    getErrorLoginLabel() {
        return this.getLoginForm().find('p');
    }

    getErrorSignupLabel() {
        return this.getSignUpForm().find('p');
    }

}

export default new LoginPage();