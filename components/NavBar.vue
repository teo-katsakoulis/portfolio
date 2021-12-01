<template>
  <header class="header">
    <div id="app">
        <vue-particles color="#000"></vue-particles>
    </div>
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav class="nav">
      <div class="nav__link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/About">About</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
    import Logo from "@/components/NuxtLogo";
    export default {
        name: "NavBar",
        components: { Logo }
    };
</script>