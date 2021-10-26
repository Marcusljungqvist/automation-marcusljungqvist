/// <reference types="cypress" />

//This is a test suite
describe('Create', function(){

    //This is a test case
    it('Create an account and delete it', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Create Client')
        cy.get('h2 > .btn').click()

        //typing in account information
        cy.get(':nth-child(1) > input').type("Marcus Ljungqvist")
        cy.get(':nth-child(2) > input').type("Ljungqvist_Marcus@hotmail.com")
        cy.get(':nth-child(3) > input').type("0736637002")

        //pushing save button to create account
        cy.get('.blue').click()
        cy.title().should('include', 'Hotel')
        cy.contains('Marcus Ljungqvist')

        //deleting newly created account
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Hellman')

        //logging out
        cy.get('.user > .btn').click()

        


    })

})