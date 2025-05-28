// import logo from './logo.svg';

// import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; 
import Navbar from './pages/Navbar';
import Director from './pages/Directors';  
import About from './pages/about';
import Vision from './pages/Vision';
import Incubations from './pages/incubations';
// import Incubationsoo from './pages/swiper';
import Talks from './pages/talks';
import Events from './pages/events';
// import Gallery from './pages/gallery';
import Idea from './pages/idea';
import Form from './pages/faqs';
import Footer from './pages/footer';
// import Talks_LitsenMore from './pages/talks_LitsenMore';
import Gallery from './pages/gallery/Gallery.js';
import GoogleSlider from './pages/googleSlider/GoogleSlider.jsx';
import React from 'react';

function Homes() {

  // const fun = () => {
  //   return(
  //      <Talks_viewMore/>
  //   );
  // }
  return (
    <div className="Homes"> 
        < Navbar/>
        <Home />
        <About/>
        <Gallery/> 
        <Vision/>
        <GoogleSlider />
        <Director/>
        <Incubations/>
        {/* <Incubationsoo/> */}
        <Talks  />
        {/* <Talks_LitsenMore/> */}
        <Events/>
        <Idea/>
        <Form/>
        {/* <Faqs/> */} 
        <Footer/>
    </div>
  );
}

export default Homes;
