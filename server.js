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

app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
})