const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.join(__dirname, '..', 'yoga.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('SQLite error:', err.message);
  else console.log('Connected to SQLite:', dbPath);
});

module.exports = db;