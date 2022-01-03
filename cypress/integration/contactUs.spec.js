import { ContactUsPage } from '../support/contactUs_page';
import { randomNumber } from '../support/faker'

describe('Contact Us Test', () => {

    const contactUsPage = new ContactUsPage();
    let msg

    beforeEach(() => {
        cy.visit(Cypress.env('contactUs-url'))
        msg = randomNumber();
    })

    it('TC-12 Send empty form', () => {
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Invalid email address.')
    })

    it('TC-13 Send filled form without message', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('The message cannot be blank.')
    })

    it('TC-14 Send filled form without email address', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterMessage(msg)
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Invalid email address.')
    })

    it('TC-15 Send filled form without selecting Subject Heading', () => {
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.clickSend()
        contactUsPage.verifyValidationMsg('Please select a subject from the list provided.')
    })

    it('TC-16 Send form with attached file', () => {
        cy.uploadFile('file.png')
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })

    it('TC-17 Send filled form', () => {
        contactUsPage.selectSubjectHeading('Customer service')
        contactUsPage.enterEmailAddress(Cypress.env('registered-email'))
        contactUsPage.enterMessage(msg)
        contactUsPage.sendForm()
    })
})