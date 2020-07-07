/// <reference types="cypress" />

export function navigateToHomePage() {
    cy.visit('https://demo.opencart.com/')
}

export function typeAndSubmitPhrase(phrase) {
    cy.get('#search > input').type(phrase + "{enter}")
    // .input-lg
}