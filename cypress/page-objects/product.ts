const productThumbnailSelector: string = '.img-responsive';
const productPrice: string = '$123.20'; 
const mainThumbnail: string = ':nth-child(1) > .thumbnail';
const productPriceHeader: string = ':nth-child(4) > :nth-child(1) > h2';
const productNameHeader: string = '.col-sm-4 > h1';

export class ProductPage {
    assertUrlIsValid() {
        cy.url().should('include', `/product&product_id=40&search=${name}`)
    }

    assertMainThumbnailIsVisible() {
        cy.get(mainThumbnail).children().should('have.attr', 'src')
    }
    
    assertProductNameIsCorrect(name: string) {
        cy.get(productNameHeader).contains(name)
    }
    
    assertProductPriceIsVisible() {
        cy.get(productPriceHeader).should('have.text', productPrice)
    }
}