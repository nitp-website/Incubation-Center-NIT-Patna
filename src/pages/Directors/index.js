import React from 'react';
import "./style.css";

const Director = () => {
	return (
		<section class="dark" id='darki'>
			<div class="container py-4">
				<h1 class="h1 text-center" id="pageHeaderTitle" style={{ color: "#0ef" }}>Director Desk</h1>

				<article class="postcard dark blue">
					<a class="postcard__img_link" href="#">
						<img class="postcard__img" src="img/team/director.jpg" alt="Image Title" />
					</a>
					<div class="postcard__text">
						<h1 class="postcard__title blue"><a href="#"  style={{ color: "#0ef" }}>Director, NIT Patna</a></h1>
						{/* <div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div> */}
						<div class="postcard__bar"></div>
						<div class="postcard__preview-txt">Prof. Pradip K. Jain, Director of NIT Patna, renowned for high-power microwave research, with extensive contributions, publications, and international collaborations in his career.He has made significant contribution in the areas of analysis, modeling and development of high power microwave tubes and gyrotron devices.He has so far guided 20 doctoral theses, published more than 100 research papers in SCI journals and 200 in the conference proceedings beside a patent and authoring six book/monograph chapters. Dr. Jain is a senior member of IEEE, fellow of Institution of Electronics and Telecommunications Engineers of India, Fellow of Institution of Engineers of India and also a fellow of Vacuum Electron Devices and Application Society.</div>
						<ul class="postcard__tagbox">
							{/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li class="tag__item play blue">
								<a href="https://www.nitp.ac.in/director/"><i class="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>
				<article class="postcard dark red">
					<a class="postcard__img_link" href="#">
						<img class="postcard__img" src="img/team/bharatgupta.jpg" alt="Image Title" />
					</a>
					<div class="postcard__text">
						<h1 class="postcard__title red"><a href="#">Prof IN-CHARGE
            INCUBATION CENTER</a></h1>
						<div class="postcard__subtitle small">
							<time datetime="2020-05-25 12:00:00">
								<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
							</time>
						</div>
						<div class="postcard__bar"></div>
						<div class="postcard__preview-txt">Dr. Bharat Gupta leads the Electronics and Communication Department, spearheading research and educational initiatives in cutting-edge technologies and applications.</div>
						<ul class="postcard__tagbox">
							{/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
							<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li class="tag__item play red">
								<a href="https://www.linkedin.com/in/sgbharat/?originalSubdomain=in"><i class="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>

			</div>
		</section>

	)
}

export default Director;

