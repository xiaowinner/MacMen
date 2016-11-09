<template>
  <div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">MacMen</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="https://github.com/maweiyi/MacMen" class="pure-menu-link">Github</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">About Me</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">注销</a></li>
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
