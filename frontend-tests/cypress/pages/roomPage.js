/// <reference types="cypress" />

import { editRoomPageCheck, newRoomPageCheck } from "../targets/targets"

// Elements
const createRoomButton = 'a.btn:nth-child(2)'
const tools1 = 'div.card:nth-child(1) > div:nth-child(3) > img:nth-child(1)'
const tools2 = 'div.card:nth-child(2) > div:nth-child(3) > img:nth-child(1)'
const tools3 = 'div.card:nth-child(3) > div:nth-child(3) > img:nth-child(1)'
const editRoom = '.menu > a:nth-child(1)'
const deleteRoom = '.menu > a:nth-child(2)'
const backButton = 'a.btn:nth-child(1)'

// Actions
function createRoom (){
    cy.get(createRoomButton).click()
    cy.contains(newRoomPageCheck)
}
function editRoom1 (){
    cy.get(tools1).click()
    cy.get(editRoom).click()
    cy.contains(editRoomPageCheck)
}
function deleteRoom3 (){
    cy.get(tools3).click()
    cy.get(deleteRoom).click()
    cy.contains('Room 2').should('not.exist')
}


// Exports
module.exports = {
    createRoom,
    editRoom1,
    deleteRoom3,

}