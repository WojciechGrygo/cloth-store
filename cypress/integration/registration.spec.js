import { randomName, randomLastName, randomPhoneNumber, randomZipCode, randomCity, randomAddress, randomState, randomEmail } from '../support/faker';
import { LoginPage } from '../support/pages/login_page'
import { AccountCreationPage } from '../support/pages/accountCreation_page'

describe("Registration Test", () => {

    const loginPage = new LoginPage();
    const accountCreationPage = new AccountCreationPage();

    const email = randomEmail();
    const name = randomName();
    const lastName = randomLastName();
    const address = randomAddress();
    const city = randomCity();
    const state = randomState();
    const postCode = randomZipCode();
    const phoneNumber = randomPhoneNumber();

    beforeEach(() => {
        cy.visit(Cypress.env('login-url'))
    })

    it("TC-1 Empty email address field", () => {
        loginPage.clickCreateAnAccount()
        loginPage.verifyValidationMsg('Invalid email address.')
    })

    it("TC-2 Enter email in wrong format", () => {
        loginPage.enterEmail('email.com')
        loginPage.clickCreateAnAccount()
        loginPage.verifyValidationMsg('Invalid email address.')
        loginPage.verifyIfEmailAddressIsRed()
    })

    it("TC-3 Enter already registered email", () => {
        const validationMsg = "An account using this email address has already been registered. Please enter a valid password or request a new one."
        loginPage.enterEmail(Cypress.env('registered-email'))
        loginPage.clickCreateAnAccount()
        loginPage.verifyValidationMsg(validationMsg)
        loginPage.verifyIfEmailAddressIsGreen()
    })

    it("TC-4 Create an account", () => {
        loginPage.enterEmail(email)
        loginPage.clickCreateAnAccount()
        accountCreationPage.fillAllObligatoryFields(name, lastName, Cypress.env('password'), address, city, state, postCode, phoneNumber)
        accountCreationPage.register()
    })

    it("TC-5 Enter too short password", () => {
        const invalidPassword = 'aaaa'
        loginPage.enterEmail(email)
        loginPage.clickCreateAnAccount()
        accountCreationPage.fillAllObligatoryFields(name, lastName, invalidPassword, address, city, state, postCode, phoneNumber)
        accountCreationPage.clickRegister()
        accountCreationPage.verifyInvalidPasswordError()
    })
})