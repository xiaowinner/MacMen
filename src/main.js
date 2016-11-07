// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Login from './components/Login'


Vue.use(VueRouter);
/* eslint-disable no-new */

const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Hello}
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  render:  h=>h(App)
}).$mount('#app');
/*new Vue({
  el: '#app',
  render: h => h(App)
});*/
