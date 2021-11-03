/// <reference types="cypress" />

import * as targets from "../targets/targets"

// Elements

const createBill = 'a.btn:nth-child(2)'
const tools1 = 'div.card:nth-child(1) > div:nth-child(4) > img:nth-child(1)'
const tools2 = 'div.card:nth-child(2) > div:nth-child(4) > img:nth-child(1)'
const editBills = '.menu > a:nth-child(1)'
const deleteBills = '.menu > a:nth-child(2)'

// Actions

function createBillPage (){
    cy.get(createBill).click()
    cy.contains(targets.newBillPageCheck)
}
function editBill (){
    cy.get(tools2).click()
    cy.get(editBills).click()
    cy.contains(targets.editBillPageCheck)
}
function deleteBill (){
    cy.get(tools2).click()
    cy.get(deleteBills).click()
    cy.contains('ID: 2').should('not.exist')
}

// Exports
module.exports = {
    createBillPage,
    editBill,
    deleteBill,
    
}