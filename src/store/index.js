import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        login
    },
    state: {
        versionsUptateFlag: true,
    },
    getters
})

export default store