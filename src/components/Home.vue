<template>
  <div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-1-4" style="width: 25%; background-color: white">
      <div class="pure-menu custom-restricted-width" style="margin-top: 29%; margin-left: 30%">
        <span class="pure-menu-heading">Yahoo Sites</span>

        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Flickr</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Messenger</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
          <li class="pure-menu-heading">More Sites</li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Games</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">News</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">OMG!</a></li>
        </ul>
      </div>


    </div>

    <div class="content pure-u-1 pure-u-3-4" style="width: 75%">
      <div v-for="n in 10">
        <!-- A wrapper for all the blog posts -->
        <div class="posts">
          <!--h1 class="content-subhead">Pinned Post</h1-->

          <!-- A single blog post -->
          <section class="post">
            <header class="post-header">
              <img class="post-avatar" alt="Tilo Mitra&#x27;s avatar" height="48" width="48"
                   src="../img/1.jpg">

              <!--a class="post-title" target="_blank" href="#">Introducing Pure</a-->
              <router-link class="post-title" target="_blank" to="/content" @click.native="contentState">Introducing Pure</router-link>
              <div class="content-subhead"></div>
              <p class="post-meta">
                By <a href="#" class="post-author">Tilo Mitra</a> under <a class="post-category post-category-design"
                                                                           href="#">CSS</a> <a
                class="post-category post-category-pure" href="#">Pure</a>
              </p>
            </header>

            <div class="post-description">
              <p id="show">
                Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a
                href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks
                pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have
                released Pure as a set of small, responsive, CSS modules that you can use in every web project.
                XXXJKAKDJFLAKDJFHAKSFHJEAIURHFASBFAHSDKJFLASBFKLASHDIWQEUFIUASBFLKSAJHFDKLASHJFJKDBFLKSJHFLHSFHS
                JHKFEROIUQGEFBIFLHJAOERUYQWEUFBADONFAEHRUQEBFEOTHQFBDOFWIHEFABHEFBVJEFEQHFQHUUHF
              </p>

            </div>
          </section>
        </div>
      </div>
      <div class="content-subhead"></div>
    </div>

  </div>


</template>

<script>

  export default {
    data() {
      return {}
    },
    methods: {
        contentState: function () {
          this.$store.commit('homeStateChangeFalse');
          this.$store.commit('kkPageStateChangeFalse');
        }
    }
  }

</script>

<style lang="sass" scoped>
  @import "../css/pure-min.css";
  @import "../css/components/home.scss";


</style>
