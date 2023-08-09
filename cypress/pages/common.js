class Common {
    assertAlertMessage(message) {
        cy.on('window:confirm', (alert) => {
            expect(alert).to.eq(message);
        });
    }
}
export default new Common();