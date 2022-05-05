// ************ Require's ************
const express = require('express');
const multer = require('multer');
const path  = require('path');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        console.log(file)
        const folder = path.join(__dirname,'../../public/images/products')
                    cb(null,folder)}, 
    filename: (req, file, cb) => {
                    console.log(file);
                    const imgName =  Date.now() + path.extname(file.originalname);
                    cb(null,imgName);  } 
  })

  const uploadFile = multer({ storage });

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/' ,productsController.create); 
router.post('/',uploadFile.single('image-product'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id',uploadFile.single('image-product'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
