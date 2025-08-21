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
        <div class="container right-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>Capacity Building Program for Design and Entrepreneurship (CBDE)</h2>
                <small>21/03/2025</small>
                <p>CBDE - The Capacity Building Program for Design and Entrepreneurship (CBDE) is designed to build creative problem-solving and entrepreneurial skills within Higher Education Institutions. As a key part of the Malaviya Mission Teacher Training Programme, it empowers faculty and students through design thinking and mentorship, with IIITDM Kancheepuram acting as the coordinating center.

                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        <div class="container left-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>STARTUP SIMULATION 2025</h2>
                <small>09/02/2025</small>
                <p>StartUp Simulation 2025 - "STARTUP SIMULATION 2025" is a hands-on workshop offering a practical experience of the entrepreneurial process. Participants will go through a simulation of how to secure seed funding and incubation support from the Startup Bihar program.

                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        <div class="container right-container">
        <img src=" img/IC LOGO (1).png " alt='logo'/>
            <div class="text-box">
                <h2>CBDE Faculty Orientation</h2>
                <small>22/07/2025</small>
                <p>CBDE Orientation 2nd batch - Orientation-Cum-Induction Program to welcome the second batch of faculty members and students into the Capacity Building for Design and Entrepreneurship (CBDE) initiative. This event marked the official start for the new participants, encouraging them to connect and grow together.

                </p>
                <span class="right-container-arrow"></span>
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


