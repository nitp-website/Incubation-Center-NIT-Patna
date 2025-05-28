// import logo from './logo.svg';

import {  Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home'; 
import Navbar from './pages/Navbar';
import Login from './pages/login/login.js'
import Register from './pages/register/register.js'
// import Director from './pages/Directors';  
// import About from './pages/about';
// import Vision from './pages/Vision';
// import Incubations from './pages/incubations';
import Notice from './pages/Notice';
// import Incubationsoo from './pages/swiper';
// import Talks from './pages/talks';
// import Events from './pages/events';
// import Gallery from './pages/gallery';
// import Idea from './pages/idea';
// import Faqs from './pages/faqs';
import Footer from './pages/footer';
// import Talks_LitsenMore from './pages/talks_LitsenMore';
import Homes from './Homes.js';

import Timeline from './pages/events/events_timeLine/index.js'
import Pag from './pages/incubations/page/card.js';
import Team from './pages/team/team.js';
import Gallery1 from './pages/gallery/Gallery.js';
import React from 'react';
import Talks_LitsenMore from './pages/talks_LitsenMore/index.js';
 



function App() {

  // const fun = () => {
  //   return(
  //      <Talks_viewMore/>
  //   );
  // }
  return (
    <div className="App"> 
    {/* < Navbar/> */}
 
    <Routes>
          {/* <Route  path="talks_LitsenMore/index.js" element={<Talks_LitsenMore/>}/>  */}
          <Route  path="/" element={<Homes />}/> 
          <Route index element={<Homes />}/>
          <Route path="/pag" element={<Pag/>}/>
          <Route path="/gallery" element={<Gallery1/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route  path="Notice/index.js" element={<Notice/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route  path="Notice" element={<Notice/>}/> 
          <Route path='/team' element={<Team />} />
          <Route path="/talksmore" element={<Talks_LitsenMore/>}/>
          

    
        </Routes>
        {/* <Gallery1/> */}
        {/* <Gallery/> */}
        {/* <Footer/> */}
        
        
        
        
        
        
        {/* <Incubationsoo/> */}
        
        {/* <Talks_LitsenMore/> */}
       
         
        {/* <Faqs/> */}
    </div>
  );
}

export default App;
