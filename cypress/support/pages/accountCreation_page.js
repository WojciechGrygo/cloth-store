export class AccountCreationPage {

    clickRegister() {
        cy.get("#submitAccount").click()
    }

    fillAllObligatoryFields(name, lastName, password, address, city, state, postCode, phoneNumber) {
        cy.get("#customer_firstname").type(name)
        cy.get("#customer_lastname").type(lastName)
        cy.get("#passwd").type(password)
        cy.get("#firstname").should('have.value', name)
        cy.get("#lastname").should('have.value', lastName)
        cy.get("#address1").type(address)
        cy.get("#city").type(city)
        cy.get("#id_state").select(state)
        cy.get("#postcode").type(postCode)
        cy.get("#phone_mobile").type(phoneNumber)
    }

    register() {
        this.clickRegister()
        cy.url().should('include', 'my-account')
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.').should('be.visible')
    }

    verifyInvalidPasswordError() {
        cy.contains('.alert-danger', 'passwd is invalid.').should('be.visible') // should be 'Password is invalid.'
    }
}