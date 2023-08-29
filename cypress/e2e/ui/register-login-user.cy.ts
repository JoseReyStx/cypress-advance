import { User } from 'cypress/interfaces/user';
import common from 'pages/common';
import genericPage from 'pages/generic-page';
import homePage from 'pages/home-page';
import loginPage from 'pages/login-page';
import signupPage from 'pages/signup-page';

let userData: User;

describe('Tests cases for register and login user feature', () => {
    beforeEach('Visit main page', () => {
        cy.fixture('user.json').then((user) => {
            userData = user;
        });
        cy.visit('/');
    });

    it('Register user and delete it', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        signupPage.assertSignUpFormTitle();
        signupPage.fillSignUpForm(userData);
        signupPage.clickCreateAccountButton();
        genericPage.assertTitle('created');
        genericPage.clickContinueButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Delete Account');
        genericPage.assertTitle('deleted');
    });

    it('Register user without deleting account', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        signupPage.assertSignUpFormTitle();
        signupPage.fillSignUpForm(userData);
        signupPage.clickCreateAccountButton();
        genericPage.assertTitle('created');
        genericPage.clickContinueButton();
        homePage.assertUserLoggedInMenuItem(userData);
    });

    it('Register user with existing email', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        loginPage.assertExistenUserErrorLabel();
    });

    it('Logout user', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillLoginForm(userData);
        loginPage.clickLoginButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Logout');
        common.assertLocation('/login');
    });

    it('Login user with correct email and password and delete it', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillLoginForm(userData);
        loginPage.clickLoginButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Delete Account');
        genericPage.assertTitle('deleted');
    });

    it('Login user with incorrect email and password', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.assertSignUpFormTitle();
        loginPage.fillLoginForm(userData, true);
        loginPage.clickLoginButton();
        loginPage.assertCredentialsLabel();
    });
});
