describe("Test cases for contact form feature", () => {

    beforeEach("Visit main page", () => {
        cy.visit("/");
    });

    it("Contact us form", () => {
        cy.get('a[href="/contact_us"]').click();
        cy.get('.contact-form').find('h2').should('have.text', 'Get In Touch');
        cy.getByData("name").type('jose');
        cy.getByData("email").type('correo@mail.com');
        cy.getByData("subject").type('hello');
        cy.getByData("message").type('this is a test');
        cy.get('[type="file"].form-control').selectFile('cypress/fixtures/example.json');
        cy.getByData("submit-button").click();
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq('Press OK to proceed!');
        });
        cy.get('.contact-form > .alert-success').should('be.visible').and('have.text', 'Success! Your details have been submitted successfully.');
        cy.get('li > a[href="/"]').click();
        cy.location('pathname', '/');
    })

});