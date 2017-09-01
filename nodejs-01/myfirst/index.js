var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('5711403171 นางสาวจีรนนท์ ล้ำจุมจัง');
}).listen(8080);
