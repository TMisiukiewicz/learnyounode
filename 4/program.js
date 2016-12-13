var fs = require('fs');

var sum = 0;
fs.readFile(process.argv[2], 'utf-8', function countNewlines(err, content) {
    var split = content.split('');
    for(var i=0; i < split.length; i++) {
        if(split[i] == '\n') {
            sum++;
        }
    }
    console.log(sum);
});