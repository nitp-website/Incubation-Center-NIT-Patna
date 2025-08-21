import React from 'react';
import "./style.css";
import {useNavigate } from "react-router-dom";
// import "./style.scss";

const Events = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      <section className="events" id="events">

        <div className="event_header"> 
          <h1 data-aos="fade-down"  style={{ color: "#0ef" }} >Events</h1>
          <p data-aos="fade">The Incubation Center organizes transformative events that empower entrepreneurs with knowledge, networking opportunities, and practical skills. These events foster innovation, collaboration, and growth within the startup community, driving forward impactful business ventures. </p>
        </div> 
        <div className="events_box"  >
          <div className="flip-card" data-aos="flip-left"> 

            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="img/events/Events/orientation.jpg" alt="event"/>
              </div>
              <div className="flip-card-back">
                <h1>Orientation Session 2023</h1>
                <p>Date: 21/09/2023</p>
                <p>Venue: CV Raman Hall</p>
                <a href="events timeline/index.html" className="btn">View More</a>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="img/events/Events/pitchtember.jpg" alt="event"/>
              </div>
              <div class="flip-card-back">
            <h1>PitchTember 2023</h1>
            <p>Date: 24/11/2023 to 18/12/2023</p>
            <p>Venue: CV Raman Hall</p>
                <a href="https://www.pitchtember.tech/" className="btn">View More</a>
              </div>
            </div>
          </div>

 
 
          <div className="flip-card"data-aos="flip-left">
 
 <div className="flip-card-inner">
   <div className="flip-card-front">
     <img src="img/events/Events/sms.jpg" alt="event"/>
   </div>
   <div className="flip-card-back">
            <h1>Stock Market Simulation</h1>
            <p>Date: 09/02/2024</p>
            <p>Venue: Online</p>
     <a href="/timeline" className="btn">View More</a>
   </div>
 </div>

          </div>

           <div className="flip-card"data-aos="flip-left">
 
 <div className="flip-card-inner">
   <div className="flip-card-front">
     <img src="img/events/Events/event1.jpg" alt="event"/>
   </div>
   <div className="flip-card-back">
            <h1>StartUp Simulation 2025</h1>
            <p>Date: 08/02/2025</p>
            <p>Venue: Online</p>
     <a href="/timeline" className="btn">View More</a>
   </div>
 </div>

          </div>

           <div className="flip-card"data-aos="flip-left">
 
 <div className="flip-card-inner">
   <div className="flip-card-front">
     <img src="img/events/Events/event3.png" alt="event"/>
   </div>
   <div className="flip-card-back">
            <h1>CBDE 2025</h1>
            <p>Date: 21/03/2025</p>
            <p>Venue: Online</p>
     <a href="/timeline" className="btn">View More</a>
   </div>
 </div>

          </div>
            <div className="flip-card"data-aos="flip-left">
 
 <div className="flip-card-inner">
   <div className="flip-card-front">
     <img src="img/events/Events/event2.png" alt="event"/>
   </div>
   <div className="flip-card-back">
            <h1>CBDE Faculty Orientation</h1>
            <p>Date: 22/07/2025</p>
            <p>Venue: Online</p>
     <a href="/timeline" className="btn">View More</a>
   </div>
 </div>

          </div>

          
        </div>

        <div className="events_btn">
          <a href="/timeline" className="btn">View More</a>
        </div>
      </section>
    </div>
  )
}

export default Events;
