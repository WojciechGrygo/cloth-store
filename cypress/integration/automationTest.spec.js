import { LoginPage } from '../support/login_page'
import { MyAccountPage } from '../support/myAccount_page';

const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();

describe('Test', () => {

    it('Verify buttons names on my account page', () => {
        cy.visit(Cypress.env('login-url'))
        loginPage.login('registered@account.com', 'password')
        myAccountPage.verifyButtonsNames()
    })
})