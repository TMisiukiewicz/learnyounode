var http = require('http');

var url = process.argv[2];
var count = 0;
var string = '';
http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
        count += data.length;
        string += data;
    }).on('end', () => {
        console.log(count);
        console.log(string);
    })
})