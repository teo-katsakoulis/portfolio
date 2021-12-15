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
          <div class="social-mobile">
            <a href="https://www.linkedin.com/in/theofilos-katsakoulis" target="_blank" class="mobile-social-icons">
              <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="linkedin-icon">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a href="https://www.xing.com/profile/Theofilos_Katsakoulis" target="_blank" class="mobile-social-icons">
              <svg aria-hidden="true" data-prefix="fab" data-icon="xing" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-xing fa-w-12">
                <path fill="currentColor" d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"></path>
              </svg>  
            </a>
            <a href="CV.pdf" target="_blank" class="mobile-social-icons">
              <i class="material-icons">picture_as_pdf</i>
            </a>
          </div>
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
      /* Close mobile menu when you click on any of it's elements */
      const elements = document.getElementsByClassName("sub-menu");
      const myFunction = function() {
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
