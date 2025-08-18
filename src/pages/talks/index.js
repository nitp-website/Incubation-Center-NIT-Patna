import {React ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

// function litsenMore(){
//   console.log("got cliceked");
//   return( 
//     <div Id="Talks_viewMore"> 
//       <div class="header">

// </div>
// <div class="heading">
//   Entrepreneurship Talk
// </div>
// <div class="main">
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div> 
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>
//   <div class="row">
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
//       <div class="card">
//           <div class="comma">"</div>
//           <div class="text">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et impedit quam vitae sint, quaerat repellendus libero voluptatum veniam dolorem architecto, quisquam est in consectetur culpa, praesentium obcaecati aperiam deleniti? Sequi ea quia eum harum unde aperiam a illum delectus.
//           </div>
//           <div class="line"></div>
//           <div class="id">
//               <div class="logo">

//               </div>
//               <div class="name">
//                   Harshit verma (2022-2024)<br/>
//                   Agora Analytics
//               </div>
//           </div>
//       </div>
  
      
//   </div>    
  
// </div>
// <div class="footer">

// </div>
//     </div>
//   );
// }

const Talks =  () => {
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <section className="talks" id="talks">
        <div>
          <div className="talks_content" data-aos="fade-right">
            <h1>Our Enterpreneur's Talk</h1>
            <p>
              The Incubation Center at NIT Patna hosts regular entrepreneur talks, featuring successful startup founders who share their journeys and strategies. These sessions inspire aspiring entrepreneurs, offering practical insights into business challenges and fostering a supportive network. Such events empower participants with the knowledge and motivation to pursue entrepreneurial ventures effectively.
            </p>
          </div>
        </div>

        <div className="talk_slider" data-aos="fade-left">
          <div className="talk_slider_track">
            <div className="talk_slide">
              <div className="talk_slide_content">
                <p>Antesh Anand, founder of Brand Medix, innovates healthcare brand management and marketing strategies, reshaping audience connections and fostering sector growth through pioneering solutions and meaningful engagement strategies.</p>
              </div>
              <div className="talk_slide_profile">
                <div className="talk_slide_profile_photo">
                  <img src="img/Enterpreneurs/aa.jpg" alt="Raja Harish chandra"/>
                </div>
                <div className="talk_slide_profile_content">
                  <h3>Antesh  Anand</h3>
                  <p>Founder, Brand Medix</p>
                </div>
              </div>
            </div>

            <div className="talk_slide">
              <div className="talk_slide_content">
                <p>Puja, founder of Artkala, has built a creative haven renowned for innovative art and craft tutorials. Her engaging content fosters a global community of DIY enthusiasts, making Artkala a premier resource for crafting inspiration and techniques.
                </p>
              </div>
              <div className="talk_slide_profile">
                <div className="talk_slide_profile_photo">
                  <img src="img/Enterpreneurs/puja.jpeg" alt="Raja Harish chandra"/>
                </div>
                <div className="talk_slide_profile_content">
                  <h3>Puja</h3>
                  <p>Founder, Artkala</p>
                </div>
              </div>
            </div>
            {showMore && (
              <>
                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Rahul Samrat, CEO of Coworking Studio, leads with innovation in flexible workspaces. His strategic direction emphasizes community, collaboration, and productivity enhancements, expanding Coworking Studio's influence in diverse professional settings.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/rahul.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Rahul Samrat</h3>
                      <p>CEO, CoWorking Studio</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Alok Kumar, founder of Native Clap, champions indigenous culture through a platform showcasing traditional craftsmanship and supporting local artisans. His vision promotes cultural preservation and economic empowerment within communities.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/alok.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Alok Kumar</h3>
                      <p>Founder, NativeClap</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Antesh Anand, founder of Brand Medix, innovates healthcare brand management and marketing strategies, reshaping audience connections and fostering sector growth through pioneering solutions and meaningful engagement strategies.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/aa.jpg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Antesh Anand</h3>
                      <p>Founder, Brand Medix</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Puja, founder of Artkala, has built a creative haven renowned for innovative art and craft tutorials. Her engaging content fosters a global community of DIY enthusiasts, making Artkala a premier resource for crafting inspiration and techniques.
                    </p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/puja.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Puja</h3>
                      <p>Founder, Artkala</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Rahul Samrat, CEO of Coworking Studio, leads with innovation in flexible workspaces. His strategic direction emphasizes community, collaboration, and productivity enhancements, expanding Coworking Studio's influence in diverse professional settings.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/rahul.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Rahul Samrat</h3>
                      <p>CEO, CoWorking Studio</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Alok Kumar, founder of Native Clap, champions indigenous culture through a platform showcasing traditional craftsmanship and supporting local artisans. His vision promotes cultural preservation and economic empowerment within communities.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/alok.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Alok Kumar</h3>
                      <p>Founder, NativeClap</p>
                    </div>
                  </div>
                </div>
                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Antesh Anand, founder of Brand Medix, innovates healthcare brand management and marketing strategies, reshaping audience connections and fostering sector growth through pioneering solutions and meaningful engagement strategies.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/aa.jpg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Antesh Anand</h3>
                      <p>Founder, Brand Medix</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Puja, founder of Artkala, has built a creative haven renowned for innovative art and craft tutorials. Her engaging content fosters a global community of DIY enthusiasts, making Artkala a premier resource for crafting inspiration and techniques.
                    </p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/puja.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Puja</h3>
                      <p>Founder, Artkala</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Rahul Samrat, CEO of Coworking Studio, leads with innovation in flexible workspaces. His strategic direction emphasizes community, collaboration, and productivity enhancements, expanding Coworking Studio's influence in diverse professional settings.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/rahul.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Rahul Samrat</h3>
                      <p>CEO, CoWorking Studio</p>
                    </div>
                  </div>
                </div>

                <div className="talk_slide">
                  <div className="talk_slide_content">
                    <p>Alok Kumar, founder of Native Clap, champions indigenous culture through a platform showcasing traditional craftsmanship and supporting local artisans. His vision promotes cultural preservation and economic empowerment within communities.</p>
                  </div>
                  <div className="talk_slide_profile">
                    <div className="talk_slide_profile_photo">
                      <img src="img/Enterpreneurs/alok.jpeg" alt="Raja Harish chandra"/>
                    </div>
                    <div className="talk_slide_profile_content">
                      <h3>Alok Kumar</h3>
                      <p>Founder, NativeClap</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!showMore && (
              <div className="talks_btn" data-aos="fade-up">
                <button className='btn' onClick={handleShowMore}>
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <div className="talks_btn" data-aos="fade-up">
              <button className='btn' onClick={()=>navigate('/talksmore')}> 
          Litsen More</button>
        </div> */}
      </section>
    </div>
  )
}

export default Talks;