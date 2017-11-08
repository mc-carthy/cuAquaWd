const Page = require('./page');

const bookingDetailsPage = Object.create(Page, {

    firstDate:      { value: 'div.b-availability-widget__body > fieldset:nth-child(1) > label:nth-child(2)' },
    numberOfGuests: { value: '//*[@id="0"]/select' },
    bookButton:     { value: '.js-book-activity' }

});

module.exports = bookingDetailsPage;