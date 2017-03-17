Feature('FEATURE: REST SERVICES DUMMY TEST');
// Using local dummy server using JSON-SERVER (pointing towards "dummyserver.json" file)
var url = "http://localhost:3000/posts";
var response, payload, lastID;

Scenario('E2E Workflow', function*(I) {
    // GET request
    response = yield I.sendGet(url);
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
    // POST request
    payload = {
        title: 'Dummy title of a dummy book',
        author: 'Dummy user'
    };
    response = yield I.sendPost(url, {}, payload);
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:\n${JSON.stringify(response.body)}\n`);
    // GET to verify POST worked
    response = yield I.sendGet(url);
    I.say(`Response code: ${response.code}`);
    I.say(`Request body:\n${JSON.stringify(response.body)}\n`);
    // Get the ID for the last object posted for future use
    let arrResponse = JSON.parse(response.raw_body);
    let objLast = arrResponse[arrResponse.length - 1];
    lastID = objLast.id;
    // PUT request
    payload = {
        title: 'Updated title for the dummy book',
        author: 'Updated user'
    };
    response = yield I.sendPut(url + "/" + lastID, {}, payload);
    I.say(`Response code: ${response.code}`);
    I.say(`Updated ID: ${lastID}\n`);
    // GET to verify PUT worked
    response = yield I.sendGet(url);
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
    // DELETE request
    response = yield I.sendDelete(url + "/" + lastID);
    I.say(`Response code: ${response.code}`);
    I.say(`Deleted ID: ${lastID}\n`);
    // GET to verify DELETE worked
    response = yield I.sendGet(url);
    I.say(`Response code: ${response.code}`);
    I.say(`Response body:${JSON.stringify(response.body)}\n`);
})
