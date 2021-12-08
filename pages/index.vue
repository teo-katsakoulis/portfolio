<template>
  <div id="app" class="relative">
    <NavBar/>
    <vue-particles color="#fff"
                    :particleOpacity="0.5"
                    :particlesNumber="25"
                    shapeType="circle"
                    :particleSize="2"
                    linesColor="#dedede"
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
  
    <div class="main-container flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
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
          <div class="section-container">
            <h2>About</h2>
            <div class="row">
              <div class="col-md-6">
                <p>I’m a Front-End Developer located in Berlin. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
                <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                <!-- <canvas id="canvas"></canvas> -->
              </div>
              <div id="tag-cloud" class="col-md-6">
                <SogTagCloud :tags="tags" :options="options" />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" v-scroll-reveal.reset>
          <div class="section-container">
            <h2>Skills</h2>
            <p>Lorem ipsum</p>
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
          { name: "Javascript" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "SCSS" },
          { name: "npm" },
          { name: "gulp.js" },
          { name: "webpack" },
          { name: "Bootstrap" },
          { name: "Nuxt.js" },
          { name: "Laravel" },
        ],
        options: {
          width: 400,
          height: 400,
          radius: 200,
          opacity: 300,
          fontSize: 600
        },
      };
    }
  };
</script>
