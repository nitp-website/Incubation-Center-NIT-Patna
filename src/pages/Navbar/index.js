import React, { useEffect, useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css'
// import Scroll from './scroll.js';

const Navbar = () => {

  AOS.init({
    duration: 1000
  });

  const [scrolled,setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  // window.addEventListener("scroll", function () {
  //   var header = this.document.querySelector("header");
  //   header.classList.toggle("sticky", this.window.scrollY > 0);
  // })

  useEffect(() => {

    const handleScroll = () => {
      let scrollVal = window.scrollY;
      // console.log(scrollVal);
      if(scrollVal > 150) {
        // console.log("yes");
        setScrolled(true)
      }else{
        setScrolled(false)
      }
      
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };

  },[])

  const navbarStyle = {
    padding: scrolled ? '0 10px' : '0 9%',  // Adjust these values as needed
    background: scrolled ? 'rgba(0, 0, 0, 0.4)': 'transparent', 
    backdropfilter: scrolled ? 'blur(4px)': 'blur(0)',
    transition: 'all 0.3s ease',  // Optional: adds a smooth transition effect
  };

  const headerStyle = {
    top : scrolled ? '0px' : '30px',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    width : scrolled ? '60px' : '50px'
  };

  return (

    <div className='headerContainer' style={headerStyle} data-aos="fade-down">
      {/* <!-- header  --> */}

      <header className="header" style={navbarStyle}>
        <a href="https://www.nitp.ac.in/" className="logo1" style={logoStyle}><img src="  img/download-removebg-preview.png " alt="NITP_logo" /></a>
        <nav className="navbar">
          <div className="link">
            <Link to="/#home">Home</Link>
          </div>
          <div className='link'>
            <Link to="/#about">About Us</Link>
            <div className="tabInner">
              <Link to="/#vision">Our Vision</Link>
              <Link to="/#support">Our Support</Link>
            </div>
          </div>
          <div className='link'>
            <Link to="/#incubations">Incubations</Link>
            <div className="tabInner">
              <Link to="/#darki">Directors</Link>
              <Link to="/#talks">Talks about us!</Link>
            </div>
          </div>
          <Link to="/#events" className='link'>Events</Link>
          <Link to="/#gallery" className='link'>Gallery</Link>
          {/* <a href="#footer" className='link'>Contact</a>*/}
  
          {/* <Link className='link' to="/team">Team</Link> */}
          <div className='link'>
            <Link to="/professor">Team</Link>
            <div className="tabInner">
              <Link to="/professor">Professors</Link>
              <Link to="/student">Students</Link>
            </div>
          </div> 
          <a href="src/img/background_img/Rulebook.pdf" className='link' download="Tinkering Lab">Tinkering lab</a>

        </nav>

        <img onClick={() => setIsOpen(!isOpen)} className="menu" src='/menu.png' />
        {
          isOpen && (
            <div className='mobileMenuContainer'>
              <div className="mobileMenu">
                <a className='link' href="http://localhost:3000/">Home</a>

                <a href="#about">About</a>
                <a href="#incubations">Incubations</a>
                <a href="#events" className='link'>Events</a>
                <a href="#gallery" className='link'>Gallery</a>
                <a href="#team" className='link'>Team</a> 

                <a href="src/img/background_img/Rulebook.pdf" className='link' download="Tinkering Lab">Tinkering lab</a>
  {/*<a href="#footer" className='link'>Contact</a>*/}
              </div>
              <div onClick={() => setIsOpen(false)} className="crossBtn">
                X
              </div>
            </div>
          )
        }
        <a className="logo2" href="/" style={logoStyle}><img src="img/IC LOGO (1).png" alt="Incubation Centre logo" />
        </a>
      </header>

      {/* <!-- header --> */}
    </div>
  )
}

export default Navbar;
