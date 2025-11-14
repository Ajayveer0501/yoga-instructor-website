import styles from './BookingModal.module.css';

export default function BookingModal({ open, onClose, classInfo }){
  if(!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e)=>e.stopPropagation()}>
        <h3 className={styles.title}>Book — {classInfo?.title}</h3>
        <p className={styles.text}>Contact to confirm schedule and payment.</p>
        <div className={styles.actions}><button onClick={onClose} className={styles.close}>Close</button></div>
      </div>
    </div>
  )
}
