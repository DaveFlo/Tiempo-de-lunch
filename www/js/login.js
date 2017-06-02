
$(document).ready(function(){
    var user="";
    var school="";
    var ban = false;
    if(localStorage.getItem("user")!=null){
    	window.location = "inicio.html";
    }
    $("#logForm").submit(function(e){
	$("#mess").hide();
	$("#enter").prop("disabled",true);
	$(".loads").show();
	e.preventDefault();
	$.ajax({
	url: "http://www.icone-solutions.com/tlunch/sqlOP.php",
	type: "POST",
	data: new FormData(this),
	contentType: false,
	cache: false,
	processData:false,
	async: false,
	success: function(data){
		console.log(data);
	    if(data.toString()!=="0"){
	    	var datos = data.toString().split(",");
	    	user = datos[0];
	    	school = datos[1];
	    	localStorage.setItem("user",user);
            localStorage.setItem("school",school);
             
	    	window.location = "inicio.html";
	    }else{
            $(".loads").hide();
	    	$("#mess").text("Usuario o contraseña incorrectos");
	    	$("#mess").show();
	    }
	    $("#enter").prop("disabled",false);
	}

});
});

});
