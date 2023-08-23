class Common {
    assertAlertMessage(message) {
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq(message);
        });
    }

    assertLocation() {
        const location = new RegExp(/\/(products|product_details\/\d|login|test_cases)*/gmi);
        cy.location('pathname').should('match', location);
    }
}
export default new Common();