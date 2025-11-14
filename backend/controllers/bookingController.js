const db = require('../db/connection');
const { addEvent } = require('../services/calendarService');

exports.createBooking = (req, res) => {
  const { name, phone, email, classId, date } = req.body;
  const sql = `INSERT INTO bookings (name, phone, email, classId, date) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [name, phone, email, classId, date], function (err) {
    if (err) return res.status(500).json({ success: false, error: err.message });
    const bookingId = this.lastID;
    (async () => {
      try {
        if (process.env.GOOGLE_CREDENTIALS_JSON && process.env.GOOGLE_TOKEN_JSON) {
          const start = new Date(date).toISOString();
          const end = new Date(new Date(date).getTime() + 60 * 60 * 1000).toISOString();
          await addEvent({ summary: `Yoga: ${name}`, description: `Booking ${bookingId}`, startDateTime: start, endDateTime: end, attendees: [email] });
        }
      } catch (e) { console.warn('Calendar add failed', e.message); }
    })();
    res.json({ success: true, bookingId });
  });
};

exports.listBookings = (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, bookings: rows });
  });
};
