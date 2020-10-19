import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
import axios from 'axios'
import moment from 'moment'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)
Vue.prototype.moment = moment
Vue.prototype.qs = qs
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
