var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var result = '';
var responses = [];
urls.forEach((value, index) => {
    http.get(value, (response) => {
        response.setEncoding('utf8');
        response.on('data', (data) => {
            result += data;
        }).on('end', () => {
            responses[index] = result;
            if(responses.length == 3) {
                for(var i = 0; i < responses.length; i++) {
                    console.log(responses[i]);
                }
            }
            // console.log(result);
            result = '';
        });
    });
})