
$(document).ready(function(){
document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#inicio')){

    }
    else {
        navigator.app.backHistory()
    }
}, false);
$(".usuario").text(localStorage.getItem("user"));
   /*  document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    // Query the database
    //
   function dropDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS login');
        window.location="index.html";
        
    }
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM login', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        $(".usuario").text(results.rows.item(0)['id']);
    

    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
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
        db.transaction(queryDB, errorCB, successCB);
    }*/

   $("#close").click(function(){
   	   
   });

});
