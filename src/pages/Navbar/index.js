import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 0;
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    padding: scrolled ? "6px 25px 4px" : "10px 9% 6px",
    background: scrolled ? "rgba(0, 0, 0, 0.45)" : "transparent",
    backdropFilter: scrolled ? "blur(4px)" : "blur(0)",
    transition: "all 0.3s ease",
  };

  const headerStyle = {
    top: "0px",
  };

  return (
    <div
      className={`headerContainer ${scrolled ? "scrolled" : ""}`}
      style={headerStyle}
    >
      <header className="header" style={navbarStyle}>
        <a href="https://www.nitp.ac.in/" className="logo1">
          <img src="/img/download-removebg-preview.png" alt="NITP logo" />
        </a>

        <nav className="navbar">
          <div className="link">
            <Link to="/#home">Home</Link>
          </div>

          <div className="link">
            <Link to="/#about">About Us</Link>
            <div className="tabInner">
              <Link to="/#vision">Our Vision</Link>
              <Link to="/#support">Our Support</Link>
            </div>
          </div>

          <div className="link">
            <Link to="/#incubations">Incubations</Link>
            <div className="tabInner">
              <Link to="/#darki">Directors</Link>
              <Link to="/#talks">Talks about us!</Link>
            </div>
          </div>

          <Link to="/#events" className="link">Events</Link>
          <Link to="/#gallery" className="link">Gallery</Link>

          <div className="link">
            <Link to="/professor">Team</Link>
            <div className="tabInner">
              <Link to="/professor">Professors</Link>
              <Link to="/student">Students</Link>
              <Link to="/admin">Admin</Link>
            </div>
          </div>

          <a
            href="https://tinkering-lab.onrender.com/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Tinkering lab
          </a>
        </nav>

        {!isOpen && (
          <button
            className="menu"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        {isOpen && (
          <div className="mobileMenuContainer">
            <div className="mobileMenu">
              <Link onClick={() => setIsOpen(false)} to="/#home">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/#about">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/#incubations">Incubations</Link>
              <Link onClick={() => setIsOpen(false)} to="/#events">Events</Link>
              <Link onClick={() => setIsOpen(false)} to="/#gallery">Gallery</Link>
              <Link onClick={() => setIsOpen(false)} to="/professor">Team</Link>

              <a
                href="https://tinkering-lab.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tinkering lab
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="crossBtn"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        )}

        <a className="logo2" href="/">
          <img src="/img/IC LOGO (1).png" alt="Incubation Centre logo" />
        </a>
      </header>
    </div>
  );
};

export default Navbar;
