const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')


router.get('/',(req,res)=>{
    res,send("respond with a resource");
});

router.get('/login',userController.login)
router.get('/register',userController.register)
router.post('/register',userController.create)
router.get('/list',userController.list)
router.get('/search/',userController.search)
router.get('/edit/:idUser', userController.edit)
router.put("/edit",userController.put)
router.delete("/delete/:idUser",userController.delete)
module.exports = router;