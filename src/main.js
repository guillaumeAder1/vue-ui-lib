import Vue from 'vue'
import App from './App.vue'
import Popup from './components/popup'

Vue.config.productionTip = false

Vue.component('popup', Popup)

new Vue({
  render: h => h(App),
}).$mount('#app')
