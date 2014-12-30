var Hapi = require('hapi');
var Good = require('good');
var GoodConsole = require('good-console');
var routes = require('./routes');

var server = Hapi.createServer(process.env.PORT || 3000);

var loggingOpts = {
	reporters: [
		{
			reporter: GoodConsole,
			args:[
				{ request: '*' },
				{ format: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' }
			]
		}
	]
};

server.route(routes);


server.pack.register({ plugin: Good, options: loggingOpts }, function(err) {
	if (err) throw err;
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});