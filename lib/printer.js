const network = require('./network');

module.exports = function(document) {
	return network.connect('some server').then( (conn) => {
		conn.send(document + ' ');
    });
}
