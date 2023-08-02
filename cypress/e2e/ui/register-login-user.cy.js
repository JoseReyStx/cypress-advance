describe("Tests cases for register and login user feature", () => {

    beforeEach("Visit main page", () => {
        cy.visit("/");
    });

    it("Register user and delete it", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form').find('h2')
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        cy.getByData("signup-name").type('jose');
        cy.getByData("signup-email").type('correo@dominio.com');
        cy.getByData("signup-button").click();
        cy.get('.login-form').find('h2:first')
            .should('be.visible')
            .contains(/ENTER ACCOUNT INFORMATION/i);
        cy.getByData("title").its(0).find('input').click();
        cy.getByData("password").type('1234567890');
        cy.getByData("days").select('14');
        cy.getByData("months").select('1');
        cy.getByData("years").select('1990');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.getByData("first_name").type('jose');
        cy.getByData("last_name").type('king');
        cy.getByData("company").type('company');
        cy.getByData("address").type('street 30');
        cy.getByData("address2").type('street 33');
        cy.getByData("country").select('United States');
        cy.getByData("state").type('California');
        cy.getByData("city").type('Las vegas');
        cy.getByData("zipcode").type('1234');
        cy.getByData("mobile_number").type('12345678900');
        cy.getByData("create-account").click();
        cy.getByData("account-created")
            .should('be.visible')
            .contains(/ACCOUNT CREATED!/i);
        cy.getByData("continue-button").click();
        cy.get('.navbar-nav').find('li:last')
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        cy.get('a[href="/delete_account"]').click();
        cy.getByData("account-deleted")
            .should('be.visible')
            .contains(/ACCOUNT DELETED!/i);
    });

    it("Register user without deleting account", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form').find('h2')
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        cy.getByData("signup-name").type('jose');
        cy.getByData("signup-email").type('correo@dominio.com');
        cy.getByData("signup-button").click();
        cy.get('.login-form').find('h2:first')
            .should('be.visible')
            .contains(/ENTER ACCOUNT INFORMATION/i);
        cy.getByData("title").its(0).find('input').click();
        cy.getByData("password").type('1234567890');
        cy.getByData("days").select('14');
        cy.getByData("months").select('1');
        cy.getByData("years").select('1990');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.getByData("first_name").type('jose');
        cy.getByData("last_name").type('king');
        cy.getByData("company").type('company');
        cy.getByData("address").type('street 30');
        cy.getByData("address2").type('street 33');
        cy.getByData("country").select('United States');
        cy.getByData("state").type('California');
        cy.getByData("city").type('Las vegas');
        cy.getByData("zipcode").type('1234');
        cy.getByData("mobile_number").type('12345678900');
        cy.getByData("create-account").click();
        cy.getByData("account-created")
            .should('be.visible')
            .contains(/ACCOUNT CREATED!/i);
    });

    it("Register user with existing email", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form').find('h2')
            .should('be.visible')
            .and('have.text', 'New User Signup!');
        cy.getByData("signup-name").type('jose');
        cy.getByData("signup-email").type('correo@dominio.com');
        cy.getByData("signup-button").click();
        cy.get('.signup-form').find('p')
            .should('be.visible')
            .and('have.text', 'Email Address already exist!');
    });

    it("Logout user", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.login-form').find('h2')
            .should('be.visible')
            .and('have.text', 'Login to your account');
        cy.getByData("login-email").type('correo@dominio.com');
        cy.getByData("login-password").type('1234567890');
        cy.getByData("login-button").click();
        cy.get('.navbar-nav').find('li:last')
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        cy.get('a[href="/logout"]').click();
        cy.location('pathname', '/login')
    });

    it("Login user with correct email and password and delete it", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.login-form').find('h2')
            .should('be.visible')
            .and('have.text', 'Login to your account');
        cy.getByData("login-email").type('correo@dominio.com');
        cy.getByData("login-password").type('1234567890');
        cy.getByData("login-button").click();
        cy.get('.navbar-nav').find('li:last')
            .should('be.visible')
            .and('contain.text', 'Logged in as jose');
        cy.get('a[href="/delete_account"]').click();
        cy.getByData("account-deleted")
            .should('be.visible')
            .contains(/ACCOUNT DELETED!/i);
    });

    it("Login user with incorrect email and password", () => {
        cy.get('a[href="/login"]').click();
        cy.get('.login-form').find('h2')
            .should('be.visible')
            .and('have.text', 'Login to your account');
        cy.getByData("login-email").type('correo@dominio.com');
        cy.getByData("login-password").type('123');
        cy.getByData("login-button").click();
        cy.get('.login-form').find('p')
            .should('be.visible')
            .and('have.text', 'Your email or password is incorrect!');
    });

});