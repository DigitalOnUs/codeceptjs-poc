var assert =  require('assert');

Feature('FAILING REST API DEMO');
// Using local dummy server using JSON-SERVER (pointing towards "dummyserver.json" file)
var url = "http://localhost:3000/posts";
var response, payload, lastID;

Scenario('User can send a GET request', function*(I) {
    // GET request
    response = yield I.sendGet(url);
    assert.equal(response.code, 201, 'GET statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
})

Scenario('User can POST data', function*(I) {
    // POST request
    payload = {
        title: 'Dummy title of a dummy book',
        author: 'Dummy user'
    };
    response = yield I.sendPost(url, {}, payload);
    assert.equal(response.code, 201, 'POST statement did not returned a 201 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:\n${JSON.stringify(response.body)}\n`);
    // GET to verify POST worked
    response = yield I.sendGet(url);
    assert.equal(response.code, 200, 'GET statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Request body:\n${JSON.stringify(response.body)}\n`);
    // Get the ID for the last object posted for future use
    let arrResponse = JSON.parse(response.raw_body);
    let objLast = arrResponse[arrResponse.length - 1];
    lastID = objLast.id;
})

Scenario('User can send a PUT request', function*(I) {
    // PUT request
    payload = {
        title: 'Updated title for the dummy book',
        author: 'Updated user'
    };
    response = yield I.sendPut(url + "/" + lastID, {}, payload);
    assert.equal(response.code, 200, 'PUT statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Updated ID: ${lastID}\n`);
    // GET to verify PUT worked
    response = yield I.sendGet(url);
    assert.equal(response.code, 200, 'GET statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
})

Scenario('User can DELETE data', function*(I) {
    // DELETE request
    response = yield I.sendDelete(url + "/" + lastID);
    assert.equal(response.code, 200, 'DELETE statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Deleted ID: ${lastID}\n`);
    // GET to verify DELETE worked
    response = yield I.sendGet(url);
    assert.equal(response.code, 200, 'GET statement did not returned a 200 OK!');
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
})
