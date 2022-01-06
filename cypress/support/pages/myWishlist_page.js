export class MyWishlistPage {

    deleteWishlist() {
        cy.get('.icon-remove').click()
        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get('.table-bordered').should('not.exist')
    }
}