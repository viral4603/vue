import { createStore } from 'vuex'

export default createStore({
  state: {
    loader:false
  },
  getters: {
  },
  mutations: {
    LOADER_VIEW(state,value) {
      state.loader = value
    }
  },
  actions: {
    showLoader({ commit }){
      commit('LOADER_VIEW',true)
    },
    hideLoader({ commit }){
      commit('LOADER_VIEW',false)
    }
  },
  modules: {
  }
})
