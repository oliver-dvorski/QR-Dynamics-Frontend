import Vue from 'vue'
import icons from './icons'

Vue.mixin({
  data () {
    return {
      get debug () {
        return true
      },
      get icons () {
        return icons
      },
      get appUrl () {
        return false
      },
      get shortCodeLocation () {
        return false
      }
    }
  }
})
