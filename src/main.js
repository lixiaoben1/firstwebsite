import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'boxicons'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
