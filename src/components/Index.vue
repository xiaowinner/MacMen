<template>
  <div>
    <headers></headers>
    <home></home>
    <kkpage></kkpage>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Headers from './Headers.vue'
  import Kkpage from './KkPage.vue'
  export default {


    components: {
      Home,
      Headers,
      Kkpage,
    }
  }
</script>


<style>

  html {
    height: 100%;
  }

</style>
