<template>
  <div>
    <form autocomplete="off">

      <label for="name"></label>
      <p>
        <i class="fa fa-user"></i>
        <input id="name" class="login_border" type="text" placeholder="用户名" autocomplete="off">
      </p>
      <p>
        <i class="fa fa-key fa-fw"></i>
        <input id="password" class="login_border password" type="password" placeholder="密码" autocomplete="new-password">
      </p>
      <label for="password"> </label>

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
  @import "../css/font-awesome/css/font-awesome.min.css";
</style>
