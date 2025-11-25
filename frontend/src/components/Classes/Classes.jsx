import styles from './Classes.module.css';

const CLASSES = [
  { id:1,
    title:'Personal Yoga Session',
    desc:'One-on-one customized classes designed for your specific goals.',
    price:'Call us' },
    { id:2,
    title:'Group Yoga Classes',
    desc:'Practice in small groups with friends, family, or community batches.',
    price:'Call us' },
    { id:3,
    title:'Corporate Wellness Sessions-Within City',
    desc:'Yoga, stretching & mindfulness sessions for offices and teams.',
    price:'₹25000' },
    { id:4,
    title:'Corporate Wellness Sessions-Outside City',
    desc:'Yoga, stretching & mindfulness sessions for offices and teams.',
    price:'₹50,000' },
    { id:5,
    title:'Online Regular Yoga Classes',
    desc:'Join live virtual sessions from anywhere.',
    price:'Call us' },
    { id:6,
    title:'Prenatal & Postnatal Yoga',
    desc:'Safe, gentle yoga for pregnant women and recovery sessions for new mothers.',
    price:'Call us' },
    { id:7,
    title:'Kids & Teens Yoga',
    desc:'Fun, engaging sessions to build strength, focus, and flexibility.',
    price:'Call us' },
    { id:8,
    title:'Fat Loss Yoga Program',
    desc:'Structured yoga sessions focused on metabolism, mobility, and core strength.',
    price:'Call us' },    
    { id:9,
    title:'Nutrition Plan for Fitness Goals',
    desc:'Personalized diet plans for fat loss, energy, and overall wellness.',
    price:'Call us' },  
    { id:10,
    title:'Therapeutic & Recovery Yoga',
    desc:'Gentle yoga for pain relief, posture correction, stress management, and healing.',
    price:'Call us' }, 
       
  
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
