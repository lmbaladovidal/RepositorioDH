const express = require('express');
const app = express();
const mainroutes =require('./routes/mainRoutes');
const userRoutes = require("./routes/userRoutes");

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',mainroutes)
app.use('/user',userRoutes)

app.listen(3000, ()=>{console.log('server corriendo 3000')});