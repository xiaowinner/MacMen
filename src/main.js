// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Hello from './components/Hello'
import Login from './components/Login'
import Home from './components/Home.vue'


Vue.use(VueRouter);
Vue.use(Vuex);
/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    header_state: true,
    home_state: true,
    kkpage_state: true

  },
  mutations: {

  }
});

const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Home}
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  store,
  render:  h=>h(App)
}).$mount('#app');
/*new Vue({
  el: '#app',
  render: h => h(App)
});*/
