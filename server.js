const fs = require("fs");
const express= require("express");
const path= require("path");
let notes= require('./db/db.json');

// sets up express app
const app= express();
const PORT= process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
// allows us to access the public folder
app.use(express.static('public'));


// retrieving root index.html
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname ,"./public/index.html"))
    // res.send('Testing to see if this works');
});

// retrieving root notes.html
app.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname ,"./public/notes.html"))
    // res.send('Testing to see if this works');
});

// retrieving api notes
app.get('/api/notes', function(req,res){
    res.json(notes);
});



app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
})