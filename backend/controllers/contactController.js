const { sendContactEmail } = require('../services/emailService');

exports.postContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Contact received:', req.body);
    await sendContactEmail({ name, email, message }).catch(err => console.warn('Email not sent:', err.message));
    res.json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
