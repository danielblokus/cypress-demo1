/// <reference types="cypress" />

import { navigateToHomePage, typeAndSubmitPhrase } from "../page-objects/home-page"
import { clickOnProductThumbnail } from "../page-objects/listing-page"
import { assertUrlIsCorrect, assertThumbnailIsVisible, assertProductNameIsCorrect,
     assertProductPriceIsVisible } from "../page-objects/product-page"

describe('Smoke tests for listing', () => {
    const productName = 'iPhone'

    beforeEach(() => {
        navigateToHomePage()
        typeAndSubmitPhrase(productName)
    })

    it('User can navigate to a product page from listing', () => {
        clickOnProductThumbnail()
        
        assertUrlIsCorrect
        assertThumbnailIsVisible()
        assertProductNameIsCorrect(productName)
        assertProductPriceIsVisible()
    })
})