import './style.css';
import img from "./sell_bg.png";
import Footer from '../footer';
import Navbar from '../Navbar';
import { useState, useEffect } from 'react';

// Importing all images
import nit1 from '../EvImages/nit1.JPG'
import nit3 from '../EvImages/nit3.jpg'
import nit5 from '../EvImages/nit5.jpeg';
import nit6 from '../EvImages/nit6.jpeg';
import nit7 from '../EvImages/nit7.jpeg';
import nit11 from '../EvImages/nit11.jpeg';
import nit12 from '../EvImages/nit12.jpeg';
import nit13 from '../EvImages/nit13.JPG';
import nit14 from '../EvImages/nit14.JPG';
import nit15 from '../EvImages/nit15.JPG';
import nit16 from '../EvImages/nit16.JPG';
import nit17 from '../EvImages/nit17.JPG';
import nit18 from '../EvImages/nit18.JPG';
import nit19 from '../EvImages/nit19.JPG';
import nit20 from '../EvImages/nit20.JPG';
import nit21 from '../EvImages/nit21.JPG';
import nit22 from '../EvImages/nit22.JPG';
import nit23 from '../EvImages/nit23.JPG';
import nit24 from '../EvImages/nit24.JPG';
import nit25 from '../EvImages/nit25.JPG';
import nit26 from '../EvImages/nit26.JPG';
import nit27 from '../EvImages/nit27.JPG';
import nit28 from '../EvImages/nit28.JPG';
import nit29 from '../EvImages/nit29.JPG';
import nit30 from '../EvImages/nit30.JPG';
import nit31 from '../EvImages/nit31.JPG';
import nit32 from '../EvImages/nit32.JPG';
import nit33 from '../EvImages/nit33.JPG';
import nit34 from '../EvImages/nit34.JPG';
import nit35 from '../EvImages/nit35.JPG';
import nit36 from '../EvImages/nit36.JPG';
import nit37 from '../EvImages/nit37.JPG';
import nit38 from '../EvImages/nit38.JPG';
import nit39 from '../EvImages/nit39.JPG';
import nit40 from '../EvImages/nit40.JPG';
import nit41 from '../EvImages/nit41.JPG';
import nit42 from '../EvImages/nit42.JPG';
import nit43 from '../EvImages/nit43.JPG';
import nit44 from '../EvImages/nit44.JPG';
import nit45 from '../EvImages/nit45.JPG';
import nit46 from '../EvImages/nit46.JPG';
import nit47 from '../EvImages/nit47.JPG';
import nit48 from '../EvImages/nit48.JPG';
import nit49 from '../EvImages/nit49.JPG';
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
import nit61 from '../EvImages/nit61.JPG';
import nit62 from '../EvImages/nit62.JPG';
import nit63 from '../EvImages/nit63.JPG';
import nit64 from '../EvImages/nit64.JPG';
import nit65 from '../EvImages/nit65.JPG';

const allImages = [
  nit11, nit12, nit13, nit14, nit15, nit16, nit17, nit18, nit19, nit20,
  nit21, nit22, nit23, nit24, nit25, nit26, nit27, nit28, nit29, nit30,
  nit31, nit32, nit33, nit34, nit35, nit36, nit37, nit38, nit39, nit40,
  nit41, nit42, nit43, nit44, nit45, nit46, nit47, nit48, nit49, nit50,
  nit51, nit52, nit53, nit54, nit55, nit56, nit57, nit58, nit59, nit60,
  nit61, nit62, nit63, nit64, nit65,nit1,nit3,nit5,nit6
];

function Gallery1() {
  const [showAll, setShowAll] = useState(false);
  const [randomImages, setRandomImages] = useState([]);
  const [enlargedIndexes, setEnlargedIndexes] = useState(new Set());

  useEffect(() => {
    // Select 10 random images once on load
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 10));
  }, []);

  const toggleEnlarge = (index) => {
    setEnlargedIndexes(prev => {
      const updated = new Set(prev);
      if (updated.has(index)) {
        updated.delete(index);
      } else {
        updated.add(index);
      }
      return updated;
    });
  };

  const imagesToShow = showAll ? allImages : randomImages;

  const renderGrid = (images) => (
    <div className="image-grid">
      {images.map((imageSrc, index) => (
        <div
          className={`grid-item ${enlargedIndexes.has(index) ? 'enlarged' : ''}`}
          key={index}
          onClick={() => toggleEnlarge(index)}
        >
          <img src={imageSrc} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container_header1">
        <div id='gallery'>
          <h1>Gallery</h1>
        </div>
      </div>

      <div className='hhar'>
        <div className='text2'>Event Moments :-</div>
        {renderGrid(imagesToShow)}

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => setShowAll(!showAll)} className="view-more-btn">
            {showAll ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery1;
