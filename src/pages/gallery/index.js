import './style.css';
import Footer from '../footer';
import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing all images
import nit1 from '../EvImages/nit1.JPG';
import nit4 from '../EvImages/nit4.JPG';
import nit6 from '../EvImages/nit6.jpeg';
import nit10 from '../EvImages/nit10.JPG';
import nit11 from '../EvImages/nit11.jpeg';
import nit12 from '../EvImages/nit12.jpeg';
import nit13 from '../EvImages/nit13.JPG';
import nit14 from '../EvImages/nit14.JPG';
import nit15 from '../EvImages/nit15.JPG';
import nit16 from '../EvImages/nit16.JPG';
import nit17 from '../EvImages/nit17.JPG';
import nit18 from '../EvImages/nit18.JPG';
import nit21 from '../EvImages/nit21.JPG';
import nit22 from '../EvImages/nit22.JPG';
import nit23 from '../EvImages/nit23.JPG';
import nit24 from '../EvImages/nit24.JPG';
import nit25 from '../EvImages/nit25.JPG';
import nit26 from '../EvImages/nit26.JPG';
import nit27 from '../EvImages/nit27.JPG';
import nit28 from '../EvImages/nit28.JPG';
import nit29 from '../EvImages/nit29.JPG';
import nit31 from '../EvImages/nit31.JPG';
import nit34 from '../EvImages/nit34.JPG';
import nit35 from '../EvImages/nit35.JPG';
import nit36 from '../EvImages/nit36.JPG';
import nit37 from '../EvImages/nit37.JPG';
import nit38 from '../EvImages/nit38.JPG';
import nit40 from '../EvImages/nit40.JPG';
import nit41 from '../EvImages/nit41.JPG';
import nit42 from '../EvImages/nit42.JPG';
import nit43 from '../EvImages/nit43.JPG';
import nit44 from '../EvImages/nit44.JPG';
import nit46 from '../EvImages/nit46.JPG';
import nit47 from '../EvImages/nit47.JPG';
import nit48 from '../EvImages/nit48.JPG';
import nit50 from '../EvImages/nit50.JPG';
import nit51 from '../EvImages/nit51.JPG';
import nit52 from '../EvImages/nit52.JPG';
import nit53 from '../EvImages/nit53.JPG';
import nit54 from '../EvImages/nit54.JPG';
import nit55 from '../EvImages/nit55.JPG';
import nit56 from '../EvImages/nit56.JPG';
import nit57 from '../EvImages/nit57.JPG';
import nit58 from '../EvImages/nit58.JPG';
import nit59 from '../EvImages/nit59.JPG';
import nit60 from '../EvImages/nit60.JPG';

const allImages = [
  nit1, nit4, nit6, nit10, nit11, nit12, nit13, nit14, nit15, nit16, nit17, nit18,
  nit21, nit22, nit23, nit24, nit25, nit26, nit27, nit28, nit29,
  nit31, nit34, nit35, nit36, nit37, nit38, nit40, nit41, nit42, nit43, nit44,
  nit46, nit47, nit48, nit50, nit51, nit52, nit53, nit54, nit55, nit56,
  nit57, nit58, nit59, nit60
];

function Gallery1() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const [randomImages, setRandomImages] = useState([]);
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 8));
  }, []);

  const handleClick = (index) => {
    // Check screen size to apply toggle only on small devices
    if (window.innerWidth <= 768) {
      setEnlargedIndex(prev => (prev === index ? null : index));
    }
  };

  const imagesToShow = showAll ? allImages : randomImages;

  return (
    <>
      <Navbar />
      <div className="container_header1">
        <div id="gallery">
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="hhar">
        <div className="text2">Event Moments :-</div>

        <div className="image-grid">
          {imagesToShow.map((src, index) => (
            <div
              key={index}
              className={`grid-item ${enlargedIndex === index ? 'zoom' : ''}`}
              onClick={() => handleClick(index)}
            >
              <img src={src} alt={`event-${index}`} />
            </div>
          ))}
        </div>

         <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="view-more-btn"
          onClick={() => navigate('/fulll-gallery')}
        >
          View More
        </button>
      </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery1;
