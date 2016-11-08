<template>
  <div id="app">
    <!--home></home-->
    <headers></headers>
    <!--home></home-->
    <contents></contents>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Login from './components/Login'
  import Headers from './components/Headers.vue'
  import Contents from './components/Content.vue'
  export default {
    components: {
      Home,
      Login,
      Headers,
      Contents
    }
  }
</script>

<style>
  @import "./css/pure-min.css";
  @import "./css/font-awesome/css/font-awesome.min.css";
  html {
    height: 100%;
  }

</style>
