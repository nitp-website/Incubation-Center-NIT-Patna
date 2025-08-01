
import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

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
import './Gallery.css';

const supabaseBaseUrl =
  'https://xztqqftgeucxoxiugsqr.supabase.co/storage/v1/object/public/gallery-images/';
const role = localStorage.getItem('role');

// List of allowed/expected image filenames
const initialImageNames = [
  'nit1.JPG', 'nit4.JPG', 'nit10.JPG', 'nit18.JPG', 'nit21.JPG',
  'nit17.JPG', 'nit25.JPG', 'nit26.JPG', 'nit27.JPG','nit15.JPG'
  ,'nit29.JPG','nit28.JPG', 'nit40.JPG', 'nit41.JPG', 'nit42.JPG', 'nit43.JPG', 'nit44.JPG',
  'nit46.JPG', 'nit47.JPG', 'nit48.JPG', 'nit52.JPG', 'nit53.JPG', 'nit54.JPG',
  'nit55.JPG', 'nit56.JPG', 'nit57.JPG', 'nit58.JPG', 'nit59.JPG'
];

const Gallery1 = () => {
  const [imageNames, setImageNames] = useState([]);

  // Fetch actual images from Supabase to get updated timestamps
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .list('', { limit: 100 });

      if (error) {
        console.error('Error fetching image list:', error.message);
        setImageNames(initialImageNames); // fallback
        return;
      }

      const updated = initialImageNames.map((img) => {
        const file = data.find((f) => f.name === img);
        if (file?.updated_at) {
          const timestamp = new Date(file.updated_at).getTime();
          return `${img}?t=${timestamp}`;
        }
        return img;
      });

      setImageNames(updated);
    };

    fetchImages();
  }, []);

  const handleChangeImage = (oldName) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.jpg';

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop().toLowerCase();
      if (fileExt !== 'jpg') {
        alert('Only .jpg images are allowed. Please select a .jpg file.');
        return;
      }

      await supabase.storage.from('gallery-images').remove([oldName]);

      const { error } = await supabase.storage
        .from('gallery-images')
        .upload(oldName, file, { upsert: true });

      if (error) {
        alert('Error updating image: ' + error.message);
      } else {
        alert('Image replaced successfully!');
        setImageNames((prev) =>
          prev.map((img) =>
            img.startsWith(oldName) ? `${oldName}?t=${Date.now()}` : img
          )
        );
      }
    };

    input.click();
  };

  return (
    <>

      <Navbar />
      <div className="container_header1">
      <h1>ALL EVENT PHOTOS</h1>
      </div>
      <div id="gallery" className="gallery">
        <h1 className="h11" data-aos="fade-down">Gallery</h1>
        <div className="gallery1">
          {imageNames.map((imgName, idx) => {
            const cleanName = imgName.split('?')[0];
            return (
              <div className="gallerydiv" key={idx}>
                <div className="imgdiv" data-aos="zoom-in">
                  <img
                    src={`${supabaseBaseUrl}${imgName}`}
                    alt={cleanName}
                    className="imgg"
                  />
                  {role === 'admin' && (
                    <button
                      className="change-button"
                      onClick={() => handleChangeImage(cleanName)}
                    >
                      Change
                    </button>
                  )}
                </div>
              </div>
            );
          })}

//     <Navbar/>
//      <div className="container_header1">
//         <h1 >All Event Photos</h1>
//       </div>
//     <div id="gallery" className='gallery'>
//       <h1 className='h11' data-aos="fade-down" style={{ color: "#0ef" }} > Gallery</h1>
//       <div className="gallery1">
//         <div className='gallerydiv'  >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit1} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv'data-aos="zoom-in">
//           <img src={nit4} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv'data-aos="zoom-in">
//           <img src={nit6} alt="img" className='imgg'/>
//           </div>
          
//         </div>
//         <div className='gallerydiv'   >
//           <div className='imgdiv'data-aos="zoom-in">
//           <img src={nit10} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv'data-aos="zoom-in">
//           <img src={nit11} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv'data-aos="zoom-in">
//           <img src={nit21} alt="img" className='imgg'/>
//           </div>

          
//         </div>
//         <div className='gallerydiv' >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit13} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit14} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit15} alt="img" className='imgg'/>
//           </div>  
//         </div>
//         <div className='gallerydiv' >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit23} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit24} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit25} alt="img" className='imgg'/>
//           </div>  
//         </div>
//         <div className='gallerydiv' >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit26} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit27} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit28} alt="img" className='imgg'/>
//           </div>  
//         </div>
//         <div className='gallerydiv' >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit29} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit31} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit34} alt="img" className='imgg'/>
//           </div>  
//         </div>
//          <div className='gallerydiv' >
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit35} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit37} alt="img" className='imgg'/>
//           </div>
//           <div className='imgdiv' data-aos="zoom-in">
//           <img src={nit38} alt="img" className='imgg'/>
//           </div>  

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery1;
