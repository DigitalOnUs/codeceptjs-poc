Feature('REST http test');

Scenario('I can do GET requests', function*(I) {
    let randomApiResponse = yield I.sendGet('https://randomuser.me/api/')

    I.say(`Status code from the call: ${randomApiResponse.statusCode}`)
    I.say(`Raw response:\n ${randomApiResponse.raw_body}`)
    I.say(`Selecting one item from the json response of this call:\n Gender: ${JSON.stringify(randomApiResponse.body.results[0].gender)}`)
})

Scenario('I can do a POST call', function*(I) {
    let response = yield I.sendPost('http://httpbin.org/post')

    I.say(`Response from ${response.raw_body}`)
})
