import React from 'react'
import './style.css' 
import Footer from '../../footer'
import Navbar from '../../Navbar';

function Timeline() {
  return (
    <div className='events_timeline'> 
      <Navbar/>
    <div class="container_header">
      <div>
      <h1>Events Timeline</h1>
      </div>
      </div>
    <div class="timeline">
      <div class="container left-container">
            <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Orientation Session 2023</h2>
                <small>21/09/2023</small>
                <p>The orientation program aimed to familiarize the students of 2023 
batch with the Incubation Centre (IC) at NIT Patna and its pivotal role 
in cultivating entrepreneurship among students while fostering 
innovation. 
                </p>
                
            </div>
            <span class="left-container-arrow"></span>
        </div>
        <div class="container right-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>PitchTember 2023</h2>
                <small>24/11/2023 to 18/12/2023</small>
                <p>It is a multitude of events, including Udhyamita, Uthaan, Unnayan, 
and workshops, facilitated extensive participation from students 
across various universities. With 1000+ students presenting 67+ 
innovative ideas, the event celebrated excellence by recognizing 
noteworthy contributions.
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        <div class="container left-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Stock Market Simulation</h2>
                <small> 09/02/2024</small>
                <p>The      IPSIT      Stock      Market       Simulation, sponsored by StockGro, provided 
participants with an immersive and educational experience in 
virtual stock trading without financial risk. Each participant was 
allocated 10 lakh virtual money for a day of trading on actual 
stocks. Almost 300 participants showcased their interest, 
emphasizing the importance of effective trading strategies in 
achieving success. 
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        {/* <div class="container right-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Event name4</h2>
                <small>timings4</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        <div class="container left-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Event name5</h2>
                <small>timings5</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        <div class="container right-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Event name6</h2>
                <small>timings6</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                    necessitatibus repellendus? Delectus porro laborum dolores maiores explicabo iste minima? Dolor?
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div> */}
    </div>
    <Footer/>
    </div>
  )
}

export default Timeline


