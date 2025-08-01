 import nit1 from './GalleryImages/nit1.JPG';
import nit4 from './GalleryImages/nit4.JPG';
import nit6 from './GalleryImages/nit6.jpeg';
import nit10 from './GalleryImages/nit10.JPG';
import nit11 from './GalleryImages/nit11.jpeg';
import nit12 from './GalleryImages/nit12.jpeg';
import nit13 from './GalleryImages/nit13.JPG';
import nit14 from './GalleryImages/nit14.JPG';
import nit15 from './GalleryImages/nit15.JPG';
import nit17 from './GalleryImages/nit17.JPG';
import nit18 from './GalleryImages/nit18.JPG';
import nit21 from './GalleryImages/nit21.JPG';
import nit22 from './GalleryImages/nit22.JPG';
import nit23 from './GalleryImages/nit23.JPG';
import nit24 from './GalleryImages/nit24.JPG';
import nit25 from './GalleryImages/nit25.JPG';
import nit26 from './GalleryImages/nit26.JPG';
import nit27 from './GalleryImages/nit27.JPG';
import nit28 from './GalleryImages/nit28.JPG';
import nit29 from './GalleryImages/nit29.JPG';

import nit31 from './GalleryImages/nit31.JPG';
// import nit2 from './GalleryImages/nit12.jpeg';
// import nit33 from './GalleryImages/nit13.JPG';
import nit34 from './GalleryImages/nit34.JPG';
import nit35 from './GalleryImages/nit35.JPG';
import nit37 from './GalleryImages/nit37.JPG';
import nit38 from './GalleryImages/nit38.JPG';
import nit40 from './GalleryImages/nit40.JPG';
import nit41 from './GalleryImages/nit41.JPG';
import nit42 from './GalleryImages/nit42.JPG';
import nit43 from './GalleryImages/nit43.JPG';
import nit44 from './GalleryImages/nit44.JPG';
import nit46 from './GalleryImages/nit46.JPG';
import nit47 from './GalleryImages/nit47.JPG';
import nit48 from './GalleryImages/nit48.JPG';
import nit50 from './GalleryImages/nit50.JPG';

import nit51 from './GalleryImages/nit51.JPG';
import nit52 from './GalleryImages/nit52.JPG';
import nit53 from './GalleryImages/nit53.JPG';
import nit54 from './GalleryImages/nit54.JPG';
import nit55 from './GalleryImages/nit55.JPG';
import nit56 from './GalleryImages/nit56.JPG';
import nit57 from './GalleryImages/nit57.JPG';
import nit58 from './GalleryImages/nit58.JPG';
import nit59 from './GalleryImages/nit59.JPG';
import Navbar from '../Navbar';
import Footer from '../footer';

import React from 'react'; 
import { useNavigate } from "react-router-dom";
import './Gallery.css';
import img from './sell_bg.png'

import { Link } from 'react-router-dom';

const Gallery1 = () => {
  
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
     <div className="container_header1">
        <h1 >All Event Photos</h1>
      </div>
    <div id="gallery" className='gallery'>
      <h1 className='h11' data-aos="fade-down" style={{ color: "#0ef" }} > Gallery</h1>
      <div className="gallery1">
        <div className='gallerydiv'  >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit1} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit4} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit6} alt="img" className='imgg'/>
          </div>
          
        </div>
        <div className='gallerydiv'   >
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit10} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit11} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={nit21} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit13} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit14} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit15} alt="img" className='imgg'/>
          </div>  
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit23} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit24} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit25} alt="img" className='imgg'/>
          </div>  
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit26} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit27} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit28} alt="img" className='imgg'/>
          </div>  
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit29} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit31} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit34} alt="img" className='imgg'/>
          </div>  
        </div>
         <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit35} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit37} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit38} alt="img" className='imgg'/>
          </div>  
        </div>
         <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit40} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit41} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit42} alt="img" className='imgg'/>
          </div>  
        </div>
         <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit43} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit44} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit46} alt="img" className='imgg'/>
          </div>  
        </div>
         <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit47} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit48} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit50} alt="img" className='imgg'/>
          </div>  
        </div>
         <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit58} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit52} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit53} alt="img" className='imgg'/>
          </div>  
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit22} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit17} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={nit18} alt="img" className='imgg'/>
          </div>

          
        </div>
        

      </div>
    
      
  </div>
  <Footer/>
  </>
  );
};

export default Gallery1;
