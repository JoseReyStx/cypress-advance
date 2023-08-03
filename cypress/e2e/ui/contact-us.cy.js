import contactPage from "../../pages/contact-page";
import homePage from "../../pages/home-page";


const username = Cypress.env('username');
const email = Cypress.env('email');
const { subject, message, pathFile } = Cypress.env('contact');

describe("Test cases for contact form feature", () => {

    beforeEach("Visit main page", () => {
        cy.visit("/");
    });

    it("Contact us form", () => {
        homePage.getContactUsMenuItem().click();
        contactPage.getFormTitle().should('have.text', 'Get In Touch');
        contactPage.getNameInput().type(username);
        contactPage.getEmailInput().type(email);
        contactPage.getSubjectInput().type(subject);
        contactPage.getMessageInput().type(message);
        contactPage.getChooseFileButton().selectFile(pathFile);
        contactPage.getSubmitButton().click();
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq('Press OK to proceed!');
        });
        contactPage.getSuccessLabel().should('be.visible').and('have.text', 'Success! Your details have been submitted successfully.');
        homePage.getHomeMenuItem().click();
        cy.location('pathname', '/');
    })

});