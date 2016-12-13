var fs = require('fs');
var path = require('path');

var mydir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(mydir, (err, list) => {
    if(err) throw err;
     list.forEach((filename) => {
         var extension = path.extname(filename);
         if(extension === filter) {
             console.log(filename);
         }
     })
});