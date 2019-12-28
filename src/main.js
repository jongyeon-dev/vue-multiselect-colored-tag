import Vue from 'vue'
import App from './App.vue'
import BaseMultiselect from './components/common/base-multiselect'

Vue.config.productionTip = false

Vue.use(BaseMultiselect)

new Vue({
  render: h => h(App)
}).$mount('#app')
