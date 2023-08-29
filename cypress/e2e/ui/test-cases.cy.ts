import common from 'pages/common';
import homePage from 'pages/home-page';

describe('Test case for <test cases page>', () => {
    beforeEach('Visit main page', () => {
        cy.visit('/');
    });

    it('Verify Test Cases Page is shown correctly', () => {
        common.assertLocation('/');
        homePage.clickNavBarItem('Test Cases');
        common.assertLocation('/test_cases');
    });
});
