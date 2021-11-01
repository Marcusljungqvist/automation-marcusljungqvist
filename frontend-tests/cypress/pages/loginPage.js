/// <reference types="cypress" />

import targets, { base_url, username, password } from "../targets/targets"

// Elements
const loginPageTitle = 'Login'
const loginButton = '.btn'
const menuPageTitle = 'Tester Hotel Overview'
const usernameText = ':nth-child(1) > input'
const passwordText = ':nth-child(2) > input'

// Actions
function validLogin() {
    cy.visit(base_url)
    cy.title().should('include', 'Hotel')
    cy.contains(loginPageTitle)

    cy.get(usernameText).type(username)
    cy.get(passwordText).type(password)
    cy.get(loginButton).click()
    cy.contains(menuPageTitle)
}

function logout() {
    cy.get('.user > .btn').click()
    cy.contains(loginPageTitle)
}

// Exports

module.exports = {
    validLogin,
    logout
}