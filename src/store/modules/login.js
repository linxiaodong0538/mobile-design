const state = {
    token: '',
}

const actions = {
    login({ commit }, token) {
        commit('LOGIN', token)
    },
    logout({ commit }) {
        commit('LOGOUT')
    }
}


const mutations = {

    LOGIN: (state, token) => {
        state.token = token
        uni.setStorageSync('token', token)
        uni.reLaunch({
            url: "/pages/home/index"
        })
    },
    LOGOUT(state) {
        state.token = ''
        uni.removeStorageSync('token')
        uni.reLaunch({
            url: "/pages/login/index"
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
