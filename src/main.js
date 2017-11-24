import Vue from 'vue'
import App from './App.vue'
import router from './router'// 会默认识别里面的index.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 生产模式
//Vue.config.productionTip = false 

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})