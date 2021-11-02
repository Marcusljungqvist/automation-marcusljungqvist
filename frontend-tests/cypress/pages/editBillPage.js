/// <reference types="cypress" />

import * as targets from "../targets/targets"


// Elements
const value = 'div.field:nth-child(3) > input:nth-child(2)'
const paidBox = '.checkbox'
const saveButton = '.blue'
const backButton = 'a.btn:nth-child(1)'


// Actions
function editBill1 () {
cy.get(value).click().clear().type('3000')
cy.get(saveButton).click()
cy.contains(targets.billPageCheck)
}

function payBill1 (){
    cy.get(paidBox).click()
    cy.get(saveButton).click()
    cy.contains(targets.billPageCheck)
    cy.contains('Paid: Yes')
}

// Exports
module.exports = {
    editBill1,
    payBill1

}