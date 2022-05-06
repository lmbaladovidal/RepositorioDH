const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const {check} = require('express-validator');
const validator = [check('name')
                    .notEmpty().withMessage('Completá el campo nombre').bail()
                    .isIn('Ada', 'Greta', 'Vim' , 'Tim').withMessage('Usuario No Autorizado').bail()
                  ];



router.get('/',mainController.index);
router.post('/',validator,mainController.validator);

module.exports = router;