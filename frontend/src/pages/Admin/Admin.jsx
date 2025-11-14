import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

export default function Admin(){
  const [bookings, setBookings] = useState([]);
  useEffect(()=>{ axios.get('http://localhost:5000/api/admin/bookings').then(r=>setBookings(r.data.bookings||[])).catch(()=>{}); },[]);
  return (
    <div className={styles.wrap}>
      <h1>Bookings</h1>
      <div className={styles.grid}>
        {bookings.map(b => (
          <div key={b.id} className={styles.card}>
            <div className={styles.title}>{b.name} — {b.phone}</div>
            <div className={styles.meta}>{b.email} • {b.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
