import Vue from 'vue'
import App from './App.vue'
import './scss/style.scss'
import './scss/media.scss'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );
Vue.use(VueRouter, Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
