export class MyAccountPage {

    signOut() {
        cy.get('.logout').click()
        cy.contains('Sign in').should('be.visible')
    }
}