const express = require('express');
const router = express.Router();
const { postContact } = require('../controllers/contactController');
router.post('/', postContact);
module.exports = router;
