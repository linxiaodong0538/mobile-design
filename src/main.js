import Vue from 'vue'
import App from './App'
import store from './store'
import globalPlugin from './utils/plugins/global'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(globalPlugin)

const app = new Vue({
    ...App
})
app.$mount()