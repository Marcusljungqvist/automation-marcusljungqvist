/// <reference types="cypress" />


// Elements
    const createClient = 'h2 > .btn'
    const logout = 'button.btn'
    const back = 'a.btn:nth-child(1)'
    const tools1 = 'div.card:nth-child(1) > div:nth-child(3) > img:nth-child(1)'
    const tools2 = 'div.card:nth-child(2) > div:nth-child(3) > img:nth-child(1)'
    const tools3 = 'div.card:nth-child(3) > div:nth-child(3) > img:nth-child(1)'
    const edit1 = 'div.card:nth-child(1) > div:nth-child(4) > a:nth-child(1)'
    const edit2 = 'div.card:nth-child(2) > div:nth-child(4) > a:nth-child(1)'
    const edit3 = 'div.card:nth-child(3) > div:nth-child(4) > a:nth-child(1)'
    const delete1 = 'div.card:nth-child(1) > div:nth-child(4) > a:nth-child(2)'
    const delete2 = 'div.card:nth-child(2) > div:nth-child(4) > a:nth-child(2)'
    const delete3 = 'div.card:nth-child(3) > div:nth-child(4) > a:nth-child(2)'
    const deleteContain = '#3'

// Actions
    function enterCreateClient(){
        cy.get(createClient).click()
        cy.contains('New Client')
    }

    function logoutFromMenu() {
        cy.get(logout).click
        cy.contains(loginPageTitle)
    }

    function editclient1() {
        cy.get(tools1).click()
        cy.contains('Client: 1')
    }

    function deleteClient3() {
        cy.get(tools3).click()
        cy.get(delete3).click()
        cy.contains(deleteContain).should('not.exist')
    }
// Exports
    module.exports = {
        enterCreateClient,
        logoutFromMenu,
        deleteClient3
    }