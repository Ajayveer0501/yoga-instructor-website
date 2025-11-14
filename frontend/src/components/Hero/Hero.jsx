import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Corporate Wellness || Focused Teams || Peaceful Minds</h1>
        <h3 className={styles.lead}>Mind | Moment | Magic -By Yoga Sisters</h3>
        <p className={styles.lead}>Personalized yoga sessions — online & offline for every level.</p>
        <div className={styles.ctaRow}>
          <a href="/contact" className={styles.primary}>Book a trial</a>
          <a href="/classes" className={styles.ghost}>View classes</a>
        </div>
      </div>
    </section>
  );
}
