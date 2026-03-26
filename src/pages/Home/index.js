import React from "react";
import './NoticeSection.css';
import "./style.css";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../../api/axios"; 

const Home = () => {

  const [notices, setNotices] = useState([]); 

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await api.get("/notice/");
        setNotices(res.data.notices || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotices();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section className="home" id="home">

        <div className="grid-1">
          <div className="home-content" data-aos="fade-right">

            <h3>Welcome to,</h3>

            <h1>
              <span>I</span>ncubation <span>C</span>enter
            </h1>

            <div className="h3-2">
              <h3>of NIT Patna.</h3>
            </div>

            <div className="typewriter">
              <p>
                <Typewriter
                  options={{
                    strings: ["we Incubate.", "we Mentor. ", "we Support. "],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>

            <p>
              Empowering startups and entrepreneurs with mentorship, workspace,
              and funding to foster innovation and accelerate growth.
            </p>

            <a href="#idea" className="btn">
              Incubate u'r Idea
            </a>

          </div>
        </div>

        <div className="grid-2">
          <div className="notice" data-aos="fade-up" data-aos-duration="1500">

            <div className="notice-container">
              <div className="notice-title lkclr">Notices</div>

              <div className="notice-list">

                {notices.map((notice, i) => (
                  <div style={{marginLeft:"15px"}} key={notice._id || i} className="notice-item">

                    <b style={{fontSize:"18px"}}>{notice.content}</b>
                    <div style={{color:"#cccccc"}}>
                      {notice.createdAt ? new Date(notice.createdAt).toLocaleDateString() : ""}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;