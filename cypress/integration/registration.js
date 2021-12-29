describe("Register modul", () => {

    let randomName = Math.floor(Math.random() * 100 + 1)

    it("Create an account", () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.get("#email_create").type(randomName + "@mail.com")
        cy.get("#SubmitCreate").click()
        cy.url().should('include', 'account-creation')
    })

    it("Fill the form", () => {
        cy.get("#customer_firstname").type("Mark")
        cy.get("#customer_lastname").type("Kowalski")
        cy.get("#passwd").type("Password")
        cy.get("#firstname").should('have.value', 'Mark')
        cy.get("#lastname").should('have.value', 'Kowalski')
        cy.get("#address1").type("Testowa 1")
        cy.get("#city").type("Sopot")
        cy.get("#id_state").select("Alaska")
        cy.get("#postcode").type("11220")
        cy.get("#phone_mobile").type("334556778")
        cy.get("#submitAccount").click()

        cy.url().should('include', 'my-account')
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.').should('exist')
    })
})