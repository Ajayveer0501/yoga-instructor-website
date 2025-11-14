import Hero from '../../components/Hero/Hero';
import Classes from '../../components/Classes/Classes';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Home.module.css';

export default function Home(){
  return (
    <div className={styles.homeWrapper}>
      <Hero />
      <Classes />
      <Testimonials />
      <section className={styles.contactSection}>
        <h2>Contact / Trial Class</h2>
        <ContactForm />
      </section>
    </div>
  )
}
