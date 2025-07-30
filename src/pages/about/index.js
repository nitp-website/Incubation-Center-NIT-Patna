import React from 'react'
import "./style.css";

import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

  AOS.init({
    duration: 1000
  });

  return (
    <div>
      <section class="about" id="about">

<div class="aboutdiv">
  <div class="building-img" data-aos="zoom-in">
    <img
      src="https://images.collegedunia.com/public/college_data/images/campusimage/1611227237IMG_20201103_111253.jpg"
      alt="Incubation center NIT Patna"/>
  </div>

  <div class="about-content " > 
    <div className='heading'><h1 data-aos="fade-down" >About <span style={{color:"#0ef"}}> Us</span></h1></div>
    
    <h3  data-aos="fade-right" >What we do ?</h3>
    <p data-aos="fade-up" > The Incubation Centre at the National Institute of Technology 
Patna is a vital hub for nurturing startups from inception to 
success. Equipped with tailored resources like office spaces, 
mentorship programs, and networking opportunities, we 
foster an environment conducive to growth and innovation. Our 
primary aim is to support early-stage startups by providing 
essential resources and guidance to accelerate their growth 
trajectory and minimize failure rates. We actively promote 
economic development, entrepreneurship, and the 
commercialization of research and innovation within the region 
by facilitating access to funding, mentorship, and networks.
    </p>
    <ul> 
      <li data-aos="fade-up">Provide aspiring entrepreneurs with essential resources and networking opportunities through initiatives like mentorship programs, funding avenues, and networking events to help startups overcome challenges and thrive.
      </li>
      <li data-aos="fade-up">Highlight notable successes like Shekhar Telesystems, Busy Mechanic, and Vendospot, demonstrating our support's effectiveness and inspiring future generations of entrepreneurs.
      </li>
      <li data-aos="fade-up">Foster innovation and resilience within the NIT Patna community, creating a supportive ecosystem where startups can flourish and significantly contribute to society and the economy.
      </li>  
    </ul>
  </div>

</div>
</section>
    </div>
  )
}

export default About