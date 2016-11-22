<template>
  <div>
    <home></home>
    <Kkpage></Kkpage>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Kkpage from './KkPage.vue'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Home,
      Kkpage

    }
  }
</script>
