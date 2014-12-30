var internals = {};

internals.status = function(request, reply) {
	return reply('OK');
};

module.exports = [

    { method: 'GET', path: '/status', handler: internals.status },

];
