var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
  res.writeHead(200,{'content-type':'image/jpg'});
  fs.createReadStream('./intel.jpg').pipe(res);
}).listen(3000);
console.log('server running at 3000');
