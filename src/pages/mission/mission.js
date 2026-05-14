import React from 'react';
import "./style.css";

const Mission = () => {
  return (
    <div>
      <section className="goals" id="goals">
    <div className="container">
      <h1  data-animation="slideInUp" data-animation-delay=".3s"  style={{ color: "#0ef" }}>Our Mission</h1>
      <div className=" container_details ">
        <div className="card__container">
          <article className="card__article"  data-animation="zoomReverseIn" data-animation-delay=".3s">

            <div className="card_img">
              <div className="card__scale-1"></div>
              <div className="card__scale-2"></div>

              <div className="card__shape-1">
                <div className="card__shape-2"></div>
                <div className="card__shape-3">
                  <i className="ri-flashlight-line card__icon"></i>
                </div>
              </div>
            </div>
            <div className="card__data">
              <h2 className="card__title">Empower Startup's</h2>

              <p className="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>


              <a href="#" className="card__button">
                Continue learning
              </a>
            </div>
          </article>

          <article className="card__article card__orange"  data-animation="zoomReverseIn" data-animation-delay=".3s">
            <div className="card_img">
              <div className="card__scale-1"></div>
              <div className="card__scale-2"></div>

              <div className="card__shape-1">
                <div className="card__shape-2"></div>
                <div className="card__shape-3">
                  <i className="ri-fire-line card__icon"></i>
                </div>
              </div>
            </div>
            <div className="card__data">
              <h2 className="card__title">Mentorship</h2>

              <p className="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>

              <a href="#" className="card__button">
                Continue learning
              </a>
            </div>
          </article>

          <article className="card__article card__green"  data-animation="zoomReverseIn" data-animation-delay=".3s">
            <div className="card_img">
              <div className="card__scale-1"></div>
              <div className="card__scale-2"></div>

              <div className="card__shape-1">
                <div className="card__shape-2"></div>
                <div className="card__shape-3">
                  <i className="ri-shining-line card__icon"></i>
                </div>
              </div>
            </div>
            <div className="card__data">
              <h2 className="card__title">Build Community</h2>

              <p className="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>

              <a href="#" className="card__button">
                Continue learning
              </a>
            </div>
          </article>

        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Mission