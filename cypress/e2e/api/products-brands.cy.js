/// <reference types="cypress" />
describe("Testing products API", () => {

    beforeEach("Visit main page", () => {
        cy.visit('/');
    });

    it("Get All Products List", () => {
        cy.request('GET', '/api/productsList').then((response) => {
            const data = JSON.parse(response.body);
            expect(data.responseCode).to.be.eq(200);
            expect(data.products).to.have.lengthOf(34);
        });
    });

    it("Check Unsupported POST method To All Products List", () => {
        cy.request('POST', '/api/productsList').then((response) => {
            const data = JSON.parse(response.body);
            expect(data.responseCode).to.be.eq(405);
            expect(data.message).to.contain('This request method is not supported.');
        });
    });

    it("Get All Brands List", () => {
        cy.request('GET', '/api/brandsList').then((response) => {
            const data = JSON.parse(response.body);
            expect(data.responseCode).to.be.eq(200);
            expect(data.brands).to.have.lengthOf(34);
        });
    });

    it("Check Unsupported PUT method To All Brands List", () => {
        cy.request('PUT', '/api/brandsList').then((response) => {
            const data = JSON.parse(response.body);
            expect(data.responseCode).to.be.eq(405);
            expect(data.message).to.contain('This request method is not supported.');
        });
    });

});