// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import './common/rem'
import FastClick from 'fastclick'
import './assets/style/common.css'
import request from './common/request'
Vue.config.productionTip = false
Vue.prototype.$http = request
Vue.use(VueRouter)
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
