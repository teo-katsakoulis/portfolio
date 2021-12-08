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
        <section id="about">
          <div class="container">
            <div class="text-container">
              <h2 class="blue">About</h2>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </section>
        <section id="skills">
          <div class="container">
            <div class="text-container">
              <h2 class="blue">Skills</h2>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </section>
        <section id="work">
          <div class="container">
            <div class="text-container">
              <h2 class="blue">Work</h2>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="container">
            <div class="text-container">
              <h2 class="blue">Contact</h2>
              <p>Lorem ipsum</p>
            </div>
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
    mounted() {
    }
  };
</script>
