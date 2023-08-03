import genericPage from "../../pages/generic-page";
import homePage from "../../pages/home-page";
import loginPage from "../../pages/login-page";
import signupPage from "../../pages/signup-page";


const username = Cypress.env('username');
const email = Cypress.env('email');
const password = Cypress.env('password');
const wrongPassword = Cypress.env('wrongPassword');
const { day, month, year } = Cypress.env('birthday');
const firstName = Cypress.env('firstName');
const lastName = Cypress.env('lastName');
const company = Cypress.env('company');
const address = Cypress.env('address');
const address2 = Cypress.env('address2');
const country = Cypress.env('country');
const state = Cypress.env('state');
const city = Cypress.env('city');
const zipCode = Cypress.env('zipCode');
const mobileNumber = Cypress.env('mobileNumber');

describe("Tests cases for register and login user feature", () => {

    beforeEach("Visit main page", () => {
        cy.visit("/");
    });

    it("Register user and delete it", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getSignUpFormTitle()
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        loginPage.getNameInput().type(username);
        loginPage.getEmailSignupInput().type(email);
        loginPage.getSignUpButton().click();
        signupPage.getSignupFormTitle()
            .should('be.visible')
            .contains('Enter Account Information', { matchCase: false });
        signupPage.getTitleRadioButton(0).click();
        signupPage.getPasswordInput().type(password);
        signupPage.getDayInput().select(day);
        signupPage.getMonthInput().select(month);
        signupPage.getYearInput().select(year);
        signupPage.getNewsletterCheckbox().click();
        signupPage.getOffersCheckbox().click();
        signupPage.getFirstNameInput().type(firstName);
        signupPage.getLastNameInput().type(lastName);
        signupPage.getCompanyInput().type(company);
        signupPage.getAddressInput().type(address);
        signupPage.getAddress2Input().type(address2);
        signupPage.getCountryDropdown().select(country);
        signupPage.getStateInput().type(state);
        signupPage.getCityInput().type(city);
        signupPage.getZipCodeInput().type(zipCode);
        signupPage.getMobileNumberInput().type(mobileNumber);
        signupPage.getCreateAccountButton().click();
        genericPage.getAccountCreatedTitle()
            .should('be.visible')
            .contains(/^account\s\w+/gmi);
        genericPage.getContinueButton().click();
        homePage.getLoggedInAsMenuItem()
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        homePage.getDeleteAccountMenuItem().click();
        genericPage.getAccountDeletedTitle()
            .should('be.visible')
            .contains(/^account\s\w+/gmi);
    });

    it("Register user without deleting account", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getSignUpFormTitle()
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        loginPage.getNameInput().type(username);
        loginPage.getEmailSignupInput().type(email);
        loginPage.getSignUpButton().click();
        signupPage.getSignupFormTitle()
            .should('be.visible')
            .contains('Enter Account Information', { matchCase: false });
        signupPage.getTitleRadioButton(0).click();
        signupPage.getPasswordInput().type(password);
        signupPage.getDayInput().select(day);
        signupPage.getMonthInput().select(month);
        signupPage.getYearInput().select(year);
        signupPage.getNewsletterCheckbox().click();
        signupPage.getOffersCheckbox().click();
        signupPage.getFirstNameInput().type(firstName);
        signupPage.getLastNameInput().type(lastName);
        signupPage.getCompanyInput().type(company);
        signupPage.getAddressInput().type(address);
        signupPage.getAddress2Input().type(address2);
        signupPage.getCountryDropdown().select(country);
        signupPage.getStateInput().type(state);
        signupPage.getCityInput().type(city);
        signupPage.getZipCodeInput().type(zipCode);
        signupPage.getMobileNumberInput().type(mobileNumber);
        signupPage.getCreateAccountButton().click();
        genericPage.getAccountCreatedTitle()
            .should('be.visible')
            .contains(/^account\s\w+/gmi);
    });

    it("Register user with existing email", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getSignUpFormTitle()
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        loginPage.getNameInput().type(username);
        loginPage.getEmailSignupInput().type(email);
        loginPage.getSignUpButton().click();
        loginPage.getErrorSignupLabel()
            .should('be.visible')
            .and('have.text', 'Email Address already exist!');
    });

    it("Logout user", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getLoginFormTitle()
            .should('be.visible')
            .and('have.text', 'Login to your account');
        loginPage.getEmailLoginInput().type(email);
        loginPage.getPasswordInput().type(password);
        loginPage.getLoginButton().click();
        homePage.getLoggedInAsMenuItem()
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        homePage.getLogoutMenuItem().click();
        cy.location('pathname', '/login');
    });

    it("Login user with correct email and password and delete it", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getLoginFormTitle()
            .should('be.visible')
            .and('have.text', 'Login to your account');
        loginPage.getEmailLoginInput().type(email);
        loginPage.getPasswordInput().type(password);
        loginPage.getLoginButton().click();
        homePage.getLoggedInAsMenuItem()
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        homePage.getDeleteAccountMenuItem().click();
        genericPage.getAccountDeletedTitle()
            .should('be.visible')
            .contains(/ACCOUNT DELETED!/i);
    });

    it("Login user with incorrect email and password", () => {
        homePage.getLoginSignUpMenuItem().click();
        loginPage.getLoginFormTitle()
            .should('be.visible')
            .and('have.text', 'Login to your account');
        loginPage.getEmailLoginInput().type(email);
        loginPage.getPasswordInput().type(wrongPassword);
        loginPage.getLoginButton().click();
        loginPage.getErrorLoginLabel()
            .should('be.visible')
            .and('have.text', 'Your email or password is incorrect!');
    });

});