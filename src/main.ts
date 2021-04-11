import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import router from './router/index.ts' 其实是从以上路径引入的，但是不写后面具体的文件，vue默认会找到文件夹下面名为 index 的文件夹
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 10000);
  }, 0)
};