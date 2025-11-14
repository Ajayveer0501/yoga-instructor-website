import InstructorCard from "../../components/InstructorCard/InstructorCard";
import styles from "./About.module.css";
import Namahshri from "../../assets/images/Namahshri_Intructor.jpg"
import Dakshaj from "../../assets/images/Dakshaj_Intructor.jpg"

export default function About() {
  const instructors = [
    {
      name: "Dakshaj",
      title: "Certified Power Yoga & Meditation Trainer",
      bio: "With 12+ years of teaching experience, Aaradhya blends modern wellness with traditional yogic science.",
      quote: "Yoga is the journey of the self, through the self, to the self.",
      phone: "+91 9516064637",
      image: Dakshaj,
      instagram: "https://www.instagram.com/dakshajtheyogini?utm_source=qr&igsh=MWZ3dTBzZ3J0cWl2 ",
      whatsapp: "919516064637",
    },
    {
      name: "NamahShri",
      title: "Certified Yoga & Meditation Trainer",
      bio: "With 12+ years of teaching experience, Aaradhya blends modern wellness with traditional yogic science.",
      quote: "Breathe deeply. You are stronger than you imagine.",
      phone: "+91 7746800930",
      image: Namahshri,
      instagram: "https://www.instagram.com/yogawithnamahshri?utm_source=qr&igsh=MXFkazJ0eTJlaTZsaw== ",
      whatsapp: "917746800930",
    }
  ];

  return (
    <section className={styles.wrap}>
      <h1 className={styles.heading}>Meet Your Instructors</h1>

      <div className={styles.grid}>
        {instructors.map((ins, index) => (
          <InstructorCard key={index} {...ins} />
        ))}
      </div>
    </section>
  );
}
