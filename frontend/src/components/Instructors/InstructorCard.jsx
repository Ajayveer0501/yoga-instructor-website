import React from "react";
import { motion } from "framer-motion";
import styles from "./InstructorCard.module.css";

const InstructorCard = ({
  name,
  role,
  bio,
  imageSrc,
  phone,
  instagramUrl,
  whatsappUrl,
}) => {
  // remove spaces so tel: link works
  const normalizedPhone = phone ? phone.replace(/\s+/g, "") : "";

  return (
    <motion.div
      className={styles.motionWrap}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <article className={styles.card}>
        {/* Top row: avatar + text */}
        <div className={styles.header}>
          <div className={styles.avatarRing}>
            <img src={imageSrc} alt={name} className={styles.photo} />
          </div>

          <div className={styles.textBlock}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.role}>{role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className={styles.bio}>{bio}</p>

        {/* Buttons row */}
        <div className={styles.buttonRow}>
          <button type="button" className={styles.bookBtn}>
            Book a Session
          </button>

          <a href={`tel:${normalizedPhone}`} className={styles.callBtn}>
            <i className="fa-solid fa-phone" />
            <span className={styles.callText}>Call</span>
          </a>
        </div>

        {/* Social icons */}
        <div className={styles.socials}>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <i
              className={`fa-brands fa-instagram ${styles.icon} ${styles.instagram}`}
            />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <i
              className={`fa-brands fa-whatsapp ${styles.icon} ${styles.whatsapp}`}
            />
          </a>
        </div>
      </article>
    </motion.div>
  );
};

export default InstructorCard;
