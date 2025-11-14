const nodemailer = require('nodemailer');

async function sendContactEmail({ name, email, message }) {
  if (!process.env.SMTP_HOST) return;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  const to = process.env.CONTACT_RECEIVER || process.env.SMTP_USER;
  await transporter.sendMail({
    from: `"Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `New Contact: ${name}`,
    text: `${message}\n\nReply to: ${email}`
  });
}

module.exports = { sendContactEmail };
