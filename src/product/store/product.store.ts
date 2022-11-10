import Vuex from "vuex";

// Create Vuex data store
const productStore = new Vuex.Store({
    state: {
        currrentRouteName: '' as string
    },
    mutations: {
        SET_ROUTE(state, value) {
            state.currrentRouteName = value
    }
    },
    getters: {
        getCurrentRouteName: (state) => {
            return state.currrentRouteName;
        }
    },
    actions: {
         ["setCurrentRoute"]({ commit }, value) {
            commit("SET_ROUTE",value)
        }
    },
});
export default productStore;