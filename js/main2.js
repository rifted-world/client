console.log("run");

var manager = nipplejs.create(options);
var st;
var connection = new WebSocket('ws://localhost:8080', ['soap', 'xmpp']);

connection.onopen = function () {
  st = window.performance.now();
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
  var now = window.performance.now() - st;
  console.log('Server '+ now + " - " + e.data);

};