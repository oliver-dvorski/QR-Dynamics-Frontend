import api from '@/api'

export default {
  namespaced: true,
  state: {
    user: false
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUser () {
      let response = await api.get('/user')
      if (response.data === 'Not logged in') {
        return false
      }
      this.commit('auth/SET_USER', response.data)
      return response.data
    }
  }
}
