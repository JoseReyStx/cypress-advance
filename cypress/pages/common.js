class Common {
    assertAlertMessage(message) {
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq(message);
        });
    }

    assertLocation(pathname) {
        cy.location('pathname').should('include', pathname);
    }
}
export default new Common();