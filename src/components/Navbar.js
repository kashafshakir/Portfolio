import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.navbarBrand}`} href="#" style={{fontFamily: "'Playfair Display', serif"}}>Kashaf Shakir</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex">
           <ul className="navbar-nav">
  <li className="nav-item">
    <a href="#about" className={`nav-link ${styles.navLink}`}>About Me</a>
  </li>
  <li className="nav-item">
    <a href="#contact" className={`nav-link ${styles.navLink}`}>Contact</a>
  </li>
  <li className="nav-item">
    <a href="#home" className={`nav-link ${styles.navLink}`}>Home</a>
  </li>
</ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

