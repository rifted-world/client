var $ = require('jquery'); 
//Entrypoint

class DevMenu{
	
	constructor(uplink){
		this.uplink = uplink;
	}

	show(){
		
		$('.debug_button').on('click',function(){
			$('.debug_menu').toggleClass('hidden');
		})
		this.import_menu()	
	}

	import_menu(){
		$.ajax({
			type: "GET",
			url: "/ajax/devmenu.html",
			success: function(data){
				$('.debug_menu').html(data);

			},
			complete: this.load_tabs
		})
	}
	sendchat(){
		this.uplink.send("senden");
		console.log("keyup");
	}

	setkeyup(){
		$('#chatinput_form').bind("enterKey",function(e){
			this.uplink.send("senden");
			console.log("ok");
		});

		$('#chatinput_form').keyup(function(e){
			if(e.keyCode == 13)
			{
				$(this).trigger("enterKey");
			}
		});
	}

	load_tabs(){
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
					$('#chatinput_form').bind("enterKey",function(e){
						window.ws.send($('#chatinput_form').val());
					});
					$('#chatinput_form').keyup(function(e){
						if(e.keyCode == 13)
						{
							$(this).trigger("enterKey");
						}
					});
				}
			})
		})
	}

	recieve_chat(data){
		$('#chatdisplay').append("<div class='chatrow'> " + data + "</div>")
	}
}
module.exports  = DevMenu;