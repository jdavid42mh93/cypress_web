import { checkout, checkoutForm } from "../constants/checkout.constants"
import { commonSelectors } from "../constants/commons.constants"
import browserHelper from "../helpers/browser.helper"

export class CheckoutPage{
    constructor() {
        
    }

    goToCheckout(){
        cy.get(commonSelectors.elementByDataTest(checkout.checkoutBtn)).should('be.visible').click()
    }

    goToOverviewCheckout(){
        cy.get(commonSelectors.elementByDataTest(checkout.continueBtn)).should('be.visible').click()
    }

    goToComplete(){
        cy.get(commonSelectors.elementByDataTest(checkout.finishBtn)).should('be.visible').click()
    }

    inputFirstName(){
        cy.get(commonSelectors.elementByDataTest(checkoutForm.firstName)).should('be.visible').click().type('Juan')
    }

    inputLastName(){
        cy.get(commonSelectors.elementByDataTest(checkoutForm.lastName)).should('be.visible').click().type('Callataxi')
    }

    inputPostalCode(){
        cy.get(commonSelectors.elementByDataTest(checkoutForm.postalCode)).should('be.visible').click().type('170607')
    }

    inputInformation(){
        this.inputFirstName()
        this.inputLastName()
        this.inputPostalCode()
        browserHelper.saveScreenShoot()
    }
}

export default new CheckoutPage()