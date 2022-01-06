<template>
  <div class="section-container">
    <h2 class="section-title">About</h2>
    <div class="row skills-desktop">
      <div class="col-md-3 skill-container">
        <div class="hex-wrap">
          <div class="hexagon">
            <i class="material-icons">speed</i>
          </div>
        </div>
        <div class="waypoint">
          <h3 class="skill-title">Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
      </div>
      <div class="col-md-3 skill-container">
        <div class="hex-wrap">
          <div class="hexagon">
            <i class="material-icons">devices</i>
          </div>
        </div>
        <div class="waypoint">
          <h3 class="skill-title">Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>
      </div>
      <div class="col-md-3 skill-container">
        <div class="hex-wrap">
          <div class="hexagon">
            <i class="material-icons">lightbulb</i>
          </div>
        </div>
        <div class="waypoint">
          <h3 class="skill-title">Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
      </div>
      <div class="col-md-3 skill-container">
        <div class="hex-wrap">
          <div class="hexagon">
            <i class="material-icons">build</i>
          </div>
        </div>
        <div class="waypoint">
          <h3 class="skill-title">Dynamic</h3>
          <p>Websites don't have to be static, I love making pages come to life.</p>
        </div>
      </div>
    </div>
    <div class="skills-mobile">
      <b-carousel
        id="mobile_carousel_skills"
        v-model="slide"
        :interval="4000"
        indicators
        background="transparent"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption-blank img-blank>
          <div class="skill-container">
            <div class="hex-wrap">
              <div class="hexagon">
                <i class="material-icons">speed</i>
              </div>
            </div>
            <div class="waypoint">
              <h3 class="skill-title">Fast</h3>
              <p>Fast load times and lag free interaction, my highest priority.</p>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide caption-blank img-blank>
          <div class="skill-container">
            <div class="hex-wrap">
              <div class="hexagon">
                <i class="material-icons">devices</i>
              </div>
            </div>
            <div class="waypoint">
              <h3 class="skill-title">Responsive</h3>
              <p>My layouts will work on any device, big or small.</p>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide caption-blank img-blank>
          <div class="skill-container">
            <div class="hex-wrap">
              <div class="hexagon">
                <i class="material-icons">lightbulb</i>
              </div>
            </div>
            <div class="waypoint">
              <h3 class="skill-title">Intuitive</h3>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide caption-blank img-blank>
          <div class="skill-container">
            <div class="hex-wrap">
              <div class="hexagon">
                <i class="material-icons">build</i>
              </div>
            </div>
            <div class="waypoint">
              <h3 class="skill-title">Dynamic</h3>
              <p>Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="row about-me">
      <div class="col-md-6 personal-text">
        <h2>About me</h2>
        <p>I'm a Front-End Developer located in Berlin. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
        <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        <a href="documents/CV.pdf" target="_blank">Check out my CV!</a>
      </div>
      <div id="tag-cloud" ref="tagcloud" class="col-md-6">
        <SogTagCloud :tags="tags" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About",
    data() {
      return {
        tags: [
          { name: "Vue.js" },
          { name: "JQuery" },
          { name: "HTML5" },
          { name: "JS" },
          { name: "CSS" },
          { name: "SCSS" },
          { name: "PHP" },
          { name: "npm" },
          { name: "gulp.js" },
          { name: "Webpack" },
          { name: "Bootstrap" },
          { name: "Nuxt.js" },
          { name: "Laravel" },
          { name: "git" },
          { name: "AWS" },
          { name: "REST" },
          { name: "JSON" }
        ],
        options: {
          width: 360,
          height: 360,
          radius: 200,
          opacity: 300,
          fontSize: 600
        },
      };
    }
  };
</script>