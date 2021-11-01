/// <reference types="cypress" />


// Elements
    const roomsPageButton = 'div.block:nth-child(1) > a:nth-child(3)'
    const clientPageButton = 'div.block:nth-child(2) > a:nth-child(3)'
    const billsPageButton = 'div.block:nth-child(3) > a:nth-child(4)'
    const reservationPageButton = 'div.block:nth-child(4) > a:nth-child(4)'
    const logoutButton = 'button.btn'

// Actions
    function enterRoomsPage() {
        cy.get(roomsPageButton).click()
        cy.contains('Rooms')
    }

    function enterClientPage() {
        cy.get(clientPageButton).click()
        cy.contains('Clients')
    }

    function enterBillsPage() {
        cy.get(billsPageButton).click()
        cy.contains('Bills')
    }

    function enterReservationPage() {
        cy.get(reservationPageButton).click()
        cy.contains('Reservations')
    }

// Exports
module.exports = {
    enterRoomsPage,
    enterClientPage,
    enterBillsPage,
    enterReservationPage
}