import React from "react";
import styles from "./About.module.css";
import InstructorCard from "../../components/Instructors/InstructorCard";

import instructor1Img from "../../assets/images/Dakshaj_Intructor.jpg";
import instructor2Img from "../../assets/images/Namahshri_Intructor.jpeg";

const INSTRUCTORS = [
  {
    name: "Dakshaj",
    role: "Certified Power Yoga & Meditation Trainer",
    bio: "With 12+ years of teaching experience, Aaradhya blends modern wellness with traditional yogic science.",
    imageSrc: instructor1Img,
    phone: "+91 9516064637",
    instagramUrl:
      "https://www.instagram.com/dakshajtheyogini?utm_source=qr&igsh=MWZ3dTBzZ3J0cWl2",
    whatsappUrl: "https://wa.me/919516064637",
  },
  {
    name: "NamahShri",
    role: "Certified Yoga & Meditation Trainer",
    bio: "With 12+ years of teaching experience, Aaradhya blends modern wellness with traditional yogic science.",
    imageSrc: instructor2Img,
    phone: "+91 7746800930",
    instagramUrl:
      "https://www.instagram.com/yogawithnamahshri?utm_source=qr&igsh=MXFkazJ0eTJlaTZsaw==",
    whatsappUrl: "https://wa.me/917746800930",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Intro */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About Flow With Yoga Sisters</p>
        <h1 className={styles.title}>
          Soft, Supportive Yoga for Real Life Bodies &amp; Schedules
        </h1>
        <p className={styles.lead}>
          We create calm, grounding spaces for working professionals, parents
          and busy humans who want to move, breathe and reconnect without the
          pressure of perfect poses. Every class is designed to feel like a
          gentle reset, not a performance.
        </p>
      </section>

      {/* Instructors */}
      <section className={styles.instructorsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Meet Your Instructors</h2>
          <p className={styles.sectionSubtitle}>
            Your teachers blend functional movement, simple breathwork and a
            judgement-free atmosphere so that everyone feels welcome – whether
            it&apos;s a one-to-one, small group or corporate session.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {INSTRUCTORS.map((inst) => (
            <InstructorCard key={inst.name} {...inst} />
          ))}
        </div>
      </section>

      {/* Values / approach */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContent}>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionSubtitle}>
            We combine structured, thoughtfully-sequenced classes with softness
            and playfulness, so you can build strength and ease without burning
            out.
          </p>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Gentle, Functional Movement</h3>
              <p>
                Poses and flows that release the patterns of desk work, driving
                and screens – not just acrobatics for Instagram.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Breath &amp; Nervous System Care</h3>
              <p>
                Simple, realistic breath practices you can take back into your
                workday to reduce stress and improve focus.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Inclusive &amp; Judgement-Free</h3>
              <p>
                No flexibility or prior yoga experience needed. Every body, age
                and background is welcome on the mat with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
