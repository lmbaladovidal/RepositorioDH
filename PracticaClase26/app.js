const express =require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const session = require('express-session');

let app = express();
app.set('view engine', 'ejs');

app.listen(3000,(req,res)=>{console.log("running at port 3000")});
app.use(session({secret:"SECRETO! SHH"}));
app.use('/',mainRouter);