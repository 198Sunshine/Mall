import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//引入自适应插件
import 'lib-flexible'

Vue.config.productionTip = false
//将$bus赋值为vue对象
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
