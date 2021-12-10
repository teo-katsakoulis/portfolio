<template>
  <div id="app" class="relative">
    <NavBar/>
    <vue-particles color="#fff"
                    :particleOpacity="0.5"
                    :particlesNumber="25"
                    shapeType="circle"
                    :particleSize="2"
                    linesColor="#555"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.3"
                    :linesDistance="150"
                    :moveSpeed="2"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                    class="vue-particles"></vue-particles>
  
    <div class="main-container">
      <section id="home">
        <div class="main-title pt-8 sm:pt-0">
          <h1>Hello world, I'm Theo. <br> I design & build</h1>
          <h2>
            <vue-typer
                  :text='["websites","applications","user interfaces"]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='2500'
                  :erase-delay='250'
                  erase-style='select-all'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer>
          </h2>
        </div>
      </section>
      <section id="about" v-scroll-reveal.reset>
        <canvas id="myCanvas"></canvas>
        <div class="section-container">
          <h2>About</h2>
          <div class="row">
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
          <div class="row about-me">
            <div class="col-md-6 personal-text">
              <p>I’m a Front-End Developer located in Berlin. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
              <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
              <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            </div>
            <div id="tag-cloud" class="col-md-6" ref="tagcloud">
              <SogTagCloud :tags="tags" :options="options" />
            </div>
          </div>
        </div>
      </section>
      <section id="work" v-scroll-reveal.reset>
        <div class="section-container">     
          <h2>Work</h2>
          <p>Lorem ipsum</p>
        </div>
      </section>
      <section id="contact" v-scroll-reveal.reset>
        <div class="section-container">
          <h2>Contact</h2>
          <p>Lorem ipsum</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  export default {
    name: "Index",
    components: { NavBar },
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
          width: 545,
          height: 400,
          radius: 200,
          opacity: 300,
          fontSize: 600
        },
      };
    }
  };
</script>
