import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
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
        <h1>All Event Photos</h1>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery1;
