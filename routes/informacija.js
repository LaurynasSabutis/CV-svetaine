const express = require('express');
const { getInformacija } = require('../controllers/informacijaController');
const router = express.Router();

router.get('/', getInformacija);

module.exports = router;
