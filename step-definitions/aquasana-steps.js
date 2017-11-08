module.exports = function () {

/* 
* Given Steps
*/

    this.Given(/^I am on the Aquasana home page$/, () => {
        return driver.get(page.home.url);
    });

/*
 * When Steps
 */

    this.When(/^I select Spa Days$/, () => {
        return driver.findElement(by.css('body > div.bookingmagnet.parbase > div > section > div.b-tabs.is-hidden-xs > div > div > ul > li:nth-child(1) > button')).click();
    });

    this.When(/^I select Sherwood Forest from the Choose Your Spa dropdown$/, () => {
        return driver.findElement({ id: 'spaVillageCode' }).sendKeys('Sherwood Forest');
    });

    this.When(/^I choose tomorrow's from the Date dropdown$/, () => {
        return driver.findElement({ id: 'spaDayDatePicker'}).sendKeys('\uE014', 'Enter');
    });
   
    this.When(/^I set 2 days on the Flexibility dropdown$/, () => {
        return driver.findElement({ id: 'dayDifference'}).sendKeys('+/- 2 days');
    });

    this.When(/^I click Search Now$/, () => {
        return driver.findElement(by.css('.btn-search')).click();
    });

    this.When(/^I select More Information on the first result$/, () => {
        return driver.findElement(by.css('body > main > div > div.page.page--generic > div > div.page-body > div > div > div.pad-tb-10 > section > article:nth-child(2) > div.b-product__body > div.b-product__desc > a')).click();
    });
    
    this.When(/^I select the first available date$/, () => {
        return driver.findElement(by.css('div.b-availability-widget__body > fieldset:nth-child(1) > label:nth-child(2)')).click();
    });

    this.When(/^I choose 2 guests$/, () => {
        var element = driver.findElement(by.css('div.show > select > option:nth-child(2)'));
        driver.executeScript("arguments[0].scrollIntoView()", element);
        driver.sleep(300);
        element.click();
        return driver.sleep(5000);
    });

    this.When(/^I book my selection$/, () => {
        // helpers.clickHiddenElement('body > main > div.page.page--generic > div > div > div > div > div > div.col-sm-4 > section > section > form > div.b-availability-widget__body > div > a', 'Book Spa days')
        // return driver.sleep(5000);
        var element = driver.findElement(by.css('body > main > div.page.page--generic > div > div > div > div > div > div.col-sm-4 > section > section > form > div.b-availability-widget__body > div > a'));
        driver.executeScript("arguments[0].scrollIntoView()", element);
        driver.sleep(300);
        element.click();
        return driver.sleep(5000)
    });
/*
 * Then Steps
 */

    this.Then(/^I should see many search results$/, () => {
        return driver.findElements(by.css('.b-search-results'));
    });

    this.When(/^I click navigation item "([^"]*)"$/, function (linkTitle) {

        // click an item in the search results via the google page object
        return page.mammothWorkwear.clickNavigationItem(linkTitle);
    });

    this.Then(/^I click product item "([^"]*)"$/, function (productTitle) {

        // click an item in the search results via the google page object
        return page.mammothWorkwear.clickProductItem(productTitle);
    });

    this.Then(/^I should see product detail with title "([^"]*)"$/, function (pageTitle) {

        return page.mammothWorkwear.titleContains(pageTitle);
    });
};    