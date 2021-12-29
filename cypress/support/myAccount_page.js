export class MyAccountPage {

    clickContactUs() {
        cy.get('#contact-link').click()
    }

    signOut() {
        cy.get('.logout').click()
        cy.contains('Sign in').should('be.visible')
    }
}