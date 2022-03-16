const express = require('express');
const path =require('path');
const app = express();

app.listen(3000,console.log("Running"));
app.use(express.static('public'));

app.get(('/'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/index.html'));
})
app.get(('/babbage'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/babbage.html'));
})
app.get(('/berners-lee'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'));
})
app.get(('/clarke'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/clarke.html'));
})
app.get(('/hamilton'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/hamilton.html'));
})
app.get(('/hopper'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/hopper.html'));
})
app.get(('/lovelace'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/lovelace.html'));
})
app.get(('/turing'),function(req,res){
    res.sendFile(path.join(__dirname,'/views/turing.html'));
})

app.get(('/*'),function(req,res){res.status(404).send('404 not found. <br> ¡Houston, tenemos problemas!')});
