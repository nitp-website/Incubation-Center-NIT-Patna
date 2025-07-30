import { React, useState } from "react";
import Card from "../card/card";
import Navbar from "../Navbar";
import "./team.css";
import Footer from "../footer";

export default function Student() {

    //student-coordinators
    const studentCoordinator = [

   { name: "Himanshu Bharti", about: "Leading from the front with clarity and confidence—turning vision into action, aligning every step with purpose, and ensuring that even the smallest detail reflects dedication, passion, and a deep sense of responsibility. It's not just about direction, but about inspiring momentum and making ideas come alive with intent and impact.", post:"Student Co-ordinator", linkedin:"https://www.linkedin.com/in/himanshu148/" , image:"/img/team_v2/ic_student/himanshu_bharti.jpg"},
    ]
    //student-co-coordinators
    const studentCocoordinator = [
   { name: "Sameer Gupta", about: "Balancing leadership and teamwork with ease — orchestrating every move behind the scenes to keep the show running smoothly and the spirit alive.", post:"Student Co-ordinator", linkedin:"https://www.linkedin.com/in/sameer-gupta-18a366259/" , image:"/img/team_v2/ic_student/sameer_gupta.jpg"},
    { name: "Arpita Dwivedi", about: "Blending grace with grit, handling every challenge with a smile — ensuring every plan unfolds perfectly, no matter what comes her way.", post:"Student Co-ordinator", linkedin:"https://www.linkedin.com/in/arpita-dwivedi-6bb002271/" , image:"/img/team_v2/ic_student/arpita_dwivedi.jpg"},

    ]
    //secretary
    const secretary = [
    { name: "Ashish Yadav", about: "Officially Secretary of NITP Incubation Centre now! Still a UI/UX nerd at heart Coding by day. Loves: Dogs  (my real bosses), Sleep  (my longest relationship), Nature (OG designer), Workout (pain with benefits). Dislikes: Patna Weather  (Schrödinger’s season).", post:"Secretary", linkedin:"https://www.linkedin.com/in/ashish-yadav-82bb04251/" , image:"/img/team_v2/ic_student/ashish_yadav.jpg"},
    ]
    //committee coordinators
    const committeeCoordinator = [

    { name: "Sumit Vishwakarma", about: "Blending creativity with strategy, shaping narratives that inform, inspire, and elevate every message with clarity and thoughtful expression.", post:"Design Team Committee Co-ordinator", linkedin:"https://www.linkedin.com/in/sumit-kumar-vishwakarma-42b292257/" , image:"/img/team_v2/ic_student/sumit_vishwakarma.jpg"},
    { name: "Manikanta", about: "Building seamless digital experiences with precision and passion, ensuring every click leads to clarity, connection, and innovation behind the screen.", post:"Web Team Committee Co-ordinator", linkedin:"https://www.linkedin.com/in/mani-kanta-perneedi-607906253/" , image:"/img/team_v2/ic_student/manikanta.jpg"},
   { name: "Manya Chandra", about: "Weaving words into impact — curating content that speaks volumes, connects deeply, and brings every idea to life with purpose and clarity.", post:"Content Team Committee Co-Coordinator", linkedin:"https://www.linkedin.com/in/manyachandra8/" , image:"/img/team_v2/ic_student/manya_chandra.jpg"},
   { name: "Aarsi Kumari", about: "Every frame captures emotion, and every post amplifies a message. As Media Team Coordinator, I shape narratives through visuals, lead with intent, and ensure our media speaks louder than words. It’s about more than creating—it’s about connecting and making an impact..", post:"Media Team Committee Co-ordinator", linkedin:"https://www.linkedin.com/in/aarsi-kumari-21b875271/" , image:"/img/team_v2/ic_student/aarsi_kumari.jpg"},
    { name: "Anusha Tank", about: "Calm yet vibrant, Anusha brings balance and quiet confidence to every task. She tackles challenges with logic, patience, and poise—uplifting her team with focus, reliability, and positive energy. anusha doesn’t just coordinate, she elevates", post:"Technical Team Committee Co-ordinator", linkedin:"https://www.linkedin.com/in/anusha-tank-97180a258/" , image:"/img/team_v2/ic_student/anusha_tank.jpg"},
        { name: "Vaibhav Shankwar", about: "Amplifying voices and shaping perception — managing communication with clarity, creativity, and intent to build lasting connections and a strong public presence.", post:"PR Team Committee Co-ordinator", linkedin:"#" , image:"/img/team_v2/ic_student/vaibhav_shankwar.jpg"},
    ]
    //leads
    const lead = [
  { name: "Shreyansh Singh", about: "Leading with passion and precision, transforming ideas into unforgettable events that run flawlessly and leave a lasting impact on everyone involved.", post:"Event Team Lead", linkedin:"https://www.linkedin.com/in/shreyansh-kumar-singh-65864b27a/" , image:"/img/team_v2/ic_student/shreyansh_singh.jpg"},

    ]
    //co-leads
    const coLead = [
     { name: "Sonu Kumar", about: "Leading with vision, dedication, and unwavering focus — steering the team through every challenge to achieve excellence with unity and purpose.", post:"Core Team Lead", linkedin:"https://www.linkedin.com/in/sonu-kumar-4522ab321/" , image:"/img/team_v2/ic_student/sonu_kumar.jpg"},
 { name: "Sakshi Kumari", about: "With calm precision and boundless dedication, turning chaos into celebration and crafting experiences that linger long after the applause fades.", post:"Event Team Co-Lead", linkedin:"#" , image:"/img/team_v2/ic_student/sakshi_kumari.jpg"},

     { name: "Abhishek Keshri", about: "Merging logic with creativity, building digital foundations that are as reliable as they are innovative — turning code into seamless user experiences.", post:"Web Team Co-Lead", linkedin:"https://www.linkedin.com/in/abhishek-keshri-27a9b728a/" , image:"/img/team_v2/ic_student/abhishek_keshri.jpg"},
     { name: "Udipta Katyayana", about: "Bringing energy and vision to every event, turning ideas into unforgettable moments that echo beyond the final spotlight.", post:"Event Team Co-Lead", linkedin:"https://www.linkedin.com/in/udipta-katyayan-8a327b34b/" , image:"/img/team_v2/ic_student/udipta_katyayana.jpg"},

    { name: "Prakhar Srivastava", about: "Creativity meets leadership — shaping ideas into stunning visuals that inspire and elevate every project to a new level of excellence.", post:"Design Team Co-Lead", linkedin:"#" , image:"/img/team_v2/ic_student/prakhar_srivastava.jpg"},
    { name: "Anand Kumar", about: "Capturing moments with passion and precision, transforming stories into powerful visuals that connect, inspire, and amplify every event’s impact.", post:"Media Team Co-Lead", linkedin:"https://www.linkedin.com/in/anand-raj-0719362a8/" , image:"/img/team_v2/ic_student/anand_kumar.jpg"},
    { name: "Aniket Kumar", about: "Turning visions into seamless events with dedication and sharp coordination, creating memorable experiences that leave a lasting impression on everyone involved.", post:"Technical Team Co-Lead", linkedin:"https://www.linkedin.com/in/aniket-nitpatna/" , image:"/img/team_v2/ic_student/aniket_kumar.jpg"},
    { name: "Ashish Kumar", about: "Steadfast and visionary, leading with purpose and resilience — driving the team forward through challenges toward shared goals and lasting achievements.", post:"Core Team Co-Lead", linkedin:"#" , image:"/img/team_v2/ic_student/ashish_kumar.jpg"},

    { name: "Sneha Kumari", about: "Connecting voices and stories with clarity and charm, building bridges that amplify every message and strengthen the team’s presence far and wide.", post:"PR Team Co-Lead", linkedin:"#" , image:"/img/team_v2/ic_student/sneha_kumari.jpg"},
    { name: "Ayushi Singh", about: "Every word has weight—some inform, others ignite. As Content Team Co-Lead, I blend emotion with strategy to craft content that resonates deeply and drives meaning. It’s not just about writing—it’s about shaping how people feel, think, and act..", post:"Content Team Co-Lead", linkedin:"#" , image:"/img/team_v2/ic_student/ayushi_singh.jpg"},
    ]
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
          <h1>Student Coordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {studentCoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
        <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Student Co-coordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {studentCocoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Secretary IC</h1>
        </div>
      </div>
      <div className="main">
        {secretary.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Committee Co-ordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {committeeCoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Leads IC</h1>
        </div>
      </div>
      <div className="main">
        {lead.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Co-Leads IC</h1>
        </div>
      </div>
      <div className="main">
        {coLead.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
