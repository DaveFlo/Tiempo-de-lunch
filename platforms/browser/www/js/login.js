if(localStorage.getItem("user")!=null){
    	$.mobile.navigate( "#inicio", {transition:"pop", info: "info about the #foo hash" });
}
$(document).ready(function(){
    var user="";
    var school="";
    var ban = false;
    function login(form){
    	$.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: new FormData(form),
	contentType: false,
	cache: false,
	processData:false,
	async: false,
	success: function(data){
		$(".loads").hide();
	    if(data.toString()!=="0"){
	    	var datos = data.toString().split(",");
	    	console.log("mama"+data);
	    	user = datos[0];
	    	school = datos[1];
	    	localStorage.setItem("user",user);
            localStorage.setItem("school",school);
            $(".usuario").text(localStorage.getItem("user"));
            
	    	$.mobile.navigate( "#inicio", { transition : "slide",info: "info about the #foo hash" });


	    }else{
           
	    	$("#mess").text("Usuario o contraseña incorrectos");
	    	$("#mess").show();
	    }
	    $("#enter").prop("disabled",false);
	}

        });
    }
    $("#logForm").submit(function(e){
	$("#mess").hide();
	var form = this;
	$("#enter").prop("disabled",true);
	$(".loads").show();
	e.preventDefault();
	setTimeout(login(form),2000);
   });

});
