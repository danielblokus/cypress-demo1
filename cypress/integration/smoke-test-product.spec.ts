import { HomePage } from "../page-objects/home";
import { ListingPage } from "../page-objects/listing";
import { ProductPage } from "../page-objects/product";

it('Should display info about product', () => {
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
