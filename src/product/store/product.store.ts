import Vuex from "vuex";

// Create Vuex data store
const productStore = new Vuex.Store({
    state: {
        currrentRouteName: '' as string,
        cartItems:[] as any,
        favouriteItems:[] as any
    },
    mutations: {
        SET_ROUTE(state, value) {
            state.currrentRouteName = value
        },
        ADD_CART_ITEMS(state,value) {
            state.cartItems.push(value);
        },
        ADD_FAVOURITE_ITEMS(state,value) {
            state.favouriteItems.push(value)
        },
        REMOVE_FAVOURITE_ITEMS(state,value) {
            state.favouriteItems.splice(value,1)
        }
    },
    getters: {
        getCurrentRouteName: (state) => {
            return state.currrentRouteName;
        },
        getCart: (state) =>{
            return state.cartItems;
        },
        getFavouriteItems: (state) => {
            return state.favouriteItems;
        }
    },
    actions: {
         ["setCurrentRoute"]({ commit }, value) {
            commit("SET_ROUTE",value)
        },
        ["addItemsTocart"]({ commit }, value) {
            commit("ADD_CART_ITEMS",value)
        },
        ["addItemsToFavouirite"]({ commit }, value) {
            commit("ADD_FAVOURITE_ITEMS",value)
        },
        ["removeFromFavourite"]({ commit }, value) {
            commit("REMOVE_FAVOURITE_ITEMS",value)
        }
    },
});
export default productStore;