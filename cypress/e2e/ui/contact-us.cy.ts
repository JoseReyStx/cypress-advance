import { User } from 'cypress/interfaces/user';
import common from 'pages/common';
import contactPage from 'pages/contact-page';
import homePage from 'pages/home-page';

let userData: User;

describe('Test cases for contact form feature', () => {
    beforeEach('Visit main page', () => {
        cy.fixture('user.json').then((data) => {
            userData = data;
        });
        cy.visit('/');
    });

    it('Successful Contact Us form submission', () => {
        homePage.clickNavBarItem('Contact us');
        contactPage.assertFormTitle();
        contactPage.fillContactUsForm(userData);
        contactPage.clickSubmitButton();
        common.assertAlertMessage('Press OK to proceed!');
        contactPage.assertLabel('Success! Your details have been submitted successfully.');
    });
});
