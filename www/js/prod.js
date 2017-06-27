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
			$("#comlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus" href=""><i class="fa fa-plus addI"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });
    
    $.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {bebida: 'bebida'},
	
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
	data: {postres: 'postres'},
	
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
	data: {varios: 'varios'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#varlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus"><i class="fa fa-plus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });

    $("#varlist,#comlist,#beblist,#poslist").on('click', '.aplus', function(e) {
    	var text= $(this).parent().text().split("$");
    	$("#pedidoL").append('<li><p class="pname">'+text[0]+' <span class="price">$'+text[1]+'</span></p> </li>');
    	
    	if(localStorage.getItem("prods")==null){
    		localStorage.setItem("prods",text[0]);
    		localStorage.setItem("prices",text[1]);
    	}else{
    		localStorage.setItem("prods",localStorage.getItem("prods")+","+text[0]);
    		localStorage.setItem("prices",localStorage.getItem("prices")+","+text[1]);
    	}
       $("#total").trigger("contentchanged");
    });
    $(document).on('contentchanged', '#total', function() {
    	$("#total").html("");
    	var prods = localStorage.getItem("prods").toString().split(",");
    	var prices = localStorage.getItem("prices").toString().split(",");
    	var total = 0;
    	for(var i=0;i<prods.length;i++){
    		total = total + parseInt(prices[i]);
    	}
        $("#total").append('<p>Total de orden (2 artículo)</p><h1 >$'+total+'</h1>');
     
    });
});
