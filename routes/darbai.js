const express = require('express');
const router = express.Router();
const darbaiController = require('../controllers/darbaiController');

router.get('/', darbaiController.getAllWorks);

module.exports = router;
