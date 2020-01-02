import Vue from 'vue'
import VModal from 'vue-js-modal'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VModal)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
