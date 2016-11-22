<template>
  <div class="pure-menu pure-menu-horizontal">
    <!--a href="#" class="pure-menu-heading pure-menu-link">MacMen</a-->
    <router-link to="/" class="pure-menu-heading pure-menu-link" @click.native="homeStateTrue">MacMen</router-link>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="https://github.com/maweiyi/MacMen" class="pure-menu-link">Github</a></li>
      <li class="pure-menu-item">
        <!--router-link to="#" class="pure-menu-link">About Me</router-link-->
        <a class="pure-menu-link" href="http://maweiyi.xyz/#!/article?id=57e4cd9d953d0b001097faca" target="_blank">About Me</a>
      </li>
      <li class="pure-menu-item">
        <router-link @click.native="headerState" to="/login" class="pure-menu-link" >注销</router-link>
      </li>
    </ul>

  </div>
</template>
<style lang="sass" scoped>
  @import "../css/pure-min.css";
  @import "../css/components/header.scss";
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      headerState: function () {
        this.$store.commit('headerStateChangeFalse');
        this.$store.commit('homeStateChangeFalse');
        this.$store.commit('kkPageStateChangeFalse');
        console.log(this.$store.state.home_state);
      },
      homeState: function () {
        this.$store.commit('homeStateChangeFalse');
      },
      kkPageState: function () {
        this.$store.commit('kkPageStateChangeFalse');
      },
      homeStateTrue: function () {
        this.$store.commit('homeStateChangeTrue');
        this.$store.commit('kkPageStateChangeTrue');
      }
    }
  }
</script>
