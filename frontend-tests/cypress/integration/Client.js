/// <reference types="cypress" />

import * as login from "../pages/loginPage"
import * as menu from "../pages/menuPage"
import * as client from "../pages/clientPage"

//Test suite 'Client'
describe('Client', function(){

//Test case 'login and create client'
    it('Create a client', function(){
        //Login to testing hotel
        login.validLogin(cy)

        //navigating to create client page
        menu.enterClientPage(cy)

        //navigatin to new client page
        client.enterCreateClient(cy)

        //typing in account information
        cy.get(':nth-child(1) > input').type("Marcus Ljungqvist")
        cy.get(':nth-child(2) > input').type("Ljungqvist_Marcus@hotmail.com")
        cy.get(':nth-child(3) > input').type("0736637002")

        //pushing save button to create account
        cy.get('.blue').click()
        cy.title().should('include', 'Hotel')
        cy.contains('Marcus Ljungqvist')
    })

    //Test case 'delete account'
    it('delete account', function(){
        //delete client 3
        client.deleteClient3(cy)

        //logging out
        client.logoutFromClient(cy)
    })

})
