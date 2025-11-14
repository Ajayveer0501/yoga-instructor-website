import { useState } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try{
      const res = await axios.post('http://localhost:5000/api/contact', form);
      if(res.data.success) { setStatus('sent'); setForm({ name:'', email:'', message:'' }); }
      else setStatus('error');
    }catch(err){ console.error(err); setStatus('error'); }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      {status==='sent' && <div className={styles.success}>Thanks — we will reply soon</div>}
      <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className={styles.input} />
      <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className={styles.input} />
      <textarea required placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className={styles.textarea} />
      <div className={styles.row}><button className={styles.btn} type="submit">{status==='sending' ? 'Sending...' : 'Send Message'}</button></div>
      {status==='error' && <div className={styles.error}>Failed to send. Try again later.</div>}
    </form>
  )
}
