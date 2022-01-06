import { ContactUsPage } from '../support/pages/contactUs_page';
import { MyAccountPage } from '../support/pages/myAccount_page';
import { randomNumber } from '../support/faker'

const contactUsPage = new ContactUsPage();
const myAccountPage = new MyAccountPage();
let msg

describe('Contact Us Test', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('contactUs-url'));
        msg = randomNumber();
    })

    it('TC-13 Send empty form', () => {
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Invalid email address.')
    })

    it('TC-14 Send filled form without message', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('The message cannot be blank.')
    })

    it('TC-15 Send filled form without email address', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterMessage(msg)
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Invalid email address.')
    })

    it('TC-16 Send filled form without selecting Subject Heading', () => {
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Please select a subject from the list provided.')
    })

    it('TC-17 Send form with attached file', () => {
        cy.uploadFile('file.png')
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })

    it('TC-18 Successful form sending', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })
})

describe('Contact Us Test - Logged in user', () => {

    const orderReference = 'JOZWTLHUQ - 01/06/2022';
    const product = 'Faded Short Sleeve T-shirts - Color : Orange, Size : S'

    beforeEach(() => {
        cy.login();
        myAccountPage.clickContactUs()
        msg = randomNumber();
    })

    it('SLT-19 Verify if user email address is prepopulated', () => {
        contactUsPage.verifyIfEmailAddressIsPrepopulated(Cypress.env('registered-email'))
    })

    it('SLT-20 Send form with selected order reference', () => {
        contactUsPage.selectOrderReference(orderReference)
        contactUsPage.selectProduct(product)
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })

    it('SLT-21 Successful form sending - logged user', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })
})