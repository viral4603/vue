import { createStore } from 'vuex'

export default createStore({
  state: {
    loader:false,
    user:{
      isUserLogin:false,
      userName:'',
      userId:''
    },
    searchFieldText:'' as string
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
    },
    SET_SEARCH_VALUE(state,value) {
      state.searchFieldText = value
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
    },
    setSearch({commit},value) {
      commit('SET_SEARCH_VALUE',value)
    }
  },
  modules: {
  }
})
