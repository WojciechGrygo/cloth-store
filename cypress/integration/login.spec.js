import { LoginPage } from '../support/login_page'
import { MyAccountPage } from '../support/myAccount_page'

describe('Login Test', () => {

    const loginPage = new LoginPage();
    const myAccountPage = new MyAccountPage();

    before(() => {
        cy.visit(Cypress.env('login-url'))
    })
    
    afterEach(() => {
        loginPage.clearInputs()
    })

    it('TC-5 Invalid email address and password', () => {
        loginPage.enterLoginEmail('invalidemail.com')
        loginPage.enterPassword('wrongPassword')
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('Invalid email address.')
    })

    it('TC-6 Empty email and password fields', () => {
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('An email address required.')
    })

    it('TC-7 Empty email field', () => {
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('An email address required.')
    })

    it('TC-8 Empty password field', () => {
        loginPage.enterLoginEmail(Cypress.env('registered-email'))
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('Password is required.')
    })

    it('TC-9 Invalid password', () => {
        loginPage.enterLoginEmail(Cypress.env('registered-email'))
        loginPage.enterPassword('xxx')
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('Invalid password.')
    })

    it('TC-10 Invalid email', () => {
        loginPage.enterLoginEmail('invalid@email.com')
        loginPage.enterPassword(Cypress.env('password'))
        loginPage.clickSignIn()
        loginPage.verifyLoginValidationMsg('Authentication failed.')
    })

    it('TC-11 Login and logout', () => {
        loginPage.enterLoginEmail(Cypress.env('registered-email'))
        loginPage.enterPassword(Cypress.env('password'))
        loginPage.signIn()
        myAccountPage.signOut()
    })
})