class ProductsCategoryPage {

    getCategoryTitle() {
        return cy.get('h2.title');
    }

    assertCategoryTitle(category) {
        const re = new RegExp(`${category} - [a-zA-Z]+ products`, 'gmi');
        this.getCategoryTitle().contains(re);
    }

}

export default new ProductsCategoryPage();