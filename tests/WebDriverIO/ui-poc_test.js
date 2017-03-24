Feature('UI DEMO');
let url = "http://mykidsbank.org/";

Scenario('Open page', function*(I) {
    I.amOnPage(url);
    I.waitForElement({name: 'bank_id'}, 10);
    I.seeElement("//img[@src='topbanner.jpg']");
    I.saveScreenshot("Opened URL.png");
})

Scenario('Sign up', function*(I) {
    let firstName = "John";
    let lastName = "Doe";
    let email = "johndoe." + (Math.floor((Math.random() * 1000) + 1)) + "@dummyserver.com";
    let password = "dummy";
    I.amOnPage(url);
    I.waitForElement({name: 'bank_id'}, 10);
    I.fillField('first_name', firstName);
    I.fillField('last_name', lastName);
    I.fillField('email_address', email);
    I.fillField('email_address2', email);
    I.fillField("(//input[@name = 'password'])[2]", password);
    I.saveScreenshot("Filled signup info.png");
    I.click({css: ".signup_submit_button_class"});
    I.see("Successful request");
})
