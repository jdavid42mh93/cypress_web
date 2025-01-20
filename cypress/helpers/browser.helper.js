import { appShoppingCart } from "../constants/commons.constants"

export class BrowserHelper{
    constructor(){

    }

    saveScreenShoot(){
        cy.wait(appShoppingCart.awaitTimes.s)
        cy.screenshot()
    }
}

export default new BrowserHelper()