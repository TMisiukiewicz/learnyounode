var fs = require('fs');

var text = fs.readFileSync(process.argv[2], 'utf-8').split('');

// var splitText = text.split('');
var sum = 0;
for(var i=0; i < text.length; i++) {
    if(text[i] == '\n') {
        sum++;
    }
}
console.log(sum);