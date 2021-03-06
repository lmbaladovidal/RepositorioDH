const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')


router.get('/',(req,res)=>{
    res,send("respond with a resource");
});

router.get('/login',userController.login)
router.get('/register',userController.register)
router.get('/list',userController.list)
router.get('/search/',userController.search)

module.exports = router;