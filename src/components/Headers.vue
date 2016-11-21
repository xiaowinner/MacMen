<template>
  <div class="pure-menu pure-menu-horizontal">
    <!--a href="#" class="pure-menu-heading pure-menu-link">MacMen</a-->
    <router-link to="#" class="pure-menu-heading pure-menu-link">MacMen</router-link>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="https://github.com/maweiyi/MacMen" class="pure-menu-link">Github</a></li>
      <li class="pure-menu-item"><router-link to="#" class="pure-menu-link">About Me</router-link></li>
      <li class="pure-menu-item"><router-link to="/login" class="pure-menu-link">注销</router-link></li>
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
            return{
                msg:'hello vue'
            }
        }
    }
</script>
