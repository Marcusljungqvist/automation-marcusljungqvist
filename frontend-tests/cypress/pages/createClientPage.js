/// <reference types="cypress" />

import * as targets from "../targets/targets"

// Elements
const backButton = 'a.btn:nth-child(1)'
const saveButton = 'a.btn:nth-child(2)'
const nameText = ':nth-child(1) > input'
const emailText = ':nth-child(2) > input'
const telText = ':nth-child(3) > input'


// Actions
function createClient (){
    cy.get(nameText).type(targets.namn)
    cy.get(emailText).type(targets.email)
    cy.get(telText).type(targets.tel)
    cy.get(saveButton).click()
}

function backToMenu () {
    cy.get(backButton).click()
    cy.contains(targets.menuPageCheck)
}

// Exports
module.exports = {
    createClient,
    backToMenu
}