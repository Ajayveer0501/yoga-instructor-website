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
  const normalizedPhone = phone ? phone.replace(/\s+/g, "") : "";

  return (
    <motion.div
      className={styles.motionWrap}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.cardWrapper}>
        <div className={styles.gradientBorder}></div>

        <div className={styles.card}>
          <div className={styles.shine}></div>

          {/* Image */}
          <div className={styles.imageWrap}>
            <img src={imageSrc} alt={name} className={styles.photo} />
          </div>

          {/* Text */}
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.title}>{role}</p>
          <p className={styles.bio}>{bio}</p>

          {/* Buttons */}
          <div className={styles.buttonRow}>
            <button className={styles.bookBtn}>Book Session</button>

            {/* Call button */}
            <a href={`tel:${normalizedPhone}`} className={styles.callBtn}>
              <i className="fa-solid fa-phone" />
              <span className={styles.callText}>Call</span>
              <span className={styles.phoneSlide}>{phone}</span>
            </a>
          </div>

          {/* Social Icons */}
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
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
