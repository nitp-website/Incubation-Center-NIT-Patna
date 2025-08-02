// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';

import { useNavigate } from "react-router-dom";
import React from 'react';
import Pag from './page/card.js';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import "./style.css";

const Incubations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className='incubations' id='incubations'>

        <div class="incubations_header"> 
          <h1 data-aos="fade-down"   style={{ color: "#0ef" }}>Incubations</h1>
          <p  data-aos="fade-right"> NIT Patna's Incubation Center fosters a statewide startup ecosystem, offering essential infrastructure like office spaces, meeting rooms, networking platforms, and management support for aspiring entrepreneurs.</p>
        </div>

        <div className="incubations_swiper">
          <Swiper className="card__incubations swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth:300,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}

            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="img/incubations/onibus.png" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Onibus</h3>
                  <p class="card__description">
                  Onibus offers a service-oriented app and web platform facilitating efficient communication between schools and parents about students' activities.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="img/incubations/busymech.png" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Busy Mechanic</h3>
                  <p class="card__description">
                  Expert mobile mechanics providing reliable vehicle care and service at competitive prices, conveniently at your home or office.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="img/incubations/shekhartele.png " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Shekhar Telesystems</h3>
                  <p class="card__description">
                  Shekhar Telesystems revolutionizes water management with advanced solutions for hassle-free living and upgraded surroundings. 
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
             <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Schooglink</h3>
                  <p class="card__description">
                    Schooglink" is a school community platform to connect the entire education eco-system in the country. India today has 14.5 lakh schools, 80 lakh teachers and more than 259 million students.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:himanshu@schooglink.com'>himanshu@schooglink.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Flixshine India Private Limited</h3>
                  <p class="card__description">
                    Initially we were working on creation of an Art and Craft marketplace. But now we are working on cloud kitchen aimed at providing home made food at very affordable prices.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:harendra.niper@gmail.com'>harendra.niper@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Blossom Review Pvt. Ltd. SBN202006532</h3>
                  <p class="card__description">
                  Blossom Review is a large platform to provide digital photography services to tourist and non tourist people with all photography services, documentry and Drone mapping services.
                  It is a tourist care services providers company best in patna. Now services in Bihar, Jharkhand,UP,and Assam.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:satishkp113@gmail.com'>satishkp113@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">PLANET FINANCE</h3>
                  <p class="card__description">
                  The concept is to bring Artificial intelligence -based web portal that will manage customized finance portfolio and wealth Management for an individual .This will be a revolutionary app based product that will provide customized wealth portfolio Management.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:sudhirsinha2002@yahoo.com'>sudhirsinha2002@yahoo.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>
             
          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">ORNA24 Industries Private Limited</h3>
                  <p class="card__description">
                  PRODUCT INNOVATION:- We have made pure 24 carat gold & silver jewellery by removing all impurities from gold and silver jewelry. 
                  SERVICE INNOVATION:- 72 hours targeted delivery time to around the world after receiving orders from customers.
                  PROCESS INNOVATION:- A person who comes to our website, as soon as possible, will confirm the order.
                  There is no physical contribution of any person in all these processes.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:sarrafkundan@gmail.com'>sarrafkundan@gmail.com</a></p>
                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Sewacity Technologies Pvt.Ltd.</h3>
                  <p class="card__description">
                  Sewacity offers to provide a digital platform to every business of city where every business owner can expand their businesses.
                  Sewacity derives its motivation from “Serve the City” which means to provide services to the people in a city to make their work effortless.
                  We are unique with our idea as we provide a digital platform where customers can get their services fulfilled from the local service providers efficiently.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:gupta656mayank@gmail.com'>gupta656mayank@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

         <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Startup instant Pvt. Ltd</h3>
                  <p class="card__description">
                  StartUp Instant is a unique social platform and networking ecosystem where students, entrepreneurs, mentors and investors collaborate to build new ideas and businesses.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:thegauravmishra@yahoo.com'>thegauravmishra@yahoo.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">DelyFresh Farm</h3>
                  <p class="card__description">
                  We are providing full stack solution for farmers under one roof (Chickenwala Kisan Seva Kendra) at their doorstep.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:omkarkumar39@gmail.com'>omkarkumar39@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>
          
          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                 <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Bhavah Healthcare Private Limited</h3>
                  <p class="card__description">
                   Quick, affordable, accessible, connecting Healthcare and Emergency services/support for smaller cities and Rural areas.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='princesubham862@gmail.com'>princesubham862@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">UNPARALLED LEARNING TECHNOLOGIES(OPC) PVT.LTD.</h3>
                  <p class="card__description">
                 Keeping in mind the growth of ed-tech today, we believe it is helpful in creating a connection between teachers and students through an online platform.
                 Due to the less attention given to the monotonous and non-innovative nature of textbooks.
                 Through this, we believe in creating digital textbooks for students to learn not just by reading but by interacting.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:adityaamar.garva@gmail.com'>adityaamar.garva@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>


          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">INDIC ARENA PRIVATE LIMITED</h3>
                  <p class="card__description">
                  The problem that our gaming software startup aims to solve is the lack of accessibility of software and digital games [ Gaon Se Gaming ] .
                  Many current gaming platforms and titles cater primarily to highly skilled or competitive players.
                  Our software aims to provide a comprehensive and inclusive gaming and software experience for all customers, regardless of their skill level or experience.
                  Apart from this we are also focused on the expansion of digital footprint in the rural parts.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='contactindicstudios@gmail.com'>contactindicstudios@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Competition king publication Pvt.Ltd.</h3>
                  <p class="card__description">
                  हमारी कंपनी बुक्स में डील करती हैं हमारी कंपनी निम्न प्रॉब्लम को सॉल्व करती हैं 1-बहुत सारे नए पब्लिकेशन जिनको बुक सेल करने में दिक्कत आती है 2-रिटेलर जिनको सही कीमत पर बुक नहीं मिल पाती है 3- स्टूडेंट जोकि एजुकेशन लेकर जॉब ढूंढते हैं उनका भी हम लोग प्रॉब्लम सॉल्व पढ़ते हैं 4-स्टूडेंट जिनको किताब लेने के लिए बड़े शहरों में जाना पड़ता है
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:competitionkingoff@gmail.com'>competitionkingoff@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">ANTARIKSHA RESEARCH AND DEVELOPMENT(OPC) PRIVATE LTD.</h3>
                  <p class="card__description">
                  The aerospace research and development is not open for general people or students.
                  For academia and industry people, the reality and the perception of aerospace objects like drone, CubeSats is difficult.
                  This leads to limited aerospace exploration by limited people and humans skill should be explore to more people.
                  The drone can be utilized for many purposes in modern day such as Agriculture, E-commerce, and even for human transportation etc.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:antariksha.rnd@gmail.com'>antariksha.rnd@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">MAYRAMURTI PVT.LTD.</h3>
                  <p class="card__description">
                  My startup is working on the adverse problem toubling i.e Waste, Pollution, Flood, lack of treatment of waste, scarcity of organic product , flood, recognition .
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:priyapiya9155@gmail.com'>priyapiya9155@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>
          
          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">AIRSPACE GLOBE PVT.LTD.</h3>
                  <p class="card__description">
                  
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:muzvishalkumar417@gmail.com'>muzvishalkumar417@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">NODEWAP TECHNOLOGY PRIVATE LIMITED</h3>
                  <p class="card__description">
                  Software and game developer
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:nodewaptechnology@gmail.com'>nodewaptechnology@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">WHEELS PLAY PVT.LTD.</h3>
                  <p class="card__description">
                  Tech-based automobile repairing 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:wheelsplay.in@gmail.com'>wheelsplay.in@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
         </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">NESAI IMF PVT.LTD.</h3>
                  <p class="card__description">
                  AI based insurance services
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:kapil75k@gmail.com'>kapil75k@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">STEM[PI] Private Limited</h3>
                  <p class="card__description">
                  
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:rajnandaniswrup113@gmail.com'>rajnandaniswrup113@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Inscribing Architechure OPC pvt. Ltd.</h3>
                  <p class="card__description">
                  
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:medhasobti@gmail.com'>medhasobti@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">OYK PRODUCTS & SERVICES PVT.LTD.</h3>
                  <p class="card__description">
                  Healthy and Hygienic food at affordable cost, we are providing Biryani at 99rs and fruits bowl at doorsteps. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:ambopqc@gmail.com'>ambopqc@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">A.K.A.K. ONLINE SERVICES & CONSULTANCY PVT.LTD.</h3>
                  <p class="card__description">
                  मुख्य समस्या यह है कि छोटे शहरों की लोकल दुकानदार एवं छोटे आवश्यक घरेलू सुविधाएं जैसे कि प्लंबर , वायरिंग ,सीसीटीवी इंस्टॉलेशन, वेल्डिंग ,वाटर कैंट इत्यादि की सुविधाएं प्रत्येक घर तक पहुंचाना अभी तक आसानी से उपलब्ध नहीं है।
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:amitmce2019@gmail.com'>amitmce2019@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">GROKCI INNOVATION PVT.LTD.</h3>
                  <p class="card__description">
                  Inconvenience and Time Drain: The traditional grocery shopping experience involves leaving the houses.
                  👜 Heavy Lifting and Physical Strain: Hauling heavy grocery bags can be physically taxing.
                  🌍 Environmental Impact: Traditional grocery shopping contributes to carbon emissions and wasteful practices.
                  🚗 Limited Access to Fresh Options: Many individuals, particularly those in remote areas, struggle with limited access.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:grokciecom@gmail.com'>grokciecom@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">IBAMBUSA AGRO PVT.LTD.</h3>
                  <p class="card__description">
                  The startup is an online zomato type platform but dedicated to only drinks like shakes, fresh juices, healthy juices, milk based and a lot of drinks variety brought at one platform.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:rishidev22@outlook.com'>rishidev22@outlook.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">NAVMARG RESEARCH & INNOVATION PVT.LTD.</h3>
                  <p class="card__description">
                  The field of specific research is still understudied; there is still a need for convergence and bridging gaps.
                  This innovative and comprehensive strategy /idea is to establish a start-up private research and development (R&D).
                  This idea is a way for job creation in the R&D Sector, aiming to raise funds from public & private ventures for research on large-scale environmental treatments.
                  Long-term plans for Atmanirbhar Bharat and Anusandhan (improving the nation's research facility) provide significant potential.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:pariharakshat02@gmail.com'>pariharakshat02@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">CASDAM CONSULTANCY PVT.LTD.</h3>
                  <p class="card__description">
                  As a matrimonial site, Our startup is focused on addressing the problem area of helping individuals find compatible partners for marriage.
                  our site is working on providing a platform for individuals to create profiles, search for potential partners based on various criteria 
                  such as age, religion, education, interests
                  to ensure that individuals find the right partner who shares their values and goals. Your startup is ultimately focused on making the process of finding a life partner easier.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:sankalpmodi0101@gmail.com'>sankalpmodi0101@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">CSDP Food Unit Pvt. Ltd.</h3>
                  <p class="card__description">
                  CSDP Food Startup's "Farms to Mills" project is dedicated to tackling the multifaceted challenges.
                  Our venture is acutely aware of the obstacles that arise during the journey of raw agricultural products from farms to processing mills.
                  Furthermore, our startup is determined to mitigate the problem of food quality degradation during transportation. 
                  Through advanced monitoring technology, we track crucial parameters such as temperature and humidity to ensure that the quality of agricultural products.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:dpandey593@gmail.com'>dpandey593@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Jansuvidhajanausdhi Ecom Pvt Ltd.</h3>
                  <p class="card__description">
                   My startup is working on the problem of Lancet ‘s 30yrs of study in india from 1990 to 2020 found that East india.
                   East ,west ,north & south india Not only that presently 34% urban populations & 31% rural populations of East india / Bihar are suffering from two metabolic diseases are called HYPERTENSIONS 
                   & Type2 diabetes associated with two end organs of human body are 1) Heart 2).
                   Only 42% has been found in the compliance of regular treatment while these two diseases are required life long & continuous treatment.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:tarun.double2016@gmail.com'>tarun.double2016@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">ADROVER TECHNOLOGIES PVT.LTD.</h3>
                  <p class="card__description">
                  we're working in the AdTech Space Especially in Programmatic OOH (Out-Of-home) Advertising, We're creating both Analytical tools for major Brands as well as a MarketPlace/Exchange for Media Outlet owners.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:adrovertechnologies@gmail.com'>adrovertechnologies@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Biz Growth Elevator pvt.Ltd.</h3>
                  <p class="card__description">
                  1. Economic Empowerment of Entrepreneurs: Growth Bridge focuses on stimulating economic growth by providing resources for entrepreneurs, especially within the MSME.
                  2. Access to Manufacturing Facilities: One of the challenges faced by new and small-scale brands.
                  3. Global Market Connectivity: Many Indian businesses find it challenging to connect with international markets and expand their reach.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:alisharanjan19@gmail.com'>alisharanjan19@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">EVEGO EVENT PVT.LTD.</h3>
                  <p class="card__description">
                  Our startup is an application and web based platform for all type of event management, where both customer and vendors or service provider can register. 
                  Mostly the event organizing family are unable to enjoy their own event, they are always busy in arranging the things and due to lack of experiences and circle they are also unable to manage that perfectly. 
                  So our startup Evego will arrange or manage all type of customize events.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:nk1535628@gmail.com'>nk1535628@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">RodBez</h3>
                  <p class="card__description">
                  Millions of liters of fuel are wasted every day in India, because millions of people in India take one-way rides by taxi, in this situation after taking the customer to the destination, 
                  the taxi comes back empty again to his home, due to which both his fuel and hard work is wasted. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:difellysi@gmail.com'>difellysi@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">BihariKart</h3>
                  <p class="card__description">
                  As we all know that biharis are present in different states and cities of India. 
                  But at many places regional bihari products are not available which are very much liked by these people.
                  Let’s take an example of a variety of mango(MALDAH) which is not available in southern part of India, but people of bihar loves it a lot, but they can't eat that mango sitting in Bangalore. 
                  To solve this problem we are coming up this concept of BihariKart(a place that will make available bihari products at the doorsteps of people leaving outside of Bihar at very reasonable price).
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:kartbihar@gmail.com'>kartbihar@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Bhaktipeeth.com</h3>
                  <p class="card__description">
                  As BhaktiPeeth.com, our startup is addressing the significant challenge of accessibility and convenience in accessing spiritual services rooted in Hindu mythology. 
                  We recognize that in today's fast-paced world, individuals often struggle to find the time and resources to arrange for pandits, pujan samagri, and other essential elements for performing rituals and ceremonies. 
                  Additionally, newcomers to a locality or those in need of specific services may face difficulties in locating trusted vendors. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:kavitasingh4242@gmail.com'>kavitasingh4242@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">life logic pvt ltd</h3>
                  <p class="card__description">
                  We are dedicated to resolving road freight inefficiencies, guaranteeing on-time material deliveries, 
                  and tackling material tracking issues within the logistics market through a combination of technology, process optimization, and strategic solutions. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:kprience4@gmail.com'>kprience4@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Astomverse Innovations</h3>
                  <p class="card__description">
                  Our innovative EdTech product harnesses the power of Virtual Reality (VR) and Augmented Reality (AR) technologies to revolutionize traditional learning methods. 
                  By immersing users in dynamic, interactive environments, we effectively address longstanding educational challenges.
                  With our cutting-edge technology, we empower learners to explore concepts in ways previously unimaginable, paving the way for a new era of educational excellence. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:naveenbhu2019@gmail.com'>naveenbhu2019@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">INVIGO INFOTECH</h3>
                  <p class="card__description">
                  Our startup is dedicated to addressing the multifaceted challenges faced by students in navigating the realms of internships, placement guidance, market demand skills, Job Finding and freelancing opportunities. 
                  Recognizing the evolving landscape of education and work, we have identified several key problem areas that our platform aims to solve. 
                  => Internship opportunity. => Market Demand Skills Courses. => Placement Guidance. => Finding Relevant Job. => Freelance Work Opportunity. => Mentor Facility. => Sponsorship
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:sahpriyanshu71@gmail.com'>sahpriyanshu71@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Avinav Adarsh</h3>
                  <p class="card__description">
                  As you are well aware, approximately 10 million (1 crore) passengers depend on the Indian Railways daily.
                  However, some issues arise in this vital service such as theft and unauthorized occupancy of reserved seats.
                  Detailed Problem: To understand this issue, we have observed that it not only concerns the safety of passengers but also creates a social environment.
                  This not only signals insecurity for passengers but also makes it difficult for railway staff to work and creates inequality in the social environment.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:adarshavinav123@gmail.com'>adarshavinav123@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Priyanshu Kumar</h3>
                  <p class="card__description">
                  We are working on Crafted Sustainable future for fashion or can say Slow fashion, which will be a fusion of innovative traditions and sustainability. 
                  The things we appreciate greatly are the environment, fashion and the Crafts. 
                  Sustainable fashion is not just a massive millennial trend but the future of the fashion industry. 
                  Preserving and promoting these crafts is essential to maintain cultural diversity and safeguard India's rich artistic legacy.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:priyanshu.khangar417@gmail.com'>priyanshu.khangar417@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Modified E-Rickshaw</h3>
                  <p class="card__description">
                  While working in E-rickshaw manufacturing for the last 6 years, I found that in every e-rickshaw company, 
                  the back wheel does not contain suspension which leads to the flipping of E-rickshaw on unequal roads or while applying brakes while in speed and to accidents. 
                  Also, it is not possible to go a long run on the current battery. I have developed an E-rickshaw containing a solution to all these problems.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:rabelectron@gmail.com'>rabelectron@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name"></h3>
                  <p class="card__description">
                  Will be working on survey , manufacturing, supply, installations, commissioning of Control panels , APFC panels, 
                  Motor Control Cubical, Equipped with an electronic device, through which the real time metering details of the industry or the installations will be easily available on the mobile phone based applications.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:kr.ashuu@gmail.com'>kr.ashuu@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Novio</h3>
                  <p class="card__description">
                  Our Startup is working on the Food-tech/Could Kitchen/Meal Delivery Ecosystem.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:noviotechnologies@gmail.com'>noviotechnologies@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                 <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">BHARDWAJ CONSTRUCTION</h3>
                  <p class="card__description">
                  When we want to perform any Puja, Yagya or Anushthan, we do not know what material is required for it. 
                  Because of this, while performing Puja, some material is left out and some is extra.
                  we cannot get all the product information at once and we keep facing problems.
                  Make a list of all the things and find out the priest. Through our app, they can do all the work with just one click. 
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:businesswithbhardwaj07@gmail.com'>businesswithbhardwaj07@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

          <SwiperSlide>
              <article class="productions_card">
                <div class="card__image">
                  <img src="" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Saviour</h3>
                  <p class="card__description">
                  Our startup SAVIOUR serves the problem area of sustainable energy , mobile device and EV charging by using renewable resources like solar energy . 
                  In terms of scalability we plan to install EV charging stations operated by solar energy.
                  </p>
                  <p className='card_contact_email'>Contact: <a href='mailto:jhav5225@gmail.com'>jhav5225@gmail.com</a></p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

        </Swiper>
       
        </div>

     
        {/* <!-- Navigation buttons --> */}
        {/* <div class="swiper-button-next">
        <i class="ri-arrow-right-s-line"></i>
      </div>

      <div class="swiper-button-prev">
        <i class="ri-arrow-left-s-line"></i>
      </div> */}

        {/* <!-- Pagination --> */}
       
        <div class="swiper-pagination"></div>
          <div className="events_btn">
          <button className='btn' onClick={() => navigate('/Pag')}>
            Litsen More</button>
        </div>

      </section>

    </div>



  );
};

export default Incubations