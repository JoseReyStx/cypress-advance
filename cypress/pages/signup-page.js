/// <reference types="Cypress" />

import loginPage from "./login-page";

class SignupPage {

    getSignupFormTitle() {
        return loginPage.getLoginFormTitle();
    }

    getTitleRadioButton(option) {
        return cy.getByData("title").its(option).find('input');
    }

    getPasswordInput() {
        return cy.getByData("password");
    }

    getDayInput() {
        return cy.getByData("days");
    }

    getDayInput() {
        return cy.getByData("days");
    }

    getMonthInput() {
        return cy.getByData("months");
    }

    getYearInput() {
        return cy.getByData("years");
    }

    getNewsletterCheckbox() {
        return cy.get('#newsletter');
    }

    getOffersCheckbox() {
        return cy.get('#optin');
    }

    getFirstNameInput() {
        return cy.getByData("first_name");
    }

    getLastNameInput() {
        return cy.getByData("last_name");
    }

    getCompanyInput() {
        return cy.getByData("company");
    }

    getAddressInput() {
        return cy.getByData("address");
    }

    getAddress2Input() {
        return cy.getByData("address2");
    }

    getCountryDropdown() {
        return cy.getByData("country");
    }

    getStateInput() {
        return cy.getByData("state");
    }

    getCityInput() {
        return cy.getByData("city");
    }

    getZipCodeInput() {
        return cy.getByData("zipcode");
    }

    getMobileNumberInput() {
        return cy.getByData("mobile_number");
    }

    getCreateAccountButton() {
        return cy.getByData("create-account");
    }

}

export default new SignupPage();