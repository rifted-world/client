var $ = require('jquery'); 
//window.jQuery = $ = require("jquery");
require("jquery-ui-browserify");
const three_interface= require("./modules/ThreeInterface");
const dev_menu = require("./modules/devmenu");
let uplink  = require("./modules/uplink");

$(document).ready(function(){
	console.log("ready");
	//const TI = new ThreeInterface; 
	//TI.init();

    window.ws = new uplink();
	window.dev= new dev_menu(ws);

	


	dev.show();
	/*
	setTimeout(function(){
		dev.sendchat();
	},5000)
	*/
	//uplink.ws_start();
	
})
