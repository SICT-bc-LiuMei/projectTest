var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
   fs.readFile("data.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','charset':'utf-8'});
       res.end( data );
   });
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
