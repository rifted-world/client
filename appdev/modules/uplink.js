
function ws(){
	var connection = new WebSocket('ws://localhost:8080', ['soap', 'xmpp']);

	connection.onopen = function () {

	connection.send('Ping'); // Send the message 'Ping' to the server
	};

	function test(){
	st = window.performance.now();
	connection.send('Ping/test'); // Send the message 'Ping' to the server
	}
	// Log errors
	connection.onerror = function (error) {
	console.log('WebSocket Error ' + error);
	};

	// Log messages from the server
	connection.onmessage = function (e) {
	
	console.log('Server ' + e.data);

	};
}

module.exports = {
	ws,
}