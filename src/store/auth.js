import api from '@/api'

export default {
  namespaced: true,
  state: {
    apiToken: '',
    user: false
  },
  getters: {
    apiToken (state) {
      return state.apiToken
    },
    user (state) {
      return state.user
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_API_TOKEN (state, token) {
      state.apiToken = token
    }
  },
  actions: {
    async fetchUser (context) {
      let response = await api.get('/user?api_token=' + context.getters['apiToken'])
      if (response.data === 'Not logged in') {
        return false
      }
      this.commit('auth/SET_USER', response.data)
      return response.data
    }
  }
}
