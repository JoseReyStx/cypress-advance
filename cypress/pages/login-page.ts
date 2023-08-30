/// <reference types="Cypress" />

import { User } from "cypress/interfaces/user";

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
        return cy.getByData('signup-name');
    }

    getEmailSignupInput() {
        return cy.getByData('signup-email');
    }

    getEmailLoginInput() {
        return cy.getByData('login-email');
    }

    getPasswordInput() {
        return cy.getByData('login-password');
    }

    getLoginButton() {
        return cy.getByData('login-button');
    }

    getSignUpButton() {
        return cy.getByData('signup-button');
    }

    getErrorLoginLabel() {
        return this.getLoginForm().find('p');
    }

    getErrorSignupLabel() {
        return this.getSignUpForm().find('p');
    }

    assertSignUpFormTitle() {
        this.getSignUpFormTitle().should('have.text', 'New User Signup!');
    }

    assertLoginFormTitle() {
        this.getLoginFormTitle().should('have.text', 'Login to your account');
    }

    fillSignUpPreForm(userData: User) {
        const { username, email } = userData;
        this.getNameInput().type(username);
        this.getEmailSignupInput().type(email);
    }

    fillLoginForm(userData: User, wrong = false) {
        const { email, password, wrongPassword } = userData;
        if (wrong) {
            this.getEmailLoginInput().type(email);
            this.getPasswordInput().type(wrongPassword);
        } else {
            this.getEmailLoginInput().type(email);
            this.getPasswordInput().type(password);
        }
    }

    clickSubmitButton() {
        this.getSignUpButton().click();
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

    assertExistenUserErrorLabel() {
        this.getErrorSignupLabel()
            .should('be.visible')
            .and('have.text', 'Email Address already exist!');
    }

    assertCredentialsLabel() {
        this.getErrorLoginLabel()
            .should('be.visible')
            .and('have.text', 'Your email or password is incorrect!');
    }
}

export default new LoginPage();
