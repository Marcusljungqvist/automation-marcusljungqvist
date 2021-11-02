/// <reference types="cypress" />

import * as targets from "../targets/targets"

// Elements
const valueInput = 'div.field:nth-child(1) > input:nth-child(2)'
const checkBox = '.checkbox'
const saveButton = 'a.btn:nth-child(2)'
const backButton = 'a.btn:nth-child(1)'

// Actions

function createBill () {
    cy.get(valueInput).click().type('1337')
    if (checkBox == '✓'){
        cy.get(checkbox).click()
    }
    cy.get(saveButton).click()
    cy.contains(targets.billPageCheck)
    cy.contains('1337kr')
}

// Exports
module.exports = {
    createBill,
}