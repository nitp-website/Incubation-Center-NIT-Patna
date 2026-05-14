import React from 'react';
import "./style.css";

const Director = () => {
	return (
		<section className="dark" id='darki'>
			<div className="container py-4">
				<h1 className="h1 text-center" id="pageHeaderTitle" style={{ color: "#0ef" }}>Director Desk</h1>

				<article className="postcard dark blue">
					<a className="postcard__img_link" href="#">
						<img className="postcard__img" src="img/team/director.jpg" alt="Image Title" />
					</a>
					<div className="postcard__text">
						<h1 className="postcard__title blue"><a href="#"  style={{ color: "#0ef" }}>Director, NIT Patna</a></h1>
						{/* <div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div> */}
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">Prof. Pradip K. Jain, Director of NIT Patna, renowned for high-power microwave research, with extensive contributions, publications, and international collaborations in his career.He has made significant contribution in the areas of analysis, modeling and development of high power microwave tubes and gyrotron devices.He has so far guided 20 doctoral theses, published more than 100 research papers in SCI journals and 200 in the conference proceedings beside a patent and authoring six book/monograph chapters. Dr. Jain is a senior member of IEEE, fellow of Institution of Electronics and Telecommunications Engineers of India, Fellow of Institution of Engineers of India and also a fellow of Vacuum Electron Devices and Application Society.</div>
						<ul className="postcard__tagbox">
							{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li className="tag__item play blue">
								<a href="https://www.nitp.ac.in/Institute/Director"><i className="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>
				<article className="postcard dark red">
					<a className="postcard__img_link" href="#">
						<img className="postcard__img" src="img/team/bharatgupta.jpg" alt="Image Title" />
					</a>
					<div className="postcard__text">
						<h1 className="postcard__title red"><a href="#">Professor in Charge
            INCUBATION CENTER</a></h1>
						<div className="postcard__subtitle small">
							<time dateTime="2020-05-25 12:00:00">
								<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
							</time>
						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">Dr. Bharat Gupta leads the Electronics and Communication Department, spearheading research and educational initiatives in cutting-edge technologies and applications.</div>
						<ul className="postcard__tagbox">
							{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
							<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li className="tag__item play red">
								<a href="https://www.linkedin.com/in/sgbharat/?originalSubdomain=in"><i className="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>

			</div>
		</section>

	)
}

export default Director;

