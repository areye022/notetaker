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

app.post('/api/notes', function(req,res){
    // creating an id for each note/ activeNote is the object in index.js
    const newInput= req.body;
    // if statment to add id to current notes object
    if (notes.length ===0) {
        newInput.id = 1;
    } else {
        // increase id number by 1 each time theres a new note
        const newNoteId= notes.length++
        newInput.id = newNoteId;
    }
    // see if newInput working properly
    console.log(newInput);
    notes.push(newInput);
    console.log(notes);
// writing the new note into the db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(newInput);
})



app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
})