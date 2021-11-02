/// <reference types="cypress" />

import targets, { loginPageCheck } from "../targets/targets"

// Elements
    const roomsPageButton = 'div.block:nth-child(1) > a:nth-child(3)'
    const clientPageButton = 'div.block:nth-child(2) > a:nth-child(3)'
    const billsPageButton = 'div.block:nth-child(3) > a:nth-child(4)'
    const reservationPageButton = 'div.block:nth-child(4) > a:nth-child(4)'
    const logoutButton = 'button.btn'

// Actions
    function enterRoomsPage(cy) {
        cy.get(roomsPageButton).click()
        cy.contains(targets.roomPageCheck)
    }

    function enterClientPage(cy) {
        cy.get(clientPageButton).click()
        cy.contains(targets.clientPageCheck)
    }

    function enterBillsPage(cy) {
        cy.get(billsPageButton).click()
        cy.contains(targets.billPageCheck)
    }

    function enterReservationPage(cy) {
        cy.get(reservationPageButton).click()
        cy.contains(targets.reservationPageCheck)
    }

    function logoutMenu(cy) {
        cy.get(logoutButton).click()
        cy.contains(targets.loginPageCheck)
    }


// Exports
module.exports = {
    enterRoomsPage,
    enterClientPage,
    enterBillsPage,
    enterReservationPage,
    logoutMenu
}