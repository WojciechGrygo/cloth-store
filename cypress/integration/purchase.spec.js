import { HomePage } from '../support/pages/home_page'
import { MyAccountPage } from '../support/pages/myAccount_page'
import { MyWishlistPage } from '../support/pages/myWishlist_page';
import { CartPage } from '../support/pages/cart_page';

const homePage = new HomePage();
const myAccountPage = new MyAccountPage();
const myWishlistPage = new MyWishlistPage();
const cartPage = new CartPage();


describe('Purchase Test', () => {

    beforeEach(() => {
        cy.login()
        homePage.openHomePage()
    })

    it('TC-25 Add and remove a product to My Wishlist', () => {
        homePage.openEveningDressesTab()
        homePage.clickPrintedDress()
        homePage.addToWishList()
        homePage.openMyAccountTab()
        myAccountPage.openMyWishlist()
        myWishlistPage.deleteWishlist()
    })
    
    it('TC-26 Verify the operation of the shopping cart', () => {
        const productName = 'Blouse'
        const productPrice = '$27.00'
        homePage.verifyIfCartEmpty()
        homePage.openProduct()
        homePage.clickAddToCart()
        homePage.clickProceedToCheckout()
        cartPage.verifyProductName(productName)
        cartPage.verifyProductPrice(productPrice)
        cartPage.deleteProduct()
    })
    
    it('TC-27 Add the configured product to your cart', () => {
        
    })

    it('TC-28 Buy product and pay by bank wire', () => {
        
    })    
    
    it('TC-29 Buy product and pay by check', () => {
        
    })

    it('TC-30 Verify Order History', () => {
        
    })
})