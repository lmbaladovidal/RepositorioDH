const express = require('express');
const main = require('../controllers/mainController');
const {check} = require('express-validator');
const mainController = require('../controllers/mainController');
const mainRouter = express.Router()
const validator = [
    (check)('email').isEmail().withMessage('Email Invalido'),
    (check)('pass').isLength({nin:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
]


mainRouter.get('/',mainController.index);
mainRouter.get('/prueba',mainController.pruebaSession);
mainRouter.get('/user/login',mainController.login);
mainRouter.post('/user/login',validator,mainController.processLogin);

module.exports = mainRouter;