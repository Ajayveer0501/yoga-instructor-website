import styles from './Classes.module.css';

const CLASSES = [
  { id:1, title:'Hatha Yoga', desc:'Gentle alignment-based classes', price:'₹500' },
  { id:2, title:'Vinyasa Flow', desc:'Dynamic movement & breath', price:'₹600' },
  { id:3, title:'Meditation', desc:'Guided mindfulness sessions', price:'₹400' }
];

export default function Classes(){
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <h2 className={styles.head}>Classes</h2>
        <div className={styles.grid}>
          {CLASSES.map(c => (
            <article className={styles.card} key={c.id}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.desc}>{c.desc}</p>
              <div className={styles.row}>
                <div className={styles.price}>{c.price}</div>
                <button className={styles.book} onClick={()=>alert('Open booking modal for '+c.title)}>Book</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
