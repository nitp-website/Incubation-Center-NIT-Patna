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
import  AllEvents from './pages/events/allevent.js';
import Pag from './pages/incubations/page/card.js';
import Professor from './pages/team/professor.js';
import Student from './pages/team/student.js';
import Admin from './pages/team/Admin.js';

import Gallery1 from './pages/gallery/Gallery.js';
import React from 'react';
import Talks_LitsenMore from './pages/talks_LitsenMore/index.js';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';




function App() {
  // const fun = () => {
  //   return(
  //      <Talks_viewMore/>
  //   );
  // }


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

  return (
    <div className="App"> 
    {/* < Navbar/> */}
    <ScrollToHash />
    <Routes>
          {/* <Route  path="talks_LitsenMore/index.js" element={<Talks_LitsenMore/>}/>  */}
          <Route  path="/" element={<Homes />}/> 
          <Route index element={<Homes />}/>
          <Route path="/pag" element={<Pag/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/allevent" element={<AllEvents/>}/>
          <Route  path="Notice/index.js" element={<Notice/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route  path="Notice" element={<Notice/>}/> 
          <Route path='/professor' element={<Professor />} />
          <Route path='/student' element={<Student />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path="/gallery" element={<Gallery1/>}/>
          <Route path="/talksmore" element={<Talks_LitsenMore/>}/>

    
        </Routes>
        {/* <Gallery/> */}
        {/* <Footer/> */}
        
        
        
        
        
        
        {/* <Incubationsoo/> */}
        
        {/* <Talks_LitsenMore/> */}
       
        {/* <Gallery/> */}
         
        {/* <Faqs/> */}
    </div>
  );
}

export default App;
