# Using REST API on CodeceptJS
External references:
* [Helpers API](https://github.com/Codeception/CodeceptJS/blob/master/docs)
* [Demo script](./rest-poc_test.js)

## Introduction
***
After getting familiar with how CodeceptJS is written and how it behaves, you should also take
into account that it comes with a REST library that enables CodeceptJS for any type of
RESTful service test with the main methods _(GET, POST, PUT and DELETE)_

This is how it would look:

```js
Feature('CodeceptJS REST demo');

Scenario('I can do GET requests', (I) => {
  let response = yield I.sendGet('https://jsonplaceholder.typicode.com/posts/1/');
  I.say('Response body: ' + response.raw_body);
});
```

## Getting started
Before starting, the REST helper should be configured inside your ```codecept.json```configuration file.
Like this:
```js
{
    "tests": "./tests/**/*_test.js",
    "timeout": 10000,
    "output": "./output",
    "helpers": {
        "REST": {}
    },
    "include": {},
    "bootstrap": false,
    "mocha": {},
    "name": "codecept-poc"
}
```

### How to use the REST library
***
The following are a few pointers on how the REST library should be used:

1. **_GET requests_**
```js
let response = yield I.sendGet(URL, HEADERS, AUTH);
```
The GET request will retrieve information from an endpoint and store it within the "response" object.
1. **URL** _(string)_: The URL/URI of the endpoint being used. This is a simple string
2. **HEADERS** _(optional object)_: The headers of the GET request. These are empty by default and can be taken out of a simple GET request.
```js
// Here's an example of how to send a GET request with headers...
let headers = {
    'Content-Type': 'application/json'
};
let url = 'https://dummyurl.com/service'
let response = yield I.sendGet(url, headers);
```
3. **AUTH** _(optional object)_: Used when the GET request requires authentication. It uses an specific object:
```js
// Here's an example of how to send a GET request with headers and authentication object...
let headers = {
    'Content-Type': 'application/json'
};
let auth = {
    user: 'DummyUser',  // Authentication user
    pass: 'DummyPassword',  // Authentication password
    sendImmediately: true   // Optional (defaults to true) Flag to determine whether the request should send the basic authentication header along with the request.
                                          // Upon being false, Request will retry with a proper authentication header after receiving a 401 response from the server
}
let url = 'https://dummyurl.com/secureservice'
let response = yield I.sendGet(url, headers, auth);
```

2. **_POST requests_**
```js
let response = yield I.sendPost(URL, HEADERS, REQUEST BODY OR PAYLOAD);
```
The POST request will insert information into the endpoint and store any response from the server within the "response" object
1. **REQUEST BODY or PAYLOAD** _(object)_: This is the data you wish to post.
```js
let headers = {
    'Content-Type': 'application/json'
};
let payload = {
    title: 'Dummy book title',
    author: 'Dummy author name'
};
let url = 'https://dummyurl/books';
let response = yield I.sendPost(url, headers, payload);
// This request will add a new book with the "title" and "author" described within the "payload" object
```

3. **_PUT requests_**
```js
let response = yield I.sendPut(URL, HEADERS, REQUEST BODY OR PAYLOAD);
```
The PUT request will update an object determined within the URL and it will use the information within the payload. It will also store any response from the server within the "response" object
```js
let headers = {
    'Content-Type': 'application/json'
};
let payload = {
    title: 'An updated book title',
    author: 'Updated author name'
};
let url = 'https://dummyurl/books/1';   // This will indicate that the updated object should be the one with id = 1
let response = yield I.sendPut(url, headers, payload);
// This request will update book with id = 1 with the new "title" and "author" described within the "payload" object
```

4. **_DELETE requests_**
```js
let response = yield I.sendDelete(URL, HEADERS);
```
The DELETE request will remove an object determined within the URL and it will store any response from the server within the "response" object
```js
let headers = {
    'Content-Type': 'application/json'
};
let url = 'https://dummyurl/books/1';   // This will indicate that the removed object should be the one with id = 1
let response = yield I.sendPut(url, headers, payload);
// This request will remove book with id = 1 from the endpoint
```

### RESPONSE object
***
The response object contains valuable information depending the method of the request previously sent.
For example:
* Response code for the request (important to know the result of sending the request to the server)
* Response body (a complex object containing all the information about the response, mainly important for a GET request)
__For more information on how the request/response object should work, visit [unirest.io](http://unirest.io/nodejs.html), UNIREST is the library being used__

### Try it for yourself!
In order to try this out you could:
1. Install [JSON-SERVER](https://github.com/typicode/json-server) which is a local dummy api that stores information within a JSON file
2. Configure and start the service
3. Start creating your CodeceptJS scenarios
4. Run CodecepJS ```codecepjs run --steps```  
5. Enjoy!
