<template>
  <div id="app">
    <headers v-if="header"></headers>
    <home v-if="home"></home>
    <kkpage v-if="kkpage"></kkpage>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Login from './components/Login'
  import Headers from './components/Headers.vue'
  import Contents from './components/Content.vue'
  import Kkpage from './components/KkPage.vue'
  import Footers from './components/Footer.vue'
  export default {
    components: {
      Home,
      Login,
      Headers,
      Contents,
      Kkpage,
      Footers
    },
    computed: {
      header() {
        return this.$store.state.header_state;
      },
      home() {
        return this.$store.state.home_state;
      },
      kkpage() {
        return this.$store.state.kkpage_state;
      }
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
