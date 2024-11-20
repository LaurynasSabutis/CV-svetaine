const express = require('express');
const router = express.Router();
const programosController = require('../controllers/programosController');

router.get('/', programosController.getAllPrograms);

module.exports = router;
