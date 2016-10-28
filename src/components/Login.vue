<template>
  <div>
    <form>
      <label for="name">用户名: </label>
      <input id="name" class="login_border pure-form" type="text" placeholder="用户名">
    </form>
  </div>


</template>

<script>
  export default{
    data(){
      return {
        msg: '这是一个登录页面!'
      }
    }
  }

</script>

<style lang="sass" scoped>
  @import "../css/components/login.scss";
  @import "../css/pure-min.css";
</style>
