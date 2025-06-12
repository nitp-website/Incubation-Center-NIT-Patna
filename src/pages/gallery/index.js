import React from 'react'; 
import { useNavigate } from "react-router-dom";
import './Gallery.css';
import img from './sell_bg.png'

import { Link } from 'react-router-dom';


// <<<<<<< add_new_images_and_update_Gallery
const Gallery = () => {
  
  const navigate = useNavigate();
  return (
    <>
    <div id="gallery" className='gallery'>
      <h1 className='h11' data-aos="fade-down"> Gallery</h1>
      <div className="gallery1">
        <div className='gallerydiv'  >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          
        </div>
        <div className='gallerydiv'   >
          <div className='imgdiv'data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv' >
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv' data-aos="zoom-in">
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        

      </div>

// const Gallery = () => {
//   const galleryImages = [
//       "img1.jpg",
//       "img2.jpg",
//       "img3.jpg",
//       "img4.jpg",
//       "img5.jpg",
//       "img6.jpg",
//       "img7.jpg",
//       "img8.jpg"
//     ]
//   const navigate = useNavigate();
//   return (
//     <>
//     <div id="gallery" className='gallery'>
//       <h1 className='h11' data-aos="fade-down"> Gallery</h1>
//       <div className="harshr">
//         <div className="harshr-track">
//           {galleryImages.map((filename, idx) => (
//             <div className='harsh' key={idx}>
//               <img src={`/gallery-images/ic_startups_gallery/${filename}`} alt={`gallery_${idx}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ height: "60px" }}></div>
//       <div className="harshr">
//         <div className="harshr-track">
//           {galleryImages.map((filename, idx) => (
//             <div className='harsh' key={idx}>
//               <img src={`/gallery-images/ic_startups_gallery/${filename}`} alt={`gallery_${idx}`} />
//             </div>
//           ))}
//         </div>
//       </div>

    
      <div class="events_btn" data-aos="fade-left">
          <button className='btn' onClick={()=>navigate('/gallery')}> 
      View More</button> 
    </div>  
  </div>
  </>
  );
};

export default Gallery;
