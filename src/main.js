// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Login from './components/Login.vue'
import Detail from './components/Detail.vue'
import Index from './components/Index.vue'
import Headers from './components/Headers.vue'


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.devtools = true;

const routes = [

  {path: '/login', component: Login},
  {path: '/detail', component: Detail},
  {path: '/', component: Index}

];

const router = new VueRouter({
  routes,
  model: 'hash',
  base: '/'
});

const app = new Vue({

  router,
  render:  h=>h(App)
}).$mount('#app');
