module.exports = {
    
    url: 'https://www.aquasana.co.uk',

    elements: {
        spaDayLink: 'body > div.bookingmagnet.parbase > div > section > div.b-tabs.is-hidden-xs > div > div > ul > li:nth-child(1) > button',
        spaSelectDropdown: '#spaVillageCode',
        spaDatePicker: '#spaDayDatePicker',
        flexibilityDropdown: '#dayDifference',
        searchButton: '.btn-search'
    },

    clickNavigationItem: function(containingText) {

        return helpers.clickHiddenElement(page.mammothWorkwear.elements.menuItem, containingText);
    },

    clickProductItem: function(containingText) {

        return helpers.clickHiddenElement(page.mammothWorkwear.elements.productItem, containingText);
    },

    titleContains: function(expectedTitle) {

        return driver.getTitle(function(pageTitle) {
            expect(pageTitle).to.contain(expectedTitle);
        });
    }
};