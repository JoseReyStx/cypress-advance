class Common {
    assertAlertMessage(message: string) {
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq(message);
        });
    }

    assertLocation(pathname: string) {
        cy.location('pathname').should('include', pathname);
    }
}
export default new Common();
