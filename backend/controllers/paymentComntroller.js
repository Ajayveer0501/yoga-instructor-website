const crypto = require('crypto');
const db = require('../db/connection');
const { createOrder } = require('../services/paymentService');

exports.createOrder = async (req, res) => {
  try {
    const { amount, bookingId } = req.body; // amount in paise
    const order = await createOrder(amount, 'INR', bookingId);
    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.verify = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;
  const key_secret = process.env.RZP_KEY_SECRET || '';
  const shasum = crypto.createHmac('sha256', key_secret);
  shasum.update(razorpay_order_id + '|' + razorpay_payment_id);
  const digest = shasum.digest('hex');
  if (digest === razorpay_signature) {
    db.run('INSERT INTO payments (booking_id, razorpay_payment_id, razorpay_order_id, amount, status) VALUES (?, ?, ?, ?, ?)', [bookingId || null, razorpay_payment_id, razorpay_order_id, 0, 'paid']);
    res.json({ success: true, message: 'Payment verified' });
  } else res.status(400).json({ success: false, message: 'Invalid signature' });
};
