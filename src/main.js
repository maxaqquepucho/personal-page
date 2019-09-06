import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//scss
import './assets/scss/creative.scss'
import './assets/css/fontawesome-free/css/all.css'

//css
import './assets/css/global.css'

import Prism from 'prismjs';

Prism.highlightAll();

Vue.config.productionTip = false

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
