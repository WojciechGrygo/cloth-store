import { HomePage } from '../support/pages/home_page'    

const homePage = new HomePage();

describe('Home Test', () => {

    before(() => {
        cy.visit('/')
    })

    it('TC-22 Verify page transitions', () => {
        homePage.openWomenTab()
        homePage.openDressesTab()
        homePage.openTshirtTab()
        homePage.openHomePage()
    })

    it('TC-23 Find existing product using searching bar', () => {
        const productName = 'Printed Chiffon Dress'
        homePage.searchProduct(productName)
        homePage.verifyNumberOfProducts(1) // bug - it shows 2
    })

    it('TC-24 Find non-existing product using searching bar', () => {
        const productName = 'kurtka zimowa'
        homePage.searchProduct(productName)
        homePage.verifyNotFoundProductMsg(productName)
    })
})
