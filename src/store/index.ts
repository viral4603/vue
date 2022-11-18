import { createStore } from 'vuex'

export default createStore({
  state: {
    loader:false,
    user:{
      isUserLogin:false,
      userName:'',
      userId:''
    }
  },
  getters: {
    getUserDeatils(state) {
      return state.user
    }
  },
  mutations: {
    LOADER_VIEW(state,value) {
      state.loader = value
    },
    SET_USER(state,value) {
      state.user.isUserLogin = value.isLogin,
      state.user.userName = value.userName
      state.user.userId = value.id
    }
  },
  actions: {
    showLoader({ commit }) {
      commit('LOADER_VIEW',true)
    },
    hideLoader({ commit }) {
      commit('LOADER_VIEW',false)
    },
    setUser({commit},value) {
      commit('SET_USER',value)
    },
    removeUser({commit},value) {
      commit('SET_USER',value)
    }
  },
  modules: {
  }
})
