/// <reference types="cypress" />

import targets, { base_url, username, password, loginPageCheck, menuPageCheck } from "../targets/targets"

// Elements
const loginButton = '.btn'
const usernameText = ':nth-child(1) > input'
const passwordText = ':nth-child(2) > input'

// Actions
function validLogin() {
    cy.visit(base_url)
    cy.contains(loginPageCheck)
    cy.get(usernameText).type(username)
    cy.get(passwordText).type(password)
    cy.get(loginButton).click()
    cy.contains(menuPageCheck)
}

// Exports

module.exports = {
    validLogin,
}