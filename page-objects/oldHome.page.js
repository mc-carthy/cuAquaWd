const Page = require('./page');

const homePage = Object.create(Page, {

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    title:                  { value: 'Spa Days and Spa Breaks | Aqua Sana' },
    url:                    { value: 'https://www.aquasana.co.uk/' },
    spaDayLink:             { value: 'body > div.bookingmagnet.parbase > div > section > div.b-tabs.is-hidden-xs > div > div > ul > li:nth-child(1) > button' },
    // spaDayLink:             { value : '//button[contains(@text, "Spa Days")]' }
    spaSelectDropdown:      { value: '#spaVillageCode' },
    spaDatePicker:          { value: '#spaDayDatePicker'},
    flexibilityDropdown:    { value: '#dayDifference' },
    searchButton:           { value: '.btn-search' }

});

module.exports = homePage;
