import { User } from 'cypress/interfaces/user';
import checkoutPage from 'pages/checkout-page';
import common from 'pages/common';
import genericPage from 'pages/generic-page';
import homePage from 'pages/home-page';
import loginPage from 'pages/login-page';
import paymentPage from 'pages/payment-page';
import productDetailsPage from 'pages/product-details-page';
import productsCategory from 'pages/products-category';
import productsPage from 'pages/products-page';
import signupPage from 'pages/signup-page';
import viewCartPage from 'pages/view-cart-page';

let userData: User;

describe('Test cases for products feature', () => {
    before('Read fixture file with user data', () => {
        cy.fixture('user.json').then((user) => {
            userData = user;
        });
    });

    beforeEach('Visit main page', () => {
        cy.visit('/');
    });

    it('Verify All Products and product detail page', () => {
        homePage.clickNavBarItem('Products');
        common.assertLocation('products');
        productsPage.assertProductList();
        productsPage.clickProduct('Winter Top');
        common.assertLocation('/product_details');
        productDetailsPage.assertProductDetails();
    });

    it('Assert Searched Products are related', () => {
        homePage.clickNavBarItem('Products');
        common.assertLocation('/products');
        productsPage.assertProductList();
        productsPage.searchProduct('jeans');
        productsPage.assertProductsTitle();
        productsPage.assertProductSearch('jeans');
    });

    it('Verify Subscription in home page', () => {
        homePage.assertFooterTitle();
        homePage.assertSubscription(userData);
    });

    it('Verify Subscription in Cart page', () => {
        homePage.clickNavBarItem('Cart');
        homePage.assertFooterTitle();
        homePage.assertSubscription(userData);
    });

    it('Add Products in Cart', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickAddToCart(2);
        viewCartPage.assertProductsInCart(2);
    });

    it('Verify Product quantity in Cart', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        common.assertLocation('/product_details');
        productDetailsPage.typeQuantity('4');
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.clickViewCart();
        viewCartPage.assertProductQuantity(4);
    });

    it('Place Order: Register while Checkout', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        common.assertLocation('/product_details');
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.clickViewCart();
        viewCartPage.clickCheckOutButton();
        genericPage.clickRegisterLoginModal();
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        signupPage.assertSignUpFormTitle();
        signupPage.fillSignUpForm(userData);
        signupPage.clickCreateAccountButton();
        genericPage.assertTitle('created');
        genericPage.clickContinueButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Cart');
        viewCartPage.clickCheckOutButton();
        checkoutPage.typeDetails('random details');
        checkoutPage.clickPlaceOrder();
        paymentPage.typePaymentInformation(userData);
        paymentPage.clickConfirmOrder();
        genericPage.getSuccessMessage();
        homePage.clickNavBarItem('Delete Account');
        genericPage.assertTitle('deleted');
    });

    it('Place Order: Register before Checkout', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        signupPage.fillSignUpForm(userData);
        signupPage.clickCreateAccountButton();
        genericPage.clickContinueButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.clickViewCart();
        viewCartPage.clickCheckOutButton();
        checkoutPage.typeDetails('random details');
        checkoutPage.clickPlaceOrder();
        paymentPage.typePaymentInformation(userData);
        paymentPage.clickConfirmOrder();
        genericPage.getSuccessMessage();
    });

    it('Place Order: Login before Checkout', () => {
        homePage.clickNavBarItem('Signup / Login');
        loginPage.fillLoginForm(userData);
        loginPage.clickLoginButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.clickViewCart();
        viewCartPage.clickCheckOutButton();
        checkoutPage.typeDetails('random details');
        checkoutPage.clickPlaceOrder();
        paymentPage.typePaymentInformation(userData);
        paymentPage.clickConfirmOrder();
        genericPage.getSuccessMessage();
        homePage.clickNavBarItem('Delete Account');
        genericPage.assertTitle('deleted');
    });

    it('Remove Products From Cart', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickAddToCart(1);
        viewCartPage.removeProduct();
        viewCartPage.assertProductsInCart(0);
    });

    it('View Category Products', () => {
        homePage.assertAndClickCategory('women');
        homePage.clickSubCategory('women');
        productsCategory.assertCategoryTitle('women');
        homePage.assertAndClickCategory('men');
        homePage.clickSubCategory('men');
        productsCategory.assertCategoryTitle('men');
    });

    it('Add review on product', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        productDetailsPage.fillReviewForm(userData);
        productDetailsPage.clickSubmitReview();
        productDetailsPage.assertReviewConfirmation();
    });

    it('Download Invoice after purchase order', () => {
        homePage.clickNavBarItem('Products');
        productsPage.clickProduct('Winter Top');
        productDetailsPage.clickAddToCartButton();
        productDetailsPage.clickViewCart();
        viewCartPage.clickCheckOutButton();
        genericPage.clickRegisterLoginModal();
        loginPage.fillSignUpPreForm(userData);
        loginPage.clickSubmitButton();
        signupPage.assertSignUpFormTitle();
        signupPage.fillSignUpForm(userData);
        signupPage.clickCreateAccountButton();
        genericPage.assertTitle('created');
        genericPage.clickContinueButton();
        homePage.assertUserLoggedInMenuItem(userData);
        homePage.clickNavBarItem('Cart');
        viewCartPage.clickCheckOutButton();
        checkoutPage.typeDetails('random details');
        checkoutPage.clickPlaceOrder();
        paymentPage.typePaymentInformation(userData);
        paymentPage.clickConfirmOrder();
        genericPage.getSuccessMessage();
        genericPage.clickDownloadInvoice();
        homePage.clickNavBarItem('Delete Account');
        genericPage.assertTitle('deleted');
    });
});
