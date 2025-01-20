import { commonSelectors } from "../constants/commons.constants"
import { shoppingCart } from "../constants/menu.constants"
import browserHelper from "../helpers/browser.helper"

export class MenuPage{
    constructor(){

    }

    addItem(item){
        cy.get(commonSelectors.elementByDataTest(item),{timeout:10000}).click()
    }

    viewCart(){
        cy.get(commonSelectors.elementByDataTest(shoppingCart.shoppingCart)).click()
        browserHelper.saveScreenShoot()
    }
}

export default new MenuPage()