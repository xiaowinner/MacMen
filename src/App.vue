<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Login from './components/Login'
  export default {
    components: {
      Hello,
      Login
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
