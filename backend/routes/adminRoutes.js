const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/bookings', (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, bookings: rows });
  });
});

router.delete('/booking/:id', (req, res) => {
  const id = Number(req.params.id);
  db.run('DELETE FROM bookings WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, deleted: this.changes });
  });
});

module.exports = router;
