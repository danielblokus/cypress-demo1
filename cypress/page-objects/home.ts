const homePageUrl: string = 'https://demo.opencart.com/';
const searchInputSelector: string = '#search > input';

export class HomePage {

    navigateToHomePage() {
        cy.visit(homePageUrl);
    }

    get searchInput() {
        return cy.get(searchInputSelector);
    }
}