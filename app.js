var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require('ya-csv');

var app = express();
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname,"index.html"));
});

//app.post("/", function(request, response){
//    response.sendFile(path.join(__dirname,"index.html"));
//});
//
//app.post("/studentdiscount", function(request, response){
//    response.sendFile(path.join(__dirname,"studentdiscount.html"));
//});

app.post('/booking', function(request, response){
    var fullName = request.body.fullName;
    var email = request.body.fullemail;
    var guests = request.body.guestnumber;
    var visitdate = request.body.visitdate;

    var database = csv.createCsvFileWriter("bookings.csv", {"flags":"a"});

    var data = [fullName, email, guests, visitdate];

    database.writeRecord(data);

    database.writeStream.end();

    response.send("Thanks "+fullName+ ", your booking is confirmed for "+guests+" guests at "+visitdate+"!");
});

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port =server.address().port;

    console.log("Bob's Diner web app listening at http://%s:%s",host,port);
});
