import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InstructorCard.module.css';
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function InstructorCard({
  name,
  role,
  bio,
  imageSrc,
  phone,
  instagramUrl,
  whatsappUrl,
}) {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <img src={imageSrc} alt={name} className={styles.avatar} />
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.name}>{name}</h3>
          {role && <p className={styles.role}>{role}</p>}
        </div>
      </div>

      <p className={styles.bio}>{bio}</p>

      <div className={styles.footer}>
        <button className={styles.sessionButton} type="button">
          Book a Session
        </button>

        <div className={styles.contactRow}>
          {phone && (
            <button
              type="button"
              className={styles.callButton}
              onMouseEnter={() => setShowNumber(true)}
              onMouseLeave={() => setShowNumber(false)}
            >
              {showNumber ? (
                <span className={styles.phoneText}>{phone}</span>
              ) : (
                <span className={styles.callInner}>
                  <FaPhoneAlt className={styles.callIcon} />
                  <span>Call</span>
                </span>
              )}
            </button>
          )}

          <div className={styles.socialWrap}>
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label={`${name} on Instagram`}
              >
                <FaInstagram />
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label={`WhatsApp ${name}`}
              >
                <FaWhatsapp />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

InstructorCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  bio: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  phone: PropTypes.string,
  instagramUrl: PropTypes.string,
  whatsappUrl: PropTypes.string,
};

InstructorCard.defaultProps = {
  role: '',
  bio: '',
  phone: '',
  instagramUrl: '',
  whatsappUrl: '',
};
