import homePage from "../../pages/home-page";

describe("Test case for <test cases page>", () => {

    beforeEach("Visit main page", () => {
        cy.visit("/");
    });

    it("Verify Test Cases Page is shown correctly", () => {
        cy.location('pathname').should('eq', '/');
        homePage.clickNavBarItem('Test Cases');
        cy.location('pathname').should('eq', '/test_cases');
    });
});