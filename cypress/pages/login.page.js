import { commonSelectors } from "../constants/commons.constants"
import { loginButtons, loginFormText } from "../constants/login.constants"
import browserHelper from "../helpers/browser.helper"

export class LoginPage{
    constructor(){

    }

    inputUsername(username){
        cy.get(commonSelectors.elementByDataTest(loginFormText.username)).should('be.visible').click().type(username)
    }

    inputPassword(password){
        cy.get(commonSelectors.elementByDataTest(loginFormText.password)).should('be.visible').click().type(password)
    }

    loginBtn(){
        cy.get(commonSelectors.elementByDataTest(loginButtons.login)).should('be.visible').click()
    }

    login(username, password){
        this.inputUsername(username)
        this.inputPassword(password)
        browserHelper.saveScreenShoot()
        this.loginBtn()
    }
}

export default new LoginPage()