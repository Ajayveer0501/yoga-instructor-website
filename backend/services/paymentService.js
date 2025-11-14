const Razorpay = require('razorpay');
const db = require('../db/connection');

const razor = new Razorpay({ key_id: process.env.RZP_KEY_ID || '', key_secret: process.env.RZP_KEY_SECRET || '' });

async function createOrder(amount, currency = 'INR', bookingId = null) {
  const options = { amount, currency, receipt: `rcpt_${Date.now()}` };
  const order = await razor.orders.create(options);
  if (bookingId) db.run('INSERT INTO payments (booking_id, razorpay_order_id, amount, status) VALUES (?, ?, ?, ?)', [bookingId, order.id, amount, 'created']);
  return order;
}

module.exports = { createOrder };
