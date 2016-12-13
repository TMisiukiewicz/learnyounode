var net = require('net');

var port = process.argv[2];

var server = net.createServer((socket) => {
    var date = new Date();
    var month = date.getMonth() + 1;
    var data = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
    socket.write(data);
    socket.end();
});
server.listen(port);