Feature('FAILING UI DEMO');
let url = "http://mykidsbank.org/";

Scenario('Open page', function*(I) {
    I.amOnPage(url);
    I.waitForElement({name: 'bank_id'}, 10);
    I.seeElement("//img[@src='topbanner.jpg']");
    I.saveScreenshot("Opened URL.png");
    I.seeCurrentUrlEquals('/signup');   //false
})
