const express = require('express');
const mainroutes =require('./routes/mainRoutes');
const userRoutes = require("./routes/userRoutes");
const methodOverride = require('method-override');
const multer = require('multer')
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
});

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });

app.listen(3000, ()=>{console.log('server corriendo 3000')});