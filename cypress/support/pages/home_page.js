export class HomePage {

    addBlouseToCart() {
        cy.get('[title="Blouse"]').eq(2).click()
        this.clickAddToCart()
    }

    addToWishList() {
        cy.get('#wishlist_button').click()
        cy.get('.fancybox-error').should('contain', 'Added to your wishlist.')
        cy.get('.fancybox-close').click()
    }

    changeProductQuantity(quantity) {
        cy.get('#quantity_wanted').clear().type(quantity)
    }

    changeProductSize(size) {
        cy.get('#group_1').select(size)
    }

    clickAddToCart() {
        cy.contains('Add to cart').click()
    }

    clickBlouse() {
        cy.get('[title="Blouse"]').eq(2).click()
        cy.url().should('include', 'controller=product')
    }

    clickMore() {
        cy.contains('More').click()
    }

    clickProceedToCheckout() {
        cy.get("[title='Proceed to checkout']").click()
    }

    clickPrintedDress() {
        cy.contains('Printed Dress').click()
    }

    openDressesTab() {
        cy.get("div#block_top_menu > ul > li:nth-of-type(2) > a[title='Dresses']").click()
        cy.contains('#categories_block_left .title_block', 'Dresses').should('be.visible')
    }

    openEveningDressesTab() {
        cy.get("div#block_top_menu > ul > li:nth-of-type(2) > a[title='Dresses']").focus()
        cy.get('.submenu-container > li > [title="Evening Dresses"]').click()
    }

    openHomePage() {
        cy.get("[alt='My Store']").click()
        cy.url().should('include', 'http://automationpractice.com/index.php')
    }

    openMyAccountTab() {
        cy.get('.account').click()
    }

    openTshirtTab() {
        cy.get("li:nth-of-type(3) > a[title='T-shirts']").click()
        cy.contains('.category-name', 'T-shirts').should('be.visible')
    }    

    openWomenTab() {
        cy.get("a[title='Women']").click()
        cy.contains('#categories_block_left .title_block', 'Women').should('be.visible')
    }

    searchProduct(value) {
        cy.get('#search_query_top')
            .clear()
            .type(value)
        cy.get('.button-search').click()
    }

    selectWhiteBlouse() {
        cy.get("a[name='White']").click()
    }

    verifyIfCartEmpty() {
        cy.get("[title='View my shopping cart']").should('contain', '(empty)')
    }

    verifyNumberOfProducts(number) {
        cy.get('.product-count').should('contain', `Showing 1 - ${number} of ${number} items`)
    }

    verifyNotFoundProductMsg(productName) {
        cy.contains('.alert-warning', `No results were found for your search "${productName}"`).should('be.visible')
    }
}