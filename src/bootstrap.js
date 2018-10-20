import Vue from 'vue'
import icons from './icons'

Vue.mixin({
  data () {
    return {
      get debug () {
        return process.env.VUE_APP_DEBUG
      },
      get icons () {
        return icons
      },
      get apiUrl () {
        return process.env.VUE_APP_API_URL
      },
      get backendUrl () {
        return process.env.VUE_APP_BACKEND_URL
      },
      get shortCodeLocation () {
        return process.env.VUE_APP_SHOT_CODE_LOCATION
      },
      apiToken: ''
    }
  }
})
