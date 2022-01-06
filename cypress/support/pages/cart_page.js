export class CartPage {

    checkTermsOfService() {
        cy.get('#cgv').check().should('be.checked')
    }

    confirmMyOrder() {
        cy.get('p#cart_navigation  span').click()
        cy.contains('Your order on My Store is complete.').should('be.visible')
    }

    deleteProduct() {
        cy.get('.icon-trash').click()
        cy.contains('Your shopping cart is empty.').should('be.visible')
    }

    selectPayByBankWire() {
        cy.get("[title='Pay by bank wire']").click()
        cy.contains('Bank-wire payment.').should('be.visible')
        cy.contains('You have chosen to pay by bank wire. Here is a short summary of your order:').should('be.visible')
    }

    selectPayByCheck() {
        cy.get("a[title='Pay by check.']").click()
        cy.contains('Check payment').should('be.visible')
        cy.contains('You have chosen to pay by check. Here is a short summary of your order:').should('be.visible')
    }

    saveOrderCode(aliasName) {
        cy.get('.box').then(el => {
            let sentence = el.text()
            let code = sentence.slice(162, 171)
            cy.log(code)
            cy.wrap(code).as(aliasName)
        })
    }

    proceedToCheckoutFirst() {
        cy.get("div#center_column  a[title='Proceed to checkout'] > span").click()
    }

    proceedToCheckoutSecond() {
        cy.get("div#center_column > form[method='post']  button > span").click()
    }    
    
    proceedToCheckoutThird() {
        cy.get("form#form  button > span").click()
    }

    verifyProductName(productName) {
        cy.contains('.cart_description', productName).should('be.visible')
    }    
    
    verifyProductPrice(price) {
        cy.contains('.cart_unit', price).should('be.visible')
    }

    verifyProductQuantity(productQuantity) {
        cy.get('.cart_quantity_input').should('have.value', productQuantity)
    }

    verifyTotalPrice(price, productQuantity) {
        const totalPrice = price * productQuantity
        cy.contains('.cart_total', totalPrice).should('be.visible')
    }

    verifyPriceWithShipping(price) {
        const finalPrice = price + 2
        cy.contains('#total_price_container', `$${finalPrice}.00`).should('be.visible')
    }
}