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

    selectSubjectHeading(value) {
        cy.get('#id_contact').select(value)
        if (value === 'Customer service') {
            cy.contains('#desc_contact2', 'For any question about a product, an order').should('be.visible')
        } else {
            cy.contains('#desc_contact2', 'If a technical problem occurs on this website').should('be.visible')
        }
    }

    verifyValidationMsg(value) {
        cy.get('.alert-danger').should('have.css', 'background-color', 'rgb(243, 81, 92)')
        cy.contains('ol li', value).should('be.visible')
    }
}