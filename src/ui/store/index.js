import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { mutationsDefinition } from './mutations'
import { actionsDefinition } from './actions'

Vue.use(Vuex)

export default new Store({
  mutations: mutationsDefinition,
  actions: actionsDefinition,
  state: {
    locked: false,
    accounts: {},
    loginFlow: {
      isRunning: false
    },
    loading: {
      accounts: true,
    }
  },
  getters: {},
})
