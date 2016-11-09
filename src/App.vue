<template>
  <div id="app">
    <!--home></home-->
    <!--headers></headers-->
    <!--home></home-->
    <home></home>
    <kkpage></kkpage>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Login from './components/Login'
  import Headers from './components/Headers.vue'
  import Contents from './components/Content.vue'
  import Kkpage from './components/KkPage.vue'
  export default {
    components: {
      Home,
      Login,
      Headers,
      Contents,
      Kkpage
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
