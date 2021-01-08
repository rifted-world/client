var $ = require('jquery'); 
//Entrypoint
function show(){
	$('.debug_button').on('click',function(){
		$('.debug_menu').toggleClass('hidden');
	})
	import_menu()	
}

function import_menu(){
	$.ajax({
		type: "GET",
		url: "/ajax/devmenu.html",
		success: function(data){
			$('.debug_menu').html(data);

		},
		complete: load_tabs
	})
}
function load_tabs(){
	$( "#tabs" ).tabs();
	$('.preload').each(function(){
		var elem = $(this);
		var target = $(this).html();
		$.ajax({
			type: "GET",
			url: "/ajax/devmenu/"+target+".html",
			success: function(data){
				
				elem.html(data);
			},
			complete: function(){
				$('.debug_close').on('click',function(){
					$('.debug_menu').toggleClass('hidden');
					console.log("close");
				})
				
			}
		})
	})
}

module.exports  = {
	show
}