const express = require('express');
const router = express.Router();
const socTinklaiController = require('../controllers/socTinklaiController');

router.get('/', socTinklaiController.getAllSocialNetworks);

module.exports = router;
