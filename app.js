var http = require('http');

var modulesPath = './modules/';

var head = require(modulesPath + 'head.js'),
    body = require(modulesPath + 'body.js'),
    draw = require(modulesPath + 'draw.js');

var app = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(head.content);
	res.end(body.content);
};
http.createServer(app).listen(8000);
