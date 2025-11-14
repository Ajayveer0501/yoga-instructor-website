import styles from './Testimonials.module.css';

const TESTS = [
  { id:1, name:'Priya', text:'Increased my flexibility and calm.' },
  { id:2, name:'Arjun', text:'Meditation changed my daily focus.' }
];

export default function Testimonials(){
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <h2 className={styles.head}>What students say</h2>
        <div className={styles.grid}>
          {TESTS.map(t => (
            <blockquote key={t.id} className={styles.card}>
              <p className={styles.text}>“{t.text}”</p>
              <footer className={styles.by}>— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
