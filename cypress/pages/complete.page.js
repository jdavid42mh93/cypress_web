import { commonSelectors } from "../constants/commons.constants"
import { completeSelectors, completeTexts } from "../constants/complete.constants"
import browserHelper from "../helpers/browser.helper"

export class CompletePage{
    constructor(){

    }

    validateMessage(element, message){
        cy.get(commonSelectors.elementByDataTest(element)).should('have.text',message)
    }

    validateConfirmationMessage(){
        this.validateMessage(completeSelectors.messageConfirmation,completeTexts.finalMessage)
        browserHelper.saveScreenShoot()
    }
}

export default new CompletePage()