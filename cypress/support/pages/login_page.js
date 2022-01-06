import { locators } from "../locators"
export class LoginPage {

    clickCreateAnAccount() {
        cy.contains('button', 'Create an account').click()
    }

    clickSignIn() {
        cy.contains('#SubmitLogin', 'Sign in').click()
    }

    clearInputs() {
        cy.get('#email').clear()
        cy.get('#passwd').clear()
    }

    enterEmail(value) {
        cy.get('#email_create').type(value)
    }

    enterLoginEmail(value) {
        cy.get('#email').type(value)
    }    
    
    login(email, password) {
        cy.get(locators.emailInput).type(email)
        cy.get(locators.passwordInput).type(password)
        cy.contains(locators.submitBtn, 'Sign in').click()
    }

    enterPassword(value) {
        cy.get('#passwd').type(value)
    }

    signIn() {
        this.clickSignIn()
        cy.url().should('include', 'my-account')
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.').should('be.visible')
    }

    verifyLoginValidationMsg(value) {
        cy.get('.alert-danger').should('have.css', 'background-color', 'rgb(243, 81, 92)')
        cy.contains('ol li', value).should('be.visible')
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