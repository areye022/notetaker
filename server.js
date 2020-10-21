var fs = require("fs");
var express= require("express");
var path= require("path");
const { json } = require("body-parser");

// sets up express app
var app= express();
var PORT= process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname ,"./public/index.html"))
    // res.send('Testing to see if this works');
});

app.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname ,"./public/notes.html"))
    // res.send('Testing to see if this works');
});


app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
})