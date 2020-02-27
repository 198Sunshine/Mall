import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from  './store'
import toast from "components/common/toast"
import fastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
//引入自适应插件
import 'lib-flexible'

Vue.config.productionTip = false
//将$bus赋值为vue对象
Vue.prototype.$bus = new Vue()

//安装tocast插件
Vue.use(toast)

//解决移动端300ms延迟
fastClick.attach(document.body)
//图片懒加载
Vue.use(VueLazyload)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
