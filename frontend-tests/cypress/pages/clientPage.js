/// <reference types="cypress" />

import * as targets from "../targets/targets"

// Elements
    const createClient = 'h2 > .btn'
    const loginPageTitle = 'Login'
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
    const deleteContains = '#3'
    const editthree = 'Client: 3'

// Actions
    function enterCreateClient(){
        cy.get(createClient).click()
        cy.contains(targets.newClientPageCheck)
    }

    function logoutFromClient() {
        cy.get(logout).click()
        cy.contains(loginPageTitle)
    }

    function editClient3() {
        cy.get(tools3).click()
        cy.get(edit3).click()
        cy.contains(editthree)
    }

    function deleteClient3() {
        cy.get(tools3).click()
        cy.get(delete3).click()
        cy.contains(deleteContains).should('not.exist')
    }
// Exports
    module.exports = {
        enterCreateClient,
        logoutFromClient,
        editClient3,
        deleteClient3
    }