const fs = require("fs");
const express= require("express");
const path= require("path");
const { json } = require("body-parser");

// sets up express app
const app= express();
const PORT= process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static("public"));

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
    res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf-8")));
});

// saving api notes
app.post('/api/notes', function(req,res){
    
    fs.writeFileSync("./db/db.json", JSON.stringify(currentData),function(err){
        if (err) throw (err);
    });
    res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf-8")));
})



app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
})