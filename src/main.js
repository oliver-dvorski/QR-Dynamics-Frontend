import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import App from './App.vue'
import store from './store/index'
import './registerServiceWorker'
import './registerComponents'
import './bootstrap'

Vue.config.productionTip = false

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
