import React from "react";
import styles from "./InstructorCard.module.css";
import { motion } from "framer-motion";

const InstructorCard = ({ name, title, bio, image, phone, instagram, whatsapp }) => {
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
            <img src={image} alt={name} className={styles.photo} />
          </div>

          {/* Text */}
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.title}>{title}</p>
          <p className={styles.bio}>{bio}</p>

          {/* Buttons */}
          <div className={styles.buttonRow}>
            <button className={styles.bookBtn}>Book Session</button>

            {/* FINAL call button */}
            <a href={`tel:${phone}`} className={styles.callBtn}>
              <i className="fa-solid fa-phone"></i>

              <span className={styles.callText}>Call</span>

              <span className={styles.phoneSlide}>{phone}</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a href={instagram} target="_blank" rel="noreferrer">
              <i className={`fa-brands fa-instagram ${styles.icon} ${styles.instagram}`}></i>
            </a>

            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              <i className={`fa-brands fa-whatsapp ${styles.icon} ${styles.whatsapp}`}></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
