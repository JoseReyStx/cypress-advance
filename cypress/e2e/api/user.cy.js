/// <reference types="cypress" />

let userData;

describe("Testing user API", () => {

    beforeEach("Visit main page", () => {
        cy.fixture('user.json').then((user) => {
            userData = user;
        });
        cy.visit('/');
    });

    it("POST To Search Product with parameter 'search_product'", () => {
        cy.request({
            method: 'POST',
            url: '/api/searchProduct',
            form: true,
            body: {
                search_product: "jeans"
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            expect(data.responseCode).to.be.eq(200);
            expect(data.products).to.have.length.greaterThan(0);
        });
    });

    it("POST To Search Product without search_product parameter", () => {
        cy.request('POST', '/api/searchProduct').then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.be.eq(400);
            expect(message).to.contain('Bad request, search_product parameter is missing in POST request.');
        });
    });

    it("POST To Verify Login without email parameter", () => {
        const { password } = userData;
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                password: password
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.be.eq(400);
            expect(message).to.have.string('Bad request, email or password parameter is missing in POST request.');
        });
    });

    it("DELETE Not Supported To Verify Login", () => {
        cy.request({
            method: 'DELETE',
            url: '/api/verifyLogin'
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.be.eq(405);
            expect(message).to.have.string('This request method is not supported.');
        });
    });

    it("POST To Verify Login with invalid details", () => {
        const { email, wrongPassword } = userData;
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                email: email,
                password: wrongPassword
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.be.eq(404);
            expect(message).to.have.string('User not found!');
        });
    });

    it("POST To Create/Register User Account", () => {
        const {
            username,
            email,
            password,
            title,
            birthday,
            firstName,
            lastName,
            company,
            address,
            address2,
            country,
            state,
            city,
            zipCode,
            mobileNumber
        } = userData;
        cy.request({
            method: 'POST',
            url: '/api/createAccount',
            form: true,
            body: {
                name: username,
                email: email,
                password: password,
                title: title,
                birth_date: birthday.day,
                birth_month: birthday.month,
                birth_year: birthday.year,
                firstname: firstName,
                lastname: lastName,
                company: company,
                address1: address,
                address2: address2,
                country: country,
                zipcode: zipCode,
                state: state,
                city: city,
                mobile_number: mobileNumber
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.eq(201);
            expect(message).to.contain("User created!");
        });
    });

    it("POST To Verify Login with valid credentials", () => {
        const { email, password } = userData;
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                email: email,
                password: password
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.be.eq(200);
            expect(message).to.have.string('User exists!');
        });
    });

    it("GET user account detail by email", () => {
        const { email } = userData;
        cy.request({
            method: 'GET',
            url: '/api/getUserDetailByEmail',
            form: true,
            qs: {
                email: email
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const {responseCode, user } = data;
            
            expect(responseCode).to.eq(200);
            expect(user).to.not.be.empty;
        });
    });

    it("PUT METHOD To Update User Account With New City", () => {
        const {
            username,
            email,
            password,
            title,
            birthday,
            firstName,
            lastName,
            company,
            address,
            address2,
            country,
            state,
            city,
            zipCode,
            mobileNumber
        } = userData;
        cy.request({
            method: 'PUT',
            url: '/api/updateAccount',
            form: true,
            body: {
                name: username,
                email: email,
                password: password,
                title: title,
                birth_date: birthday.day,
                birth_month: birthday.month,
                birth_year: birthday.year,
                firstname: firstName,
                lastname: lastName,
                company: company,
                address1: address,
                address2: address2,
                country: country,
                zipcode: zipCode,
                state: state,
                city: 'San Diego',
                mobile_number: mobileNumber
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.eq(200);
            expect(message).to.contain("User updated!");
        });
    });

    it("DELETE METHOD To Delete User Account", () => {
        const { email, password } = userData;
        cy.request({
            method: 'DELETE',
            url: '/api/deleteAccount',
            form: true,
            body: {
                email: email,
                password: password
            }
        }).then((response) => {
            const data = JSON.parse(response.body);
            const { responseCode, message } = data;

            expect(responseCode).to.eq(200);
            expect(message).to.contain("Account deleted!");
        });
    });

});