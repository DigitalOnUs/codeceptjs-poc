/// <reference path="./steps.d.ts" />

Feature('REST http test');

Scenario('I can make multiple GET requests and collect responses', function* (I) {

    let randomApiResponse = yield I.sendGet('https://randomuser.me/api/')
    // I.say(`Status code from the call: ${randomApiResponse.statusCode}`)
    // I.say(`Raw response:\n ${randomApiResponse.raw_body}`)
    // I.say(`Selecting one item from the json response of this call:\n Gender: ${JSON.stringify(randomApiResponse.body.results[0].gender)}`)
    //
    // let postResponse = yield I.sendPost('https://jsonplaceholder.typicode.com/posts', payload={id: 101, title: 'foo', body: 'bar', userId: 1})
    // I.say(`response from ${JSON.stringify(postResponse)}`)
})
