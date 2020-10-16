const productThumbnailSelector: string = '.img-responsive'; 

export class ListingPage {
    clickOnProductThumbnail() {
        cy.get(productThumbnailSelector).click();
    }
}