export class LoginPage {

    clickCreateAnAccount() {
        cy.contains('button', 'Create an account').click()
    }

    enterEmail(value) {
        cy.get('#email_create').type(value)
    }

    verifyValidationMsg(value) {
        cy.get('.alert-danger').should('have.css', 'background-color', 'rgb(243, 81, 92)')
        cy.contains('#create_account_error', value).should('be.visible')
    }

    verifyIfEmailAddressIsRed() {
        cy.get('.form-group.form-error input').should('have.css', 'color', 'rgb(241, 51, 64)')
    }

    verifyIfEmailAddressIsGreen() {
        cy.get('.form-group.form-ok input').should('have.css', 'color', 'rgb(53, 179, 63)')
    }
}