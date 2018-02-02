import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'// 会默认识别里面的index.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 生产模式
//Vue.config.productionTip = false 

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

Vue.prototype.sisterUrl = "http://202.96.18.105:8090";
// "/sister_proxy/?url=/kpi/2/value&key=ECSSL_ATTR140716157891&token=CHALLENGEEVERYTHING";

Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})