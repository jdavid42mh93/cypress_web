export class Page {
    constructor(){

    }

    open(path){
        cy.visit(path)
    }
}

export default new Page()