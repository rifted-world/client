var $ = require('jquery'); 
require("jquery-ui-browserify");
const three_interface= require("./modules/three_interface");

$(document).ready(function(){
	console.log("ready");
	const TI = new three_interface;
	TI.init();
	
})
