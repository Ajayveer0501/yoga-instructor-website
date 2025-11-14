import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
//import YogaSisters_Logo from "../assets/YogaSisters_Logo.jpg"; // <-- your logo
import YogaSisters_Logo from "../../assets/images/YogaSisters_Logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.wrap} ${scrolled ? styles.shrink : ""}`}>
      <div className={styles.container}>

        {/* Brand Section */}
        <div className={styles.brand}>
          <img src={YogaSisters_Logo} alt="Logo" className={styles.logoImg} />
          <NavLink to="/" className={styles.logoText}>
            Flow With Yoga Sisters
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Classes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.cta} ${styles.activeCta}` : styles.cta
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Burger Menu */}
        <button
          aria-label="menu"
          className={styles.burger}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? `${styles.mobileLink} ${styles.activeMobile}` : styles.mobileLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/classes"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? `${styles.mobileLink} ${styles.activeMobile}` : styles.mobileLink
          }
        >
          Classes
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? `${styles.mobileLink} ${styles.activeMobile}` : styles.mobileLink
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? `${styles.mobileCta} ${styles.activeMobileCta}` : styles.mobileCta
          }
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
}
