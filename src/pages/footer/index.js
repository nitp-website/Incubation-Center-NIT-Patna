import React from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Login from '../login/login';
import { Link } from 'react-router-dom';
const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  const navigate=useNavigate();
  const handlelogin=()=>{
    navigate('/login')
  }
  return (
    <div>
       <footer className="footer" id="footer"  data-aos="fade"  data-aos-duration="300">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>IC NITP</h4>
          <ul>
            <li>
              <Link to="/professor">Our Team</Link>
            </li>
            <li><a href="#">Our Programs</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">Partnership Opportunities</a></li>
            <li onClick={handlelogin}><a href="#">Admin Notice</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Application Process</a></li>
            <li><a href="#">Funding & Investment</a></li>
            <li><a href="#">Startup Resources</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Know More</h4>
          <ul>
            <li><a href="#">Alumni Network</a></li>
            <li><a href="#">Innovation Lab</a></li>
            {/* <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/icnitp/"><i className="fab fa-facebook-f">< FaFacebook /></i></a>
            <a href="#"><i className="fab fa-twitter">< FaTwitter /></i></a>
            <a href="https://www.instagram.com/incubation_nitp/"><i className="fab fa-instagram">< FaInstagram/></i></a>
            <a href="https://www.linkedin.com/company/incubation-centre-nit-patna/posts/?feedView=all"><i className="fab fa-linkedin-in">< RiLinkedinBoxFill/></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_container2">
      <div className="footer-text">
        <p>Copyright &copy;
          {year} by IC NITP | All Rights Reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer 
