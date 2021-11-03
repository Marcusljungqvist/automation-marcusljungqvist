/// <reference types="cypress" />

import * as targets from "../targets/targets"
const { category, number, floors, avalilable, price, features } = require("../targets/targets");

// Elements
const categorys = 'div.field:nth-child(1) > select:nth-child(2)'
const numbers = 'div.field:nth-child(2) > input:nth-child(2)'
const floor = 'div.field:nth-child(3) > input:nth-child(2)'
const avalilables = '.checkbox'
const prices = 'div.field:nth-child(5) > input:nth-child(2)'
const featuress = 'div.field:nth-child(6) > select:nth-child(2)'
const saveButton = 'a.btn:nth-child(2)'

// Actions
function createNewRoom(){
    cy.get(categorys).select(targets.category)
    cy.get(numbers).type(targets.number)
    cy.get(floor).type(targets.floors)
    cy.get(avalilables).click()
    cy.get(prices).type(targets.price)
    cy.get(featuress).select(targets.features)
    cy.get(saveButton).click()
    cy.contains('Room 2')

}

// Exports
module.exports = {
    createNewRoom,
}