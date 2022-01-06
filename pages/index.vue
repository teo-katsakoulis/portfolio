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
                    class="vue-particles">
    </vue-particles>
  
    <div class="main-container">
      <section id="home">
        <Home/>
      </section>
      <section id="about" v-scroll-reveal.reset>
        <About/>
      </section>
      <section id="work" v-scroll-reveal.reset>
        <Work/>
      </section>
      <section id="contact" v-scroll-reveal.reset>
        <Contact/>
      </section>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import Home from "@/components/Home";
  import About from "@/components/About";
  import Work from "@/components/Work";
  import Contact from "@/components/Contact";
  export default {
    name: "Index",
    components: { NavBar, Home, About, Work, Contact }
  };
</script>
