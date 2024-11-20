const express = require('express');
const router = express.Router();
const kontaktaiController = require('../controllers/kontaktaiController');

router.get('/', kontaktaiController.getAllContacts);

module.exports = router;
