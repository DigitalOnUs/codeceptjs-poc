# Using WebDriverIO on CodeceptJS
***
External references:
* [WebDriverIO helper](http://codecept.io/helpers/WebDriverIO/)
* [Demo script](./ui-poc_test.js)

## Setting up WebDriverIO

WebDriverIO helper should be configured inside your ```codecept.json```configuration file.
Like this:
```js
{
    "tests": "./tests/**/*_test.js",
    "timeout": 10000,
    "output": "./output",
    "helpers": {
        "WebDriverIO" : {
           "url": "about:blank",
           "browser": "chrome",
           "restart": false,
           "windowSize": "maximize",
           "timeouts": {
             "script": 60000,
             "page load": 10000,
             "implicit" : 5000
           }
        }
    },
    "include": {},
    "bootstrap": false,
    "mocha": {
        "reporterOptions": {
            "reportDir": "mochaReports"
        }
    },
    "name": "codecept-poc"
}
```
_For more information regarding WebDriverIO/CodeceptJS configuration, visit the first link above_

### Selenium stand-alone server is needed
Once you have downloaded [Selenium stand-alone server](http://docs.seleniumhq.org/download/), you'll need to start it as follows:
```
java -jar selenium-server-standalone-3.1.0.jar
```

### MOCHAWESOME reports library _(optional)_
If you wish to include HTML reports, also include MochAwesome library to your project folder:
```
npm -i mochawesome
```
