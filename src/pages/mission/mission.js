import React from 'react';
import "./style.css";

const Mission = () => {
  return (
    <div>
      <section class="goals" id="goals">
    <div class="container">
      <h1  data-animation="slideInUp" data-animation-delay=".3s"  style={{ color: "#0ef" }}>Our Mission</h1>
      <div class=" container_details ">
        <div class="card__container">
          <article class="card__article"  data-animation="zoomReverseIn" data-animation-delay=".3s">

            <div class="card_img">
              <div class="card__scale-1"></div>
              <div class="card__scale-2"></div>

              <div class="card__shape-1">
                <div class="card__shape-2"></div>
                <div class="card__shape-3">
                  <i class="ri-flashlight-line card__icon"></i>
                </div>
              </div>
            </div>
            <div class="card__data">
              <h2 class="card__title">Empower Startup's</h2>

              <p class="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>


              <a href="#" class="card__button">
                Continue learning
              </a>
            </div>
          </article>

          <article class="card__article card__orange"  data-animation="zoomReverseIn" data-animation-delay=".3s">
            <div class="card_img">
              <div class="card__scale-1"></div>
              <div class="card__scale-2"></div>

              <div class="card__shape-1">
                <div class="card__shape-2"></div>
                <div class="card__shape-3">
                  <i class="ri-fire-line card__icon"></i>
                </div>
              </div>
            </div>
            <div class="card__data">
              <h2 class="card__title">Mentorship</h2>

              <p class="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>

              <a href="#" class="card__button">
                Continue learning
              </a>
            </div>
          </article>

          <article class="card__article card__green"  data-animation="zoomReverseIn" data-animation-delay=".3s">
            <div class="card_img">
              <div class="card__scale-1"></div>
              <div class="card__scale-2"></div>

              <div class="card__shape-1">
                <div class="card__shape-2"></div>
                <div class="card__shape-3">
                  <i class="ri-shining-line card__icon"></i>
                </div>
              </div>
            </div>
            <div class="card__data">
              <h2 class="card__title">Build Community</h2>

              <p class="card__description">
                Gradient card, with bright edges
                that gives it a cool look.
              </p>

              <a href="#" class="card__button">
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