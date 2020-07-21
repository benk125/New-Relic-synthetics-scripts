/**
*Feel free to explore, or check out the full documentation
*https//docs newrelic,com/docs/syntheties/newrelic-synthetics/scrfpting monitors/writing-api-tests
*for details
*/

var asset = require('assert')
var hostURL = ''
var auth = ''
var options = {
    //Define endpoint URI
    uri: hostURL,
    //Define query key and expected data type
    headers: {
    'Authorization': auth, 
    'Content-Type': 'application/json'
    }
};
 

//Define expected results using callback function.
function callback (err response, body) {
//Log JSON results from endpoint to Synthetics console
    var bodyParsed = JSON. parse(body)
    assert.ok(response.statuscode == 200, 'Expected 200 OK response');
}

// Make GET request, passing in options and callback,
$http.get (options, callback)


