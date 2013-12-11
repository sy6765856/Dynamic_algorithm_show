var http = require('http');
var head = '<head><script type="text/javascript" src="./js/draw.js"></script></head>';
console.log(head);
var app = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(head);
	res.end('<body>Hello  dsd</body>');
};
http.createServer(app).listen(8000);
