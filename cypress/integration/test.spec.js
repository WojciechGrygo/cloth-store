import { LoginPage } from '../support/pages/login_page'
import { MyAccountPage } from '../support/pages/myAccount_page';

const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();

describe('Test', () => {

    it('Verify buttons names on my account page', () => {
        cy.visit(Cypress.env('login-url'))
        loginPage.login(Cypress.env('registered-email'), Cypress.env('password'))
        cy.fixture('buttonsNames.js').then(buttonsNames => {
            myAccountPage.verifyButtonsNames(buttonsNames)
        })
    })

    it('Verify buttons names on my account page 2', () => {
        cy.visit(Cypress.env('login-url'))
        loginPage.login('registered@account.com', 'password')
        myAccountPage.verifyButtonsNames()
    })
})