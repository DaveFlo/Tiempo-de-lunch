$(document).ready(function(){
	var prods =new Array();
    var prices =new Array();
    document.addEventListener("backbutton", function(e){
    	prices =new Array();
    	prods =new Array();
    	console.log("mamam");
    	$("#fixAdd").children().children().text("$0.00");
    if($.mobile.activePage.is('#inicio')){

    }
    else {
        navigator.app.backHistory()
    }
}, false);
	$.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: {comida: 'comida'},
	
	success: function(data){

		var jsonObj = jQuery.parseJSON(data);
		var nombres = jsonObj[0].split(",");
		var precios = jsonObj[1].split(",");
		for(var i=0;i<nombres.length;i++){
			$("#comlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus" href=""><i class="fa fa-plus "></i></a><span class="cants">0</span><a class="aminus" href=""><i class="fa fa-minus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
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
			$("#beblist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus" href=""><i class="fa fa-plus "></i></a><span class="cants">0</span><a class="aminus" href=""><i class="fa fa-minus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
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
			$("#poslist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus" href=""><i class="fa fa-plus "></i></a><span class="cants">0</span><a class="aminus" href=""><i class="fa fa-minus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
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
			$("#varlist").append('<li><p class="pname">'+nombres[i]+' <a class="aplus" href=""><i class="fa fa-plus"></i></a><span class="cants">0</span><a class="aminus" href=""><i class="fa fa-minus"></i></a><span class="price">$'+precios[i]+'</span></p> </li>');
		}

    }
   
    });
    
    $("#varlist,#comlist,#beblist,#poslist").on('click', '.aplus', function(e) {
    	var text= $(this).parent().text().split("$");
    	var $add = $(this).parent().parent().parent().parent().parent().parent().find(".fixAdd");
    	
    	if(prods.indexOf(text[0])==-1){
    		prods.push(text[0]);
    	    prices.push(text[1]);
    	   
    	
    	
    	}else{
    		prices[prods.indexOf(text[0])] = parseFloat(prices[prods.indexOf(text[0])])+parseFloat(text[1]);
    	}
    	var total = 0;
    	console.log(prices.length);
    	for(var i=0; i<prices.length;i++){
    		
    		total +=  parseFloat(prices[i]);
    		
    	}
    	$add.children().children().text("$"+total.toFixed(2));
    	//$("#pedidoL").append('<li><p class="pname">'+text[0]+' <span class="price">$'+text[1]+'</span></p> </li>');
    	
    	/*if(localStorage.getItem("prods")==null){
    		localStorage.setItem("prods",text[0]);
    		localStorage.setItem("prices",text[1]);
    		localStorage.setItem("cants",1);
    	}else{
    		localStorage.setItem("prods",localStorage.getItem("prods")+","+text[0]);
    		localStorage.setItem("prices",localStorage.getItem("prices")+","+text[1]);
    	}*/
    	
       //$("#total").trigger("contentchanged");
    });
    $("#varlist,#comlist,#beblist,#poslist").on('click', '.aminus', function(e) {
    	var text= $(this).parent().text().split("$");
    	var $add = $(this).parent().parent().parent().parent().parent().parent().find(".fixAdd");
    	
    	var total = 0;
    	if(prods.indexOf(text[0])!=-1){
    		console.log( prices[prods.indexOf(text[0])]);
    	 prices[prods.indexOf(text[0])] -= parseFloat(text[1]);
    	 
    	 if(prices[prods.indexOf(text[0])]==0){
    	 	console.log("mamsa");
    	 	prods.splice(prods.indexOf(text[0]),1);
    	 	prices.splice(prods.indexOf(text[0]),1);
    	 }

    	}
    	for(var i=0; i<prices.length;i++){
    		
    		total +=  parseFloat(prices[i]);
    		
    	}
    	
    	$add.children().children().text("$"+total.toFixed(2));
    	//$("#pedidoL").append('<li><p class="pname">'+text[0]+' <span class="price">$'+text[1]+'</span></p> </li>');
    	
    	/*if(localStorage.getItem("prods")==null){
    		localStorage.setItem("prods",text[0]);
    		localStorage.setItem("prices",text[1]);
    		localStorage.setItem("cants",1);
    	}else{
    		localStorage.setItem("prods",localStorage.getItem("prods")+","+text[0]);
    		localStorage.setItem("prices",localStorage.getItem("prices")+","+text[1]);
    	}*/
    	
       //$("#total").trigger("contentchanged");
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
