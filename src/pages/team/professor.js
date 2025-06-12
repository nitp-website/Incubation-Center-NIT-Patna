import { React, useState } from "react";
import Card from "../card/card";
import Navbar from "../Navbar";
import "./team.css";
import Footer from "../footer";

export default function Professor() {
  const professors = [
    // { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
    { name: "Prof. Bharat Gupta", image:"/img/team_v2/ic_professor/prof_bharat_gupta.jpg", email:"bharat@nitp.ac.in"},
    { name: "Dr. Devarani Devi Ningombam", image:"/img/team_v2/ic_professor/dr_devrani.jpg", email:"devrani.cs@nitp.ac.in"},
    { name: "Dr. Om Ji Shukla", image:"/img/team_v2/ic_professor/dr_omji_shukla.jpg", email:"omjishukla.me@nitp.ac.in"},
    { name: "Prof. Arunangshu Ghosh", image:"/img/team_v2/ic_professor/prof_ghosh.jpg", email:"arunangshu.ghosh@nitp.ac.in"},
    { name: "Dr. Rakesh Ranjan", image:"/img/team_v2/ic_professor/dr_rakesh_ranjan.jpg", email:"rr@nitp.ac.in"},
    { name: "Dr. Bhabani Shankar Das", image:"/img/team_v2/ic_professor/dr_bhabani.jpg", email:"bsd.ce@nitp.ac.in"},
    { name: "Dr. Meena Panchore", image:"/img/team_v2/ic_professor/meena_mam.jpg", email:"meenap.ec@nitp.ac.in"}, 
    { name: "Dr. Richa Aggarwal", image:"/img/team_v2/ic_professor/richa_mam.jpg", email:"richa.ec@nitp.ac.in"}, 

  ];

  

  return (
    <div className="team">
      <Navbar />
      <div className="container_header1">
        <div>
          <h1>Team</h1>
        </div>
      </div>

      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Professors IC</h1>
        </div>
      </div>

      <div className="main">
        {professors.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin} email={info.email} isProfessor={true}/>
        ))}
        

      </div>
      

      <Footer />
    </div>
  );
}
