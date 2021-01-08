var $ = require('jquery'); 
require("jquery-ui-browserify");
const three_interface= require("./modules/ThreeInterface");
const dev_menu = require("./modules/devmenu");
let { ws } = require("./modules/uplink");

$(document).ready(function(){
	console.log("ready");
	//const TI = new ThreeInterface; 
	//TI.init();

    dev_menu.show();

	ws();
	
})
