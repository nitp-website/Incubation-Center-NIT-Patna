import React, { useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
// import Scroll from './scroll.js';

const Navbar = () => {
  // window.addEventListener("scroll", function () {
  //   var header = this.document.querySelector("header");
  //   header.classList.toggle("sticky", this.window.scrollY > 0);
  // })


  return (

    <div>
      {/* <!-- header  --> */}

      <header className="header">
        <a href="https://www.nitp.ac.in/" className="logo1"><img src="  img/download-removebg-preview.png " alt="NITP_logo" /></a>
        <nav className="navbar">
          <a className='link' href="http://localhost:3000/">
          </a>
          <div className='link'>
            <a href="#about">About</a>
            <div className="tabInner">
              <a href="#">Vision</a>
              <a href="#">How ?</a>
            </div>
          </div>
          <div className='link'>
            <a href="#incubations">Incubations</a>
            <div className="tabInner">
              <a href="#">Directors</a>
              <a href="#">Talk to us</a>
            </div>
          </div>
          <a href="#events" className='link'>Events</a>
          <a href="#gallery" className='link'>Gallery</a>
          <a href="#footer" className='link'>Contact</a>
          <Link className='link' to="/team">Team</Link>
        </nav>
        <a className="logo2" href="#home"><img src="img/IC LOGO (1).png" alt="Incubation Centre logo" />
        </a>
      </header>

      {/* <script><Scroll/></script> */}

      {/* <!-- header --> */}
    </div>
  )
}

export default Navbar;

