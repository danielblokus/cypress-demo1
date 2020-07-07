/// <reference types="cypress" />

export function clickOnProductThumbnail() {
    cy.get('.img-responsive').click()
}