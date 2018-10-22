import api from '@/api'
import { getCookie } from '@/utils'

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
      let date = new Date()
      date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
      var expiration = 'expires=' + date.toUTCString()

      document.cookie = `apiToken=${token}; expires=${expiration}`
    }
  },
  actions: {
    async fetchUser (context) {
      if (document.cookie.includes('apiToken')) {
        context.commit('SET_API_TOKEN', getCookie('apiToken'))
      }
      try {
        let response = await api.get('/user?api_token=' + context.getters['apiToken'])
        this.commit('auth/SET_USER', response.data)
        return response.data
      } catch (e) {
        return false
      }
    }
  }
}
