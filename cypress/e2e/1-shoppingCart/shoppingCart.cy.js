/// <reference types="cypress" />
import { items } from "../../constants/menu.constants"
import browserHelper from "../../helpers/browser.helper"
import checkoutPage from "../../pages/checkout.page"
import completePage from "../../pages/complete.page"
import loginPage from "../../pages/login.page"
import menuPage from "../../pages/menu.page"
import principalPage from "../../pages/principal.page"

describe('Shopping Cart', function() {

    it('Shopping Cart Tests', function() {
        try {
            principalPage.open('https://www.saucedemo.com/')
            loginPage.login('standard_user','secret_sauce')
            menuPage.addItem(items.backPack)
            menuPage.addItem(items.bikeLight)
            menuPage.viewCart()
            checkoutPage.goToCheckout()
            checkoutPage.inputInformation()
            checkoutPage.goToOverviewCheckout()
            checkoutPage.goToComplete()
            completePage.validateConfirmationMessage()
        } catch (error) {
            console.error('Error in shopping cart tests', error)
            browserHelper.saveScreenShoot()
        }
        
    })
})