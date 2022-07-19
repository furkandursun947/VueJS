import Vue from 'vue'
import { store } from './store/store'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
