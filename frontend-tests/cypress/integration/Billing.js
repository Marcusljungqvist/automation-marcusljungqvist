/// <reference types="cypress" />

//Test suite 'Billing'
describe('Billing', function(){

    //Test case 'Create a bill'
    it('Create a bill', function(){

        //Login to test site
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        //Create bill
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')

        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        
        cy.get('input').type('1337')
        cy.get('.blue').click()
        cy.contains('ID: 2')

        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')

        //Logout
        //cy.get('.user > .btn').click()
        //cy.contains('Login')
    })

    //Test case 'Pay a bill'
    it('Pay a bill', function(){
        
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')

        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('Bill: 2')

        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.contains('Paid: Yes')

    })

    //Test case 'delete a bill'
    it('Delete a bill', function(){

        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()

        cy.contains('ID: 2').should('not.exist')

    })

})