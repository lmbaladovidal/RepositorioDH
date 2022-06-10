const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorController');

router.get("/",actorsController.list),
router.post("/",actorsController.create),
router.delete("/",actorsController.destroy)