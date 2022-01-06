<template>
  <div class="main-title">
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
            caret-animation='blink'>
      </vue-typer>
    </h2>
  </div>
</template>

<script>
  export default {
    name: "Home"
  };
</script>