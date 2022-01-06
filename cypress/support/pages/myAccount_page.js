export class MyAccountPage {

    clickContactUs() {
        cy.get('#contact-link').click()
    }

    openMyWishlist() {
        cy.contains('My wishlists').click()
    }

    signOut() {
        cy.get('.logout').click()
        cy.contains('Sign in').should('be.visible')
    }

    verifyButtonsNames() {
        const values = [
            'Order history and details', 
            'My credit slips', 
            'My addresses', 
            'My personal information', 
            'My wishlists'
        ]
        values.forEach(value => {
            cy.contains('li > a', value).should('be.visible')
        })
    }
}