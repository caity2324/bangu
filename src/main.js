// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import MintUI from 'mint-ui'
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/common.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(MintUI)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
