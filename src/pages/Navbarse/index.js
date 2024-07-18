import React from 'react';
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

    <header class="header">
      <a href="https://www.nitp.ac.in/" class="logo1"><img src="  img/download-removebg-preview.png " alt="NITP_logo" /></a>
      <nav class="navbar">
        <a href="http://localhost:3000/">Home</a>
        <a href="#about">About</a>
        <a href="#incubations">Incubations</a>
        <a href="#events">Events</a>
        <a href="#gallery">Gallery</a>
        <a href="#footer">Contact</a>
        <Link to="/team">Team</Link>
      </nav>
      <a class="logo2" href="#home"><img src="img/IC LOGO (1).png" alt="Incubation Centre logo" />
      </a>
    </header>

    {/* <script><Scroll/></script> */}

    {/* <!-- header --> */}
  </div>
)
}

export default Navbar;

