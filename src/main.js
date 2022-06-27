import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('dinheiro', value => {
	return '$ ' + value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
