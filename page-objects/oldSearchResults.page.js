const Page = require('./page');

const searchResultsPage = Object.create(Page, {

    result:                 { value: '.b-search-results'},
    moreInfoFirstResult:    { value: '/html/body/main/div/div[2]/div/div[2]/div/div/div[4]/section/article[1]/div[2]/div[2]/a' }

});

module.exports = searchResultsPage;
