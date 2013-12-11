var http = require('http');
var app = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<title>Hello</title>');
	res.end('<body>Hello  dsd</body>');
};
http.createServer(app).listen(8000);