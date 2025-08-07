import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import './NoticeSection.css'; // Update this path if needed
import "./style.css";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import { Button } from 'primereact/button';

const Home = () => {
  // const text = useTypewriter({
  //   words: ["Mentorship", "Incubate", "Support"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 50,
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const storedData = localStorage.getItem("data");

    // Parse the JSON string to convert it back into an array
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  AOS.init({
    duration: 1000,
  });

  // hljs.initHighlightingOnLoad();

  //   $('.hero__scroll').on('click', function(e) {
  //     $('html, body').animate({
  //       scrollTop: $(window).height()
  //     }, 1200);
  //   });

  // });

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/notices.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseTextToJSON(text);
        setNotices(parsed);
      });
  }, []);

  const parseTextToJSON = (text) => {
    const blocks = text.trim().split(/\n\s*\n/);
    return blocks.map((block) => {
      const lines = block.split("\n");
      const obj = {};
      lines.forEach((line) => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length) {
          obj[key.trim().toLowerCase()] = rest.join(":").trim();
        }
      });
      return obj;
    });
  };

  return (
    <div>
      <section class="home" id="home">
        <div className="grid-1">
          <div class="home-content" data-aos="fade-right">
            {/* <Button label="Submit" /> */}

            <h3>Welcome to,</h3>
            <h1>
              {" "}
              <span>I</span>ncubation <span>C</span>enter
            </h1>
            <div className="h3-2">
              <h3>of NIT Patna.</h3>
            </div>
            <div className="typewriter">
              <p>
                {" "}
                <Typewriter
                  options={{
                    strings: ["we Incubate.", "we Mentor. ", "we Support. "],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>

            {/* <h3>we <span class="multiple-text">{text} <Cursor cursorStyle = "|" /></span></h3> */}
            <p>
              Empowering startups and entrepreneurs with mentorship, workspace,
              and funding to foster innovation and accelerate growth. Join us to
              turn your ideas into successful ventures.
            </p>
            {/* <!-- <div class="social-media">
              <a href=""><i class='bx bxl-facebook'></i></a>
              <a href=""><i class='bx bxl-instagram-alt'></i></a>
              <a href=""><i class='bx bxl-linkedin'></i></a>
              <a href=""><i class='bx bxs-message-rounded-dots'></i></a>
          </div> --> */}
            <a href="#idea" class="btn">
              Incubate u'r Idea
            </a>
          </div>
        </div>

        <div className="grid-2">
          <div class="notice" data-aos="fade-up" data-aos-duration="1500">
            <div className="notice-container">
              <div className="notice-title lkclr">Notices</div>
              <div className="notice-list">
                {notices.map((notice, i) => (
                  <div key={i} className="notice-item">
                    <a
                      href={notice.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {notice.title}
                    </a>
                    <em>{notice.date}</em>
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
