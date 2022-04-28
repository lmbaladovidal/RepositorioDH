const series = [ { "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" } ]

const express = require('express');
const app = express();
app.listen(3000,()=>{console.log("Corriendo")})


let serieEncontrada=series.filter(function(serie)
                 {return serie.id==1})
                console.log(serieEncontrada[0].name);


app.get('/serie/:idSerie',function(req,res){
            let serieEncontrada=series.filter((serie)=>{return serie.id==req.params.idSerie});
                res.send(serieEncontrada[0]);});

const express = require('express');
const app = express();

app.get("/serie/:id", function(req, res){
                                     let serieid = serie.filter((serie) => {return req.params.id == serie.id})
                                    res.send(req.params.id);
                                }
                            )