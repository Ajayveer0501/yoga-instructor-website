import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const benefits = [
  {
    title: "Reduce Stress & Boost Clarity",
    description:
      "Guided breath and mindful movement to calm the mind, ease tension, and create mental space in a busy workday.",
  },
  {
    title: "Increase Energy & Focus",
    description:
      "Gentle flows, grounding practices, and short resets that help your team feel more awake, creative, and productive.",
  },
  {
    title: "Support Posture & Physical Wellbeing",
    description:
      "Office-friendly stretches and strengthening to counter long sitting hours, tech neck, and tight shoulders.",
  },
  {
    title: "Build Connection & Team Culture",
    description:
      "Shared wellness time that helps teams bond, decompress together, and reconnect beyond deadlines and targets.",
  },
];

const offerings = [
  {
    label: "Signature Workshop",
    title: "Breath, Movement & Sound",
    description:
      "A deep, immersive session combining breathwork, slow flow, and sound relaxation to reset the nervous system.",
    details: [
      "Ideal for team offsites, retreats, and wellness days",
      "Can be tailored to beginner-friendly or mixed-level groups",
      "Gentle yet powerful reset for stressed teams",
    ],
    format: "Format: 2–3 hour workshop at your office or chosen venue",
  },
  {
    label: "Ongoing Classes",
    title: "Studio or On-Site Yoga Sessions",
    description:
      "Consistent weekly classes designed to gently build strength, mobility, and resilience over time.",
    details: [
      "In-Studio: Your team joins us at our dedicated yoga space",
      "On-Site: We bring mats, props, and experience to your workplace",
      "Perfect as a recurring wellness ritual",
    ],
    format: "Frequency: Weekly / Fortnightly | Duration: 45–60 mins",
  },
  {
    label: "Hybrid & Remote Teams",
    title: "Online Corporate Wellness Plan",
    description:
      "Live, interactive online sessions so remote and hybrid teams can move, breathe, and reset together.",
    details: [
      "Join from anywhere – office, home, or on the go",
      "Optional recordings for teams across time zones",
      "Can be paired with in-person sessions for a blended model",
    ],
    format: "Subscription: Monthly / Quarterly plans available",
  },
];

const testimonials = [
  {
    quote:
      "Our team looks forward to these sessions every week. It’s become an anchor in our calendar – a pause to breathe, move, and reset together.",
    name: "HR Manager",
    company: "IT Services Company",
  },
  {
    quote:
      "Even colleagues who had never done yoga before felt comfortable and included. The instructors held such a calm, welcoming space.",
    name: "People & Culture Lead",
    company: "Consulting Firm",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Corporate Wellness with Yoga Sisters</p>
          <h1 className={styles.heroTitle}>Bring Calm, Clarity & Balance to Your Workplace</h1>
          <p className={styles.heroSubtitle}>
            Flow With Yoga Sisters creates soft, nurturing corporate yoga experiences –
            designed especially for teams who need space to breathe, reconnect, and recharge.
          </p>

          <div className={styles.heroActions}>
            <Link to="/contact" className={styles.primaryBtn}>
              Book a Corporate Session
            </Link>
            <a href="mailto:flowwithyogasisters@gmail.com" className={styles.secondaryBtn}>
              Email Us for a Custom Plan
            </a>
          </div>

          <p className={styles.heroNote}>
            In-studio • On-site • Online – tailored to your team’s size, schedule, and comfort level.
          </p>
        </div>
      </section>

      {/* WHY YOGA SECTION */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2>Why Yoga for Your Team?</h2>
          <p>
            Gentle, guided yoga is one of the easiest ways to weave wellbeing into the workday – without
            needing intense workouts or complex equipment.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((item) => (
            <article key={item.title} className={styles.benefitCard}>
              <div className={styles.benefitIcon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OFFERINGS SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Corporate Wellness Offerings</h2>
          <p>
            Choose a single workshop to introduce yoga to your team, or build an ongoing wellbeing rhythm
            with regular classes or online sessions.
          </p>
        </div>

        <div className={styles.offeringsGrid}>
          {offerings.map((item) => (
            <article key={item.title} className={styles.offeringCard}>
              <p className={styles.offeringLabel}>{item.label}</p>
              <h3 className={styles.offeringTitle}>{item.title}</h3>
              <p className={styles.offeringDescription}>{item.description}</p>

              <ul className={styles.offeringList}>
                {item.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className={styles.offeringFormat}>{item.format}</p>

              <Link to="/contact" className={styles.offerCta}>
                Learn More &amp; Enquire
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CLIENT EXPERIENCES */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeaderCentered}>
          <h2>Client Experiences</h2>
          <p>
            Every workplace is different – but the feedback we hear most often is that sessions feel
            grounding, kind, and deeply restorative.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, index) => (
            <figure key={index} className={styles.testimonialCard}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.testimonialText}>{t.quote}</p>
              <figcaption className={styles.testimonialMeta}>
                <span className={styles.testimonialName}>{t.name}</span>
                <span className={styles.testimonialCompany}>{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContent}>
          <h2>Let’s Create a Softer, Healthier Workday Together</h2>
          <p>
            Whether you’re planning a one-off wellness event or building a long-term wellbeing program,
            Flow With Yoga Sisters can gently guide your team back to themselves.
          </p>

          <div className={styles.finalActions}>
            <Link to="/contact" className={styles.primaryBtn}>
              Talk to Us About Your Team
            </Link>
            <a href="mailto:flowsisters@yoga.com" className={styles.linkUnderline}>
              Or email us directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
