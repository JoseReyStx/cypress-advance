/// <reference types="Cypress" />

import { User } from 'cypress/interfaces/user';

class ContactPage {
    getFormTitle() {
        return cy.get('.contact-form').find('h2.title');
    }

    getNameInput() {
        return cy.getByData('name');
    }

    getEmailInput() {
        return cy.getByData('email');
    }

    getSubjectInput() {
        return cy.getByData('subject');
    }

    getMessageInput() {
        return cy.getByData('message');
    }

    getChooseFileButton() {
        return cy.get('[type="file"].form-control');
    }

    getSubmitButton() {
        return cy.getByData('submit-button');
    }

    getSuccessLabel() {
        return cy.get('.status.alert-success');
    }

    assertFormTitle() {
        this.getFormTitle().should('have.text', 'Get In Touch');
    }

    fillContactUsForm(userData: User) {
        const { username, email, contact } = userData;
        const { subject, message, pathFile } = contact;

        this.getNameInput().type(username);
        this.getEmailInput().type(email);
        this.getSubjectInput().type(subject);
        this.getMessageInput().type(message);
        this.getChooseFileButton().selectFile(pathFile);
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    assertLabel(message: string) {
        this.getSuccessLabel().should('be.visible').and('have.text', message);
    }
}

export default new ContactPage();
