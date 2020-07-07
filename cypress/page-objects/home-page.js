/// <reference types="cypress" />

const homePageUrl = 'https://demo.opencart.com/'

export function navigateToHomePage() {
    cy.visit(homePageUrl)
}

export function typeAndSubmitPhrase(phrase) {
    cy.get('#search > input').type(phrase + "{enter}")
}
