var http = require('http');
var map = require('through2-map');

var stream = map(function(chunk) {
    return chunk.toString().toUpperCase();
})

var server = http.createServer((request, response) => {
    if(request.method == 'POST') {
        request.pipe(stream).pipe(response);
    }
});

server.listen(process.argv[2]);