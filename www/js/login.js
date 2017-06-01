
$(document).ready(function(){
    var user="";
    var school="";
    var ban = false;
    document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    //
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS login');
        tx.executeSql('CREATE TABLE IF NOT EXISTS login (id, data)');
        
    }
    function loginDB(tx) {
        
       tx.executeSql('INSERT INTO login (id, data) VALUES ("'+user+'", "'+school+'")');
    }

    // Query the database
    //
   
    
    function checkDB(tx) {
    	
        tx.executeSql('SELECT * FROM login', [], querySuccess, errorCB2);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log(len);
        if(len.length>0){
        	
        	ban = true;
        }
        
        if(ban == true){
        	console.log(results.rows.item(0)['id']);
        	window.location = "inicio.html";
        	
        }else{
        	console.log("ppapapa");
        	var db = window.openDatabase("tlunch", "1.0", "PhoneGap Demo", 200000);
            db.transaction(populateDB, errorCB);
        }
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }
    function errorCB2(err) {
        var db = window.openDatabase("tlunch", "1.0", "PhoneGap Demo", 200000);
            db.transaction(populateDB, errorCB);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("tlunch", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("tlunch", "1.0", "PhoneGap Demo", 200000);
        db.transaction(checkDB, errorCB);
      
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
	    	var db = window.openDatabase("tlunch", "1.0", "PhoneGap Demo", 200000);
            db.transaction(loginDB, errorCB);
             
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
