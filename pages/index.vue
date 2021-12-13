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
        <div class="section-container">
          <h2 class="section-title">About</h2>
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
              <h2>Me, Myself and I</h2>
              <p>I’m a Front-End Developer located in Berlin. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
              <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
              <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            </div>
            <div id="tag-cloud" ref="tagcloud" class="col-md-6">
              <SogTagCloud :tags="tags" :options="options" />
            </div>
          </div>
        </div>
      </section>
      <section id="work" v-scroll-reveal.reset>
        <div class="section-container">     
          <h2 class="section-title">Work</h2>
          <p>Lorem ipsum</p>
        </div>
      </section>
      <section id="contact" v-scroll-reveal.reset>
        <div class="section-container">
          <h2 class="section-title">Contact</h2>
          <h5 v-if="email_sent" class="email-sent"><i class="material-icons">favorite</i> <span>Thank you for your message!</span></h5>
          <h5 v-if="email_failed" class="email-failed"><i class="material-icons">sentiment_dissatisfied</i> Message was not sent, please try again</h5>
          <form class="contact-form" @submit.prevent="submitForm">
            <span><input v-model="name" type="text" name="name" placeholder="Name" /></span>
            <span><input v-model="email" type="email" name="email" placeholder="Email" /></span>
            <span><textarea v-model="message" name="message" placeholder="Message"></textarea></span>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
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
          width: 470,
          height: 340,
          radius: 200,
          opacity: 300,
          fontSize: 600
        },
        name: '',
        email: '',
        message: '',
        endpoint: 'https://formspree.io/f/mnqwqvww',
        email_sent: false,
        email_failed: false
      };
    },
    mounted() {
      const elements = document.getElementsByClassName("sub-menu");

      const myFunction = function() {
         console.log("clicked")
         Array.from(document.querySelectorAll('.quick-menu.active')).forEach((el) => el.classList.remove('active'));

      };

      for (let i = 0; i < elements.length; i++) {
          elements[i].addEventListener('click', myFunction, false);
      }
    },
    methods: {
      async submitForm() {
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }
        const response = await axios.post(this.endpoint, data);
        if (response.status === 200) {
          this.email_sent = true;
        }
        else {
          this.email_failed = true;
        }
      }
    }
  };
</script>
