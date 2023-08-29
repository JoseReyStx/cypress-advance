/// <reference types="Cypress" />

import { User } from 'cypress/interfaces/user';
import loginPage from 'pages/login-page';

class SignupPage {
    getSignupFormTitle() {
        return loginPage.getLoginFormTitle();
    }

    getTitleRadioButton(title: string) {
        return cy.getByData('title').find(`input[value="${title}"]`);
    }

    getPasswordInput() {
        return cy.getByData('password');
    }

    getDayInput() {
        return cy.getByData('days');
    }

    getMonthInput() {
        return cy.getByData('months');
    }

    getYearInput() {
        return cy.getByData('years');
    }

    getNewsletterCheckbox() {
        return cy.get('#newsletter');
    }

    getOffersCheckbox() {
        return cy.get('#optin');
    }

    getFirstNameInput() {
        return cy.getByData('first_name');
    }

    getLastNameInput() {
        return cy.getByData('last_name');
    }

    getCompanyInput() {
        return cy.getByData('company');
    }

    getAddressInput() {
        return cy.getByData('address');
    }

    getAddress2Input() {
        return cy.getByData('address2');
    }

    getCountryDropdown() {
        return cy.getByData('country');
    }

    getStateInput() {
        return cy.getByData('state');
    }

    getCityInput() {
        return cy.getByData('city');
    }

    getZipCodeInput() {
        return cy.getByData('zipcode');
    }

    getMobileNumberInput() {
        return cy.getByData('mobile_number');
    }

    getCreateAccountButton() {
        return cy.getByData('create-account');
    }

    assertSignUpFormTitle() {
        this.getSignupFormTitle()
            .should('be.visible')
            .and(($title) => {
                expect($title.text).to.contain(/Enter Account Information/gim);
            });
    }

    fillSignUpForm(userData: User) {
        const {
            title,
            password,
            birthday,
            firstName,
            lastName,
            company,
            address,
            address2,
            country,
            state,
            city,
            zipCode,
            mobileNumber,
        } = userData;
        const { day, month, year } = birthday;
        this.getTitleRadioButton(title).click();
        this.getPasswordInput().type(password);
        this.getDayInput().select(day);
        this.getMonthInput().select(month);
        this.getYearInput().select(year);
        this.getNewsletterCheckbox().check();
        this.getOffersCheckbox().check();
        this.getFirstNameInput().type(firstName);
        this.getLastNameInput().type(lastName);
        this.getCompanyInput().type(company);
        this.getAddressInput().type(address);
        this.getAddress2Input().type(address2);
        this.getCountryDropdown().select(country);
        this.getStateInput().type(state);
        this.getCityInput().type(city);
        this.getZipCodeInput().type(zipCode);
        this.getMobileNumberInput().type(mobileNumber);
    }

    clickCreateAccountButton() {
        this.getCreateAccountButton().click();
    }
}

export default new SignupPage();
