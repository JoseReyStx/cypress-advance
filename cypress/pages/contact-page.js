/// <reference types="Cypress" />

class ContactPage {

    getFormTitle() {
        return cy.get('.contact-form').find('h2.title');
    }

    getNameInput(){
        return cy.getByData('name');
    }

    getEmailInput(){
        return cy.getByData('email');
    }

    getSubjectInput(){
        return cy.getByData('subject');
    }

    getMessageInput(){
        return cy.getByData('message');
    }
    
    getChooseFileButton(){
        return cy.get('[type="file"].form-control');
    }

    getSubmitButton(){
        return cy.getByData('submit-button');
    }

    getSuccessLabel(){
        return cy.get('.status.alert-success');
    }

}

export default new ContactPage();