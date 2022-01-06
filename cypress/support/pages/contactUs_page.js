export class ContactUsPage {

    clickSend() {
        cy.get('#submitMessage').click()
    }

    enterEmailAddress(value) {
        cy.get('#email').type(value)
    }

    enterMessage(value) {
        cy.get('#message').type(value)
    }

    sendForm() {
        this.clickSend()
        cy.get('.alert-success')
            .should('have.css', 'background-color', 'rgb(85, 198, 94)')
            .and('contain', 'Your message has been successfully sent to our team.')
    }

    selectOrderReference(value) {
        cy.get('[name="id_order"]').select(value)
        cy.get('.col-md-3.col-xs-12 > div:nth-of-type(3)')
            .should('contain', 'Product')
            .and('be.visible')
    }

    selectSubjectHeading(value) {
        cy.get('#id_contact').select(value)
        if (value === 'Customer service') {
            cy.contains('#desc_contact2', 'For any question about a product, an order').should('be.visible')
        } else {
            cy.contains('#desc_contact2', 'If a technical problem occurs on this website').should('be.visible')
        }
    }

    selectProduct(value) {
        cy.get('[name="id_product"]').select(value)
    }

    verifyValidationMsg(value) {
        cy.get('.alert-danger').should('have.css', 'background-color', 'rgb(243, 81, 92)')
        cy.contains('ol li', value).should('be.visible')
    }

    verifyIfEmailAddressIsPrepopulated(value) {
        cy.get('#email').should('have.value', value)
    }
}