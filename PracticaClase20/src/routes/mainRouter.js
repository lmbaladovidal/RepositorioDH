const express = require('express');
const mainController = require('../controller/mainController');
const router = express.Router();

router.get('/',mainController.index);
router.get('/detalle/:id',mainController.detalle);
module.exports = router;