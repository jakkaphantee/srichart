import Vue from 'vue'
import Vuex from 'vuex'

import preference from './preference'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    preference,
    user
  }
})
