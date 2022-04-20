const express = require('express');
const mainRoutes = require('./src/routes/mainRouter');
const app = express();

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.listen(3000,(req,res)=>{console.log('corriendo 3000')});

app.use('/',mainRoutes);
