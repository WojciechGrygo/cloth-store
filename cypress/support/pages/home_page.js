export class HomePage {

    openDressesTab() {
        cy.get("div#block_top_menu > ul > li:nth-of-type(2) > a[title='Dresses']").click()
        cy.contains('#categories_block_left .title_block', 'Dresses').should('be.visible')
    }

    openHomePage() {
        cy.get("[alt='My Store']").click()
        cy.url().should('include', 'http://automationpractice.com/index.php')
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

    verifyNumberOfProducts(number) {
        cy.get('.product-count').should('contain', `Showing 1 - ${number} of ${number} items`)
    }

    verifyNotFoundProductMsg(productName) {
        cy.contains('.alert-warning', `No results were found for your search "${productName}"`).should('be.visible')
    }
}