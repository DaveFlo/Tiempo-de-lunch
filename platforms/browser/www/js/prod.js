$(document).ready(function(){
	var prods =new Array();
    var prices =new Array();
    var cants =new Array();
   
    $(document).on( "pagechange", function( event ) { 
    	prices =new Array();
    	prods =new Array();
    	cants =new Array();
    	$(".fixAdd").children().children().text("$0.00");
    });
    document.addEventListener("backbutton", function(e){
    	
    
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
    $(".addButton").click(function(){
    	//$("#pedidoL").append('<li><p class="pname">'+text[0]+' <span class="price">$'+text[1]+'</span></p> </li>');

        if(localStorage.getItem("prods")==null){
        	localStorage.setItem("prices",JSON.stringify(prices));
    	    localStorage.setItem("prods",JSON.stringify(prods));
    	    localStorage.setItem("cants",JSON.stringify(cants));
        }else{
        
        var prices1  =JSON.parse( localStorage.getItem("prices"));
    	var prods1 =JSON.parse( localStorage.getItem("prods"));
    	var cants1 =JSON.parse( localStorage.getItem("cants"));
    	      for(var i=0;i<prices.length;i++){
    	      	
    	      	if(prods1.indexOf(prods[i])==-1){
    		       prods1.push(prods[i]);
    		
    	           prices1.push(prices[i]);
    	           cants1.push(1);

    	        }else{
    		         prices1[prods1.indexOf(prods[i])] = parseFloat(prices1[prods1.indexOf(prods[i])])+parseFloat(prices[i]);
    		         cants1[prods1.indexOf(prods[i])] +=1;

    	         }
    		       
    	      }
    	      localStorage.setItem("prices",JSON.stringify(prices1));
    	      localStorage.setItem("prods",JSON.stringify(prods1));
    	      localStorage.setItem("cants",JSON.stringify(cants1));
    	      console.log(prices1);
        }
    	swal("Listo","Se agrego tu orden al carrito","success");
        $("#pedidoL").html("");
    	 addToCart();
    	
    });
    $.fn.ignore = function(sel){
      return this.clone().children(sel||">*").remove().end();
    };
   
    $("#varlist,#comlist,#beblist,#poslist").on('click', '.aplus', function(e) {
    	var name= $(this).parent().ignore("span").text();
    	var text2= $(this).parent().text().split("$");
    	var $cant= $(this).parent().find(".cants");
    	
    	var ctext = parseInt($cant.text())+1;
    	$cant.text(ctext);
    	var $add = $(this).parent().parent().parent().parent().parent().parent().find(".fixAdd");
    	
    	if(prods.indexOf(name)==-1){
    		prods.push(name);
    		
    	    prices.push(text2[1]);
    	    cants.push(1);
    	   
    	
    	}else{
    		prices[prods.indexOf(name)] = parseFloat(prices[prods.indexOf(name)])+parseFloat(text2[1]);
    		cants[prods.indexOf(name)] +=1;
    		
    		
    	}
    	
    	var total = 0;
    	
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
    	var name= $(this).parent().ignore("span").text();
    	var text2= $(this).parent().text().split("$");
    	var $add = $(this).parent().parent().parent().parent().parent().parent().find(".fixAdd");
    	var $cant= $(this).parent().find(".cants");
    	if(parseInt($cant.text())>0){

    	var ctext = parseInt($cant.text())-1;
    	$cant.text(ctext);
    	var total = 0;
    	
    	if(prods.indexOf(name)!=-1){
    	
    	 prices[prods.indexOf(name)] -= parseFloat(text2[1]);
    	 cants[prods.indexOf(name)] -=1;

    	 if(prices[prods.indexOf(name)]==0){
    	    prices.splice(prods.indexOf(name),1);
    	 	prods.splice(prods.indexOf(name),1);

    	 	cants.splice(prods.indexOf(name),1);

    	 }
          
    	}
    	for(var i=0; i<prices.length;i++){
    		
    		total = total +  parseFloat(prices[i]);
    		
    	}

    	$add.children().children().text("$"+total.toFixed(2));
    	}
    });
    if(localStorage.getItem("prods")!=null){
    	
     addToCart();
    }
    function addToCart(){
    	
    	$("#total").html("");
    	var total = 0;
    	var prices1 =JSON.parse( localStorage.getItem("prices"));
    	var prods1 =JSON.parse( localStorage.getItem("prods"));
    	var cants1 =JSON.parse( localStorage.getItem("cants"));
    	for(var i=0;i<prices1.length;i++){

    	    total = total + parseInt(prices1[i]);
    	    $("#pedidoL").append('<li><p class="pname">'+prods1[i]+'<span class="price">$'+parseFloat(prices1[i]).toFixed(2)+'</span></p> </li>');
    	}

    	$("#total").append('<p>Total de orden (2 artículo)</p><h1 >$'+total+'</h1>');
    	$("#conOrder").prop("disabled",false);

    }
   Conekta.setPublicKey('key_L7Psm9dyS6CdPoozJGB6fdQ');
   Conekta.setLanguage("es");  
  var conektaSuccessResponseHandler = function(token) {
  	swal(token.id);
    //Inserta el token_id en la forma para que se envíe al servidor
    //$form.append($("<input type='hidden' name='conektaTokenId' id='conektaTokenId'>").val(token.id));
  };
  var conektaErrorResponseHandler = function(response) {

  swal(response.message_to_purchaser);
  };
  $("#conOrder").click(function(){
  	$form = $("#payForm");
  	$.mobile.navigate( "#pagos", {transition:"turn" });
  	//Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
  });
   var date = new Date();
  var year = parseInt(date.getFullYear());
  console.log(year);
  $("#expdate").inputmask("mm/yyyy", {"placeholder": "mm/aaaa",yearrange: { minyear: year+1}});;
   $("#card").inputmask("9999 9999 9999 9999", {"placeholder": "0000 0000 0000 0000"});
 $("#vv").inputmask("999", {"placeholder": "999"});
          
});
