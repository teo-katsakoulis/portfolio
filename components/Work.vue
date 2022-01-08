<template>
  <div class="section-container">
    <h2 class="section-title">Work</h2>
    <h4>Some of the websites I've developed:</h4>
    <div class="work-desktop">
      <div class="row work-container">
        <div class="col-md-4">
          <a href="https://www.aohostels.com/en/" target="_blank" class="video-container container-aohostels" style="background-image: url('screenshots/aohostels_gray.jpg');">
            <video id="video_aohostels" class="work-videos" width="100%" preload="none" muted loop>
              <source src="videos/aohostels.mp4" type='video/mp4' />
            </video>
            <div class="video-overlay">
              <span>a&o Hotels and Hostels</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://www.rodentgreen.com/" target="_blank" class="video-container container-rodentgreen" style="background-image: url('screenshots/rodentgreen_gray.jpg');">
            <video id="video_rodentgreen" class="work-videos" width="100%" preload="none" muted loop>
              <source src="videos/rodentgreen.mp4" type='video/mp4' />
            </video>
            <div class="video-overlay">
              <span>Rodent Green Management</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://floodbased.org/" target="_blank" class="video-container container-floodbased" style="background-image: url('screenshots/floodbased_gray.jpg');">
              <video id="video_floodbased" class="work-videos" width="100%" preload="none" muted loop>
              <source src="videos/floodbased.mp4" type='video/mp4' />
              </video>
              <div class="video-overlay">
              <span>Flood-Based Livelihoods Network</span>
              </div>
          </a>
          </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a href="https://wintergarten-berlin.de/" target="_blank" class="video-container container-wintergarten" style="background-image: url('screenshots/wintergarten_gray.jpg');">
            <video id="video_wintergarten" class="work-videos" width="100%" preload="none" muted loop>
              <source src="videos/wintergarten.mp4" type='video/mp4' />
            </video>
            <div class="video-overlay">
              <span>Wintergarten Berlin</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://www.uoc.gr/intrel/en/" target="_blank" class="video-container container-intrel" style="background-image: url('screenshots/intrel_gray.jpg');">
            <video id="video_intrel" class="work-videos" width="100%" preload="none" muted loop>
              <source src="videos/intrel.mp4" type='video/mp4' />
            </video>
            <div class="video-overlay">
              <span>Intrel UOC</span>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <div class="video-container container-paperplain" style="background-image: url('screenshots/paperplain_gray.jpg');">
            <div class="video-overlay">
              <span>Paperplain GmbH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="work-mobile">
      <b-carousel
        id="mobile_carousel_work"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="transparent"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="a&o Hotels and Hostels" img-blank img-alt="a&o Hotels and Hostels">
          <a href="https://www.aohostels.com/en/" target="_blank">
            <img src="screenshots/aohostels_colored.jpg" class="work-img-mobile" alt="aohostels.com">
          </a>
        </b-carousel-slide>
        <b-carousel-slide caption="Rodent Green Management" img-blank img-alt="Rodent Green Management">
          <a href="https://www.rodentgreen.com/" target="_blank">
            <img src="screenshots/rodentgreen_colored.jpg" class="work-img-mobile" alt="rodentgreen.com">
          </a>
        </b-carousel-slide>
        <b-carousel-slide caption="Flood-Based Livelihoods Network" img-blank img-alt="Flood-Based Livelihoods Network">
          <a href="https://floodbased.org/" target="_blank">
            <img src="screenshots/floodbased_colored.jpg" class="work-img-mobile" alt="floodbased.org">
          </a>
        </b-carousel-slide>
        <b-carousel-slide caption="Wintergarten Berlin" img-blank img-alt="Wintergarten Berlin">
          <a href="https://wintergarten-berlin.de/" target="_blank">
            <img src="screenshots/wintergarten_colored.jpg" class="work-img-mobile" alt="wintergarten-berlin.de">
          </a>
        </b-carousel-slide>
        <b-carousel-slide caption="Intrel UOC" img-blank img-alt="Intrel UOC">
          <a href="https://www.uoc.gr/intrel/en/" target="_blank">
            <img src="screenshots/intrel_colored.jpg" class="work-img-mobile" alt="uoc.gr/intrel">
          </a>
        </b-carousel-slide>
        <b-carousel-slide caption="Paperplain GmbH" img-blank img-alt="Paperplain GmbH">
          <img src="screenshots/paperplain_gray.jpg" class="work-img-mobile" alt="paperplain gmbh">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Work",
    mounted() {
      /* Play video on hover */
      document.getElementById("video_aohostels").addEventListener("mouseover", function() {
        this.muted = true;
        this.play();
      });
      document.getElementById("video_aohostels").addEventListener("mouseleave", function() {
        this.muted = true;
        this.pause();
      });

      document.getElementById("video_rodentgreen").addEventListener("mouseover", function() {
        this.muted = true;
        this.play();
      });
      document.getElementById("video_rodentgreen").addEventListener("mouseleave", function() {
        this.muted = true;
        this.pause();
      });

      document.getElementById("video_floodbased").addEventListener("mouseover", function() {
        this.muted = true;
        this.play();
      });
      document.getElementById("video_floodbased").addEventListener("mouseleave", function() {
        this.muted = true;
        this.pause();
      });

      document.getElementById("video_wintergarten").addEventListener("mouseover", function() {
        this.muted = true;
        this.play();
      });
      document.getElementById("video_wintergarten").addEventListener("mouseleave", function() {
        this.muted = true;
        this.pause();
      });

      document.getElementById("video_intrel").addEventListener("mouseover", function() {
        this.muted = true;
        this.play();
      });
      document.getElementById("video_intrel").addEventListener("mouseleave", function() {
        this.muted = true;
        this.pause();
      });
    }
  };
</script>