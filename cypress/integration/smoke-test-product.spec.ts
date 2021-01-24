import { HomePage } from "../page-objects/home";
import { ListingPage } from "../page-objects/listing";
import { ProductPage } from "../page-objects/product";

it('Should display info about a product', () => {
    const productName = 'iPhone'
    const homePage = new HomePage();
    homePage.navigateToHomePage();
    homePage.searchInput.type(productName).type('{ENTER}');
    const listingPage = new ListingPage();
    listingPage.clickOnProductThumbnail();
    const productPage = new ProductPage();
    productPage.assertUrlIsValid();
    productPage.assertProductNameIsCorrect(productName);
    productPage.assertMainThumbnailIsVisible();
    productPage.assertProductPriceIsVisible();
});

it('Playing with Cypress Studio', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://demo.opencart.com/');
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').click();
    cy.get('.open > .dropdown-menu > .see-all').click();
    cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=product/category&path=20_27"]').click();
    cy.get('.breadcrumb > :nth-child(2) > a').click();
    cy.get('.breadcrumb > :nth-child(1) > a > .fa').click();
    /* ==== End Cypress Studio ==== */
});
