if(localStorage.getItem("user")!=null){
    	$.mobile.navigate( "#inicio", {transition:"pop", info: "info about the #foo hash" });
}
$(document).ready(function(){
    var user="";
    var school="";
    var ban = false;
    function login(){
    	$.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: new FormData(this),
	contentType: false,
	cache: false,
	processData:false,
	async: false,
	success: function(data){
		$(".loads").hide();
	    if(data.toString()!=="0"){
	    	var datos = data.toString().split(",");
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
	$("#enter").prop("disabled",true);
	$(".loads").show();
	e.preventDefault();
	setTimeout(login,2000);
   });

});
