import React from 'react';
import "./style.css";

const Vision = () => {
  return (
    <div>
      <section className="vision" id="vision">
    <div className="vision_header">
      <h1  data-aos="fade-down">Our <span style={{ color: "#0ef" }}>Vision</span></h1>
    </div>
    <div className="vision_container">

      <div className="vision_cards"  data-aos="fade-right">
        <div className="vision_content">
          <h3>Nurture Entrepreneurship</h3>
          <p>To nurture entrepreneurship in those people who have a passion for creating something of their own which can benefit the society. </p>
        </div>
      </div>

      <div className="vision_cards"  data-aos="fade-up">
        <div className="vision_content">

          <h3>Creating an Ecosystem</h3>
          <p>Creating an ecosystem in which people can get out of their comfort zone and work on new ideas, technology to solve existing problems.</p>

        </div>
      </div>

      <div className="vision_cards" data-aos="fade-down">
        <div className="vision_content">
          <h3>Help Bihar</h3>
          <p>Make Bihar a hub of entrepreneurship and entrepreneurs. </p>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Vision
