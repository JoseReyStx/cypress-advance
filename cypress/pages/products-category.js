class ProductsCategoryPage {

    getCategoryTitle() {
        return cy.get('h2.title');
    }

    assertCategoryTitle(category) {
        const titleRegEx = new RegExp(`${category} - [a-zA-Z]+ products`, 'gmi');
        this.getCategoryTitle().contains(titleRegEx);
    }

}

export default new ProductsCategoryPage();