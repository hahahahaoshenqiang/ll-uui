import Vue from 'vue'
import App from './App.vue'
import HeimaUI from '../packages'
Vue.config.productionTip = false
Vue.use(HeimaUI)

new Vue({
  render: h => h(App)
}).$mount('#app')

const a = 99