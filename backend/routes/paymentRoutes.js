const express = require('express');
const router = express.Router();
const { createOrder, verify } = require('../controllers/paymentController');
router.post('/create-order', createOrder);
router.post('/verify', verify);
module.exports = router;
