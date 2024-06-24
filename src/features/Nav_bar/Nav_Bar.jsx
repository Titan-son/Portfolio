import React, { useEffect, useState } from "react";
import './nav_bar.sass';
import logo from "../../assets/images/mon_logo.png";
import dark from "../../assets/images/sun.png";
import light from "../../assets/images/moon.png";

const Navbar = ({ theme, setTheme }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleScroll = () => {
    if (window.innerWidth > 768) {
      setScrollPosition(window.scrollY);
    } else {
      setScrollPosition(0);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    transform: `translateY(${Math.max(-scrollPosition, -window.innerHeight + 60)}px)`,
  };

  // Fonction pour le scroll fluide
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Fermer le menu si ouvert
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`Navbar ${scrollPosition > 0 ? 'moving' : ''}`} style={navbarStyle}>
      <img src={logo} alt="logo_portfolio" className="logo" />
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><button onClick={() => scrollToSection('home')}>home</button></li>
        <li><button onClick={() => scrollToSection('profil')}>profil</button></li>
        <li><button onClick={() => scrollToSection('competences')}>compétence</button></li>
        <li><button onClick={() => scrollToSection('contact')}>contact</button></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line1 ${menuOpen ? 'toggle' : ''}`}></div>
        <div className={`line2 ${menuOpen ? 'toggle' : ''}`}></div>
        <div className={`line3 ${menuOpen ? 'toggle' : ''}`}></div>
      </div>
      <img
        onClick={toggleMode}
        src={theme === 'light' ? light : dark}
        alt="toggle icon"
        className="toggle-icon"
      />
    </header>
  );
};

export default Navbar;
