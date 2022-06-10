const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/', moviesController.list);
router.post('/', moviesController.create);
router.delete('/:id', moviesController.destroy);

module.exports = router;