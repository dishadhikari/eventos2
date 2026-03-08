import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css"; // we'll define styles in this file

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down & past a small threshold
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Eventos
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Home</Link>
          <a
            href="#reviews"
            className="navbar-item"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Reviews
          </a>
          <a
          href="#about"
          className="navbar-item"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About Us
        </a>
          <a
          href="#contact"
          className="navbar-item"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </a>
          <Link to="/register" className="navbar-register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;