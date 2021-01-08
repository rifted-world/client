class Uplink{
	
	constructor(){
		let connection = new WebSocket('ws://localhost:446', ['soap', 'xmpp']);
		connection.onopen = function () {
			connection.send('Ping'); // Send the message 'Ping' to the server
		};
		connection.onerror = function (error) {
			console.log('WebSocket Error ' + error);
		};
		connection.onmessage = function (e) {
			window.dev.recieve_chat(e.data);
			console.log('Server ' + e.data);
		};


		this.connection = connection;
	}

	ws_start(){
		

		// Log errors
		connection.onerror = function (error) {
			console.log('WebSocket Error ' + error);
		};

		// Log messages from the server

	}

	send(data){
		this.connection.send(data);
		console.log("test ok")
	}
	recieve(){

	}
	

}
module.exports = Uplink;
