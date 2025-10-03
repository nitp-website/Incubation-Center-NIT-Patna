import React from 'react'
import './card.css'
import Footer from '../../footer' 
import Navbar from '../../Navbar';

const FlipCard = ({ card, isFlipped, onToggleFlip }) => {
  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => onToggleFlip(card.id)} // Add onClick to flip the card
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <div className="image"></div>
          </div>
        <div className="flip-card-back">
          <h3 className="card-title">{card.title}</h3>
          {card.founder && <p className="card-founder" id={`found-${card.id}`}>Founder: {card.founder}</p>}
          <p className="card-description">{card.description}</p>
          <button className="button-know-more">Know More</button>
        </div>
      </div>
    </div>
  );
};

function Pag() {
  return (
    <div className='cards_pag'>
      <Navbar/>
      <div class="container_header">
      <div>
      <h1   style={{ color: "#0ef" }}>Incubations</h1>
      </div>
      </div> 
  <div className="main">
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/onibus.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Onibus</p>
            <p id="found">Founder</p>
            <p class="card__description">
             Onibus offers a service-oriented app and web platform facilitating efficient communication between schools and parents about students' activities.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/busymech.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Busy Mechanic</p>
             <p id="found">Founder</p>
            <p class="card__description">
            Expert mobile mechanics providing reliable vehicle care and service at competitive prices, conveniently at your home or office.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/shekhartele.png " alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Shekhar Telesystems</p>
             <p id="found">Founder</p>
            <p class="card__description">
               Shekhar Telesystems revolutionizes water management with advanced solutions for hassle-free living and upgraded surroundings. 
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
          </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Astomverse Innovations</p>
             <p id="found">Naveen Prabhat</p>
             <p class="card__description">
            Our innovative EdTech product harnesses the power of Virtual Reality (VR) and Augmented Reality (AR) technologies to revolutionize traditional learning methods.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
          </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Schooglink</p>
             <p id="found">Himanshu Agrawal</p>
             <p class="card__description">
                 Schooglink" is a school community platform to connect the entire education eco-system in the country. India today has 14.5 lakh schools, 80 lakh teachers and more than 259 million students.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Flixshine India Private Limited</p>
             <p id="found">Harendra Narayan</p>
            <p class="card__description">
                Initially we were working on creation of an Art and Craft marketplace. But now we are working on cloud kitchen aimed at providing home made food at very affordable prices.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Blossom Review Pvt. Ltd. SBN202006532</p>
             <p id="found">Satish kumar Paswan</p>
             <p class="card__description">
             Blossom Review is a large platform to provide digital photography services to tourist and non tourist people.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">PLANET FINANCE</p>
             <p id="found">Sudhir Sinha</p>
            <p class="card__description">
            The concept is to bring Artificial intelligence -based web portal that will manage customized finance portfolio and wealth Management for an individual.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">ORNA24 Industries Private Limited</p>
             <p id="found">Kundan Sarraf</p>
             <p class="card__description">
             PRODUCT INNOVATION:- We have made pure 24 carat gold & silver jewellery by removing all impurities from gold and silver jewelry.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Sewacity Technologies Pvt.Ltd.</p>
             <p id="found">Mayank  Gupta</p>
             <p class="card__description">
             Sewacity offers to provide a digital platform to every business of city where every business owner can expand their businesses.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup instant Pvt. Ltd.</p>
             <p id="found">Gaurav Kumar Mishra</p>
            <p class="card__description">
              StartUp Instant is a unique social platform and networking ecosystem where students, entrepreneurs, mentors and investors.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">DelyFresh Farm</p>
             <p id="found">Omkar  Kumar</p>
             <p class="card__description">
              We are providing full stack solution for farmers under one roof (Chickenwala Kisan Seva Kendra) at their doorstep.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Bhavah Healthcare Private Limited</p>
             <p id="found">Prince  Shubham</p>
              <p class="card__description">
              Quick, affordable, accessible, connecting Healthcare and Emergency services/support for smaller cities and Rural areas.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">UNPARALLED LEARNING TECHNOLOGIES(OPC) PVT.LTD.</p>
             <p id="found">Aditya  Amar</p>
             <p class="card__description">
            Keeping in mind the growth of ed-tech today, we believe it is helpful in creating a connection between teachers and students through an online platform.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">INDIC ARENA PRIVATE LIMITED</p>
             <p id="found">PRATYUSH  ANAND</p>
             <p class="card__description">
            The problem that our gaming software startup aims to solve is the lack of accessibility of software and digital games.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Competition king publication Pvt.Ltd.</p>
             <p id="found">Atul Kumar Sah</p>
             <p class="card__description">
              हमारी कंपनी बुक्स में डील करती हैं हमारी कंपनी निम्न प्रॉब्लम को सॉल्व करती हैं 1-बहुत सारे नए पब्लिकेशन जिनको बुक सेल करने में दिक्कत आती है 2-रिटेलर जिनको सही कीमत पर बुक नहीं मिल पाती है
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">ANTARIKSHA RESEARCH AND DEVELOPMENT(OPC) PRIVATE LTD.</p>
             <p id="found">Veer  Chandra</p>
             <p class="card__description">
              The aerospace research and development is not open for general people or students.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">MAYRAMURTI PVT.LTD.</p>
             <p id="found">Priya  Gupta</p>
            <p class="card__description">
            My startup is working on the adverse problem toubling i.e Waste, Pollution, Flood, lack of treatment of waste.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">AIRSPACE GLOBE PVT.LTD.</p>
             <p id="found">vishal  kumar</p>

            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">NODEWAP TECHNOLOGY PRIVATE LIMITED</p>
          <p class="card__description">
          Software and game developer
          </p>
             <p id="found">Chandan  Sah</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">WHEELS PLAY PVT.LTD.</p>
             <p id="found">SHIVAM  SNEHI</p>
            <p class="card__description">
            Tech-based automobile repairing 
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">NESAI IMF PVT.LTD.</p>
             <p id="found">KALYANI</p>
             <p class="card__description">
              AI based insurance services
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">STEM[PI] Private Limited</p>
             <p id="found">Raj  Nandani</p>

            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Inscribing Architechure OPC pvt. Ltd.</p>
             <p id="found">Medha  Sobti</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">OYK PRODUCTS & SERVICES PVT.LTD.</p>
             <p id="found">Ambarish kumar</p>
             <p class="card__description">
               Healthy and Hygienic food at affordable cost, we are providing Biryani at 99rs and fruits bowl at doorsteps. 
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">A.K.A.K. ONLINE SERVICES & CONSULTANCY PVT.LTD.</p>
             <p id="found">AMIT KUMAR</p>
             <p class="card__description">
              मुख्य समस्या यह है कि छोटे शहरों की लोकल दुकानदार एवं छोटे आवश्यक घरेलू सुविधाएं जैसे कि प्लंबर , वायरिंग ,सीसीटीवी इंस्टॉलेशन, वेल्डिंग ,वाटर कैंट
               </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">GROKCI INNOVATION PVT.LTD.</p>
             <p id="found">Manish  Kumar</p>
             <p class="card__description">
            Inconvenience and Time Drain: The traditional grocery shopping experience involves leaving the houses.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">IBAMBUSA AGRO PVT.LTD.</p>
             <p id="found">Rishi Dev</p>
             <p class="card__description">
            The startup is an online zomato type platform but dedicated to only drinks like shakes, fresh juices, healthy juices.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">NAVMARG RESEARCH & INNOVATION PVT.LTD.</p>
             <p id="found">Akshat  Adarsh</p>
             <p class="card__description">
            The field of specific research is still understudied; there is still a need for convergence and bridging gaps.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">CASDAM CONSULTANCY PVT.LTD.</p>
             <p id="found">Sankalp Modi</p>
             <p class="card__description">
            As a matrimonial site, Our startup is focused on addressing the problem area of helping individuals find compatible partners for marriage.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">CSDP Food Unit Pvt. Ltd.</p>
             <p id="found">Dharmendra  Pandey</p>
             <p class="card__description">
            CSDP Food Startup's "Farms to Mills" project is dedicated to tackling the multifaceted challenges.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Jansuvidhajanausdhi Ecom Pvt Ltd</p>
             <p id="found">Tarun  Kumar</p>
             <p class="card__description">
             My startup is working on the problem of Lancet ‘s 30yrs of study in india from 1990 to 2020 found that East india.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">ADROVER TECHNOLOGIES PVT.LTD.</p>
             <p id="found">Kumar Abhisar</p>
              <p class="card__description">
              we're working in the AdTech Space Especially in Programmatic OOH (Out-Of-home) Advertising, We're creating both Analytical tools.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Biz Growth Elevator pvt.Ltd.</p>
             <p id="found">Alisha Ranjan</p>
             <p class="card__description">
            Economic Empowerment of Entrepreneurs: Growth Bridge focuses on stimulating economic growth by providing resources for entrepreneurs, especially within the MSME.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">EVEGO EVENT PVT.LTD.</p>
             <p id="found">NITISH  KUMAR</p>
            <p class="card__description">
            Our startup is an application and web based platform for all type of event management, where both customer and vendors or service provider can register.
            </p> 
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">RodBez</p>
             <p id="found">Siddharth Shankar Jha</p>
             <p class="card__description">
              Millions of liters of fuel are wasted every day in India, because millions of people in India take one-way rides by taxi.
              </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">BihariKart</p>
             <p id="found">Anu  Priya</p>
            <p class="card__description">
            As we all know that biharis are present in different states and cities of India.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Bhaktipeeth.com</p>
             <p id="found">Kavita Kumari Singh</p>
            <p class="card__description">
            As BhaktiPeeth.com, our startup is addressing the significant challenge of accessibility and convenience in accessing spiritual services rooted in Hindu mythology. 
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">life logic pvt ltd</p>
             <p id="found">prience  kumar</p>
            <p class="card__description">
            We are dedicated to resolving road freight inefficiencies, guaranteeing on-time material deliveries.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">INVIGO INFOTECH</p>
             <p id="found">PRIYANSHU  KUMAR</p>
            <p class="card__description">
            Our startup is dedicated to addressing the multifaceted challenges faced by students in navigating the realms of internships, placement guidance.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Avinav Adarsh</p>
             <p id="found">Avinav  Adarsh</p>
            <p class="card__description">
            As you are well aware, approximately 10 million (1 crore) passengers depend on the Indian Railways daily.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Priyanshu Kumar</p>
             <p id="found">Priyanshu  Kumar</p>
             <p class="card__description">
            We are working on Crafted Sustainable future for fashion or can say Slow fashion, which will be a fusion of innovative traditions and sustainability.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Modified E-Rickshaw</p>
             <p id="found">RAVI RANJAN KUMAR SINGH</p>
            <p class="card__description">
            While working in E-rickshaw manufacturing for the last 6 years, I found that in every e-rickshaw company.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title"></p>
             <p id="found">ASHUTOSH  KUMAR</p>
            <p class="card__description">
            Will be working on survey , manufacturing, supply, installations, commissioning of Control panels , APFC panels.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Novio</p>
             <p class="card__description">
             Our Startup is working on the Food-tech/Could Kitchen/Meal Delivery Ecosystem.
             </p> 
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
         <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">BHARDWAJ CONSTRUCTION</p>
             <p id="found">SAURAV  BHARDWAJ</p>
             <p class="card__description">
             When we want to perform any Puja, Yagya or Anushthan, we do not know what material is required for it.
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image-container">
            <img src="img/incubations/fliptoknow.png" alt="image" class="card__img" />
            </div>
          </div>
          <div className="flip-card-back">
            <p className="title">Saviour</p>
             <p id="found">Vikas Kumar Jha</p>
             <p class="card__description">
             Our startup SAVIOUR serves the problem area of sustainable energy , mobile device and EV charging by using renewable resources like solar energy .
             </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      {/* <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div> */}
    </div>
    {/* <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="image"></div>
          </div>
          <div className="flip-card-back">
            <p className="title">Startup Name</p>
             <p id="found">Founder</p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
    </div> */}
  </div>

  <Footer/>
</div>

  )
}

export default Pag