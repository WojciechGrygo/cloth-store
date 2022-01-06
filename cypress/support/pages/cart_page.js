export class CartPage {

    deleteProduct() {
        cy.get('.icon-trash').click()
        cy.contains('Your shopping cart is empty.').should('be.visible')
    }

    verifyProductName(productName) {
        cy.contains('.cart_description', productName).should('be.visible')
    }    
    
    verifyProductPrice(price) {
        cy.contains('.cart_unit', price).should('be.visible')
    }
}