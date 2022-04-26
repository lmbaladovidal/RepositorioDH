const express = require('express');
const mainroutes =require('./routes/mainRoutes');
const userRoutes = require("./routes/userRoutes");
const methodOverride = require('method-override')
const app = express();
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'))
app.use('/',mainroutes)
app.use('/user',userRoutes)
app.use((req,res,next)=>{
    res.status(404).render('notFound')
})

app.listen(3000, ()=>{console.log('server corriendo 3000')});