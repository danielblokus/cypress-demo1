/// <reference types="cypress" />

export function assertUrlIsCorrect() {
    cy.url().should('include', '/index.php?route=product/product*&search='+name)
}

export function assertThumbnailIsVisible() {
    cy.get(':nth-child(1) > .thumbnail').children().should('have.attr', 'src')
}

export function assertProductNameIsCorrect(name) {
    cy.get('.col-sm-4 > h1').contains(name)
}

export function assertProductPriceIsVisible() {
    cy.get(':nth-child(4) > :nth-child(1) > h2').should('have.text', '$123.20')
}