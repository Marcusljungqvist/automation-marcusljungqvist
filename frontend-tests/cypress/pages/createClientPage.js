/// <reference types="cypress" />

import faker from 'faker'
import * as targets from "../targets/targets"

// Elements
const backButton = 'a.btn:nth-child(1)'
const saveButton = 'a.btn:nth-child(2)'
const nameText = ':nth-child(1) > input'
const emailText = ':nth-child(2) > input'
const telText = ':nth-child(3) > input'


// Actions
function createClient (){
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email()
    let tel = faker.phone.phoneNumber()

    cy.get(nameText).type(firstName + " " + lastName)
    cy.get(emailText).type(email)
    cy.get(telText).type(tel)
    cy.get(saveButton).click()
    cy.contains(targets.clientPageCheck)
    cy.contains(firstName + " " + lastName)
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