var $ = require('jquery'); 
require("jquery-ui-browserify");
const three_interface= require("./modules/ThreeInterface");

$(document).ready(function(){
	console.log("ready");
	const TI = new ThreeInterface; 
	TI.init();
	
})
