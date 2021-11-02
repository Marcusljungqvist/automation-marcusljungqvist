/// <reference types="cypress" />

import * as targets from "../targets/targets"
import * as login from "../pages/loginPage"
import * as menu from "../pages/menuPage"
import * as client from "../pages/clientPage"
import * as createClient from "../pages/createClientPage"

//Test suite by 'Marcus Ljungqvist'
describe('My first test suite', function(){

    //before each test and test case 01
    beforeEach(()=>{
        login.validLogin(cy)
    })
    afterEach(()=>{
        menu.logoutMenu(cy)
    })
    
    
    //Test case 'Perform valid login'
    it('Create client and delete it', function(){
        //navigating to create client page
        menu.enterClientPage(cy)

        //navigatin to new client page
        client.enterCreateClient(cy)

        //typing in account information and saving
        createClient.createClient()
        cy.contains(targets.clientPageCheck)
        cy.contains('Marcus Ljungqvist')

        //delete client 3
        client.deleteClient3(cy)
        })
})
    it('Perform login and logout', function(){
        
})