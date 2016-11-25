<template>
  <div>
    <form autocomplete="off" action="/">

      <label for="name"></label>
      <p>
        <i class="fa fa-user"></i>
        <input id="name" class="login_border" type="text" placeholder="用户名" autocomplete="off">
      </p>
      <label for="password"> </label>
      <p>
        <i class="fa fa-key fa-fw"></i>
        <input id="password" class="login_border password" type="password" placeholder="密码" autocomplete="new-password">
      </p>
      <p>
        <button>登录</button>
      </p>


    </form>
  </div>


</template>

<script>
  export default{
    data(){
      return {
        msg: '这是一个登录页面!'
      }
    },

    created: function () {
        //window.location.reload();
    },
    mounted: function () {
      //this.$router.push({path: '/headers'})
    }
  }

</script>

<style lang="sass" scoped>
  @import "../css/components/login.scss";
  @import "../css/pure-min.css";
  @import "../css/font-awesome/css/font-awesome.min.css";
</style>
