$(document).ready(function(){
	

	$.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {comida: 'comida'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#comlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus"><i class="fa fa-plus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });
    
    $.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {comida: 'bebida'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#beblist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus"><i class="fa fa-plus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });
    
    $.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {comida: 'postres'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#poslist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus"><i class="fa fa-plus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });
    
    $.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {comida: 'varios'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#varlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus"><i class="fa fa-plus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });


});
