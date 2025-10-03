
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { supabase } from '../../supabaseClient';
import Navbar from '../Navbar';
import Footer from '../footer';
import './Gallery.css';

const supabaseBaseUrl = 'https://xztqqftgeucxoxiugsqr.supabase.co/storage/v1/object/public/gallery-images/';
const role = localStorage.getItem('role');

const allowedFiles = [
  'nit1.JPG', 'nit10.JPG', 'nit18.JPG', 'nit21.JPG',
  'nit17.JPG', 'nit27.JPG',
  'nit41.JPG', 'nit29.JPG',
  'nit54.JPG', 'nit57.JPG', 'nit58.JPG', 'nit59.JPG',
];

const Gallery = () => {
  const [imageNames, setImageNames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .list('', { limit: 100 });

      if (error) {
        console.error('Error fetching image list:', error.message);
        return;
      }

      const updatedImageNames = data
        .filter(file => allowedFiles.includes(file.name))
        .map(file => `${file.name}?t=${new Date(file.updated_at).getTime()}`); // Add timestamp

      setImageNames(updatedImageNames);
    };

    fetchImages();
  }, []);

  const handleChangeImage = (oldNameWithTimestamp) => {
    const oldName = oldNameWithTimestamp.split('?')[0]; // Get pure filename without timestamp
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

      // Delete old image
      await supabase.storage.from('gallery-images').remove([oldName]);

      // Upload new image with same name
      const { error } = await supabase.storage
        .from('gallery-images')
        .upload(oldName, file, { upsert: true });

      if (error) {
        alert('Error updating image: ' + error.message);
      } else {
        alert('Image replaced successfully!');
        // Update state to trigger reload with new timestamp
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
                      onClick={() => handleChangeImage(imgName)}
                    >
                      Change
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="events_btn" data-aos="fade-left">
          <button className='btn' onClick={() => navigate('/gallery')}>
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
