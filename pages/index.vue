<template>
  <div id="app" class="relative">
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
        <div class="main-title pt-8 sm:pt-0">
          <h1>Hello world, I 'm Theo <br> I design & build</h1>
          <h2>
            <vue-typer
                  :text='["websites","applications","user interfaces"]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='3000'
                  :erase-delay='250'
                  erase-style='select-all'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer>
          </h2>
        </div>
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h2 class="text-2xl leading-7 font-semibold">Welcome</h2>
          <p class="mt-3 text-gray-600">to my</p>
          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">website</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
  export default {
    name: "Index",
    components: { }
  };
</script>
