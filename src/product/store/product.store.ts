import Vuex from "vuex";

// Create Vuex data store
const productStore = new Vuex.Store({
    state: {
        currrentRouteName: '' as string,
        cartItems:[] as any,
        favouriteItems:[] as any,
        productList:[] as any
    },
    mutations: {
        SET_ROUTE(state, value) {
            state.currrentRouteName = value
        },
        ADD_CART_ITEMS(state,value) {
            state.cartItems.push(value);
        },
        REMOVE_CART_ITEMS(state,value) {
            state.cartItems.splice(value,1);
        },
        ADD_FAVOURITE_ITEMS(state,value) {
            state.favouriteItems.push(value)
        },
        REMOVE_FAVOURITE_ITEMS(state,value) {
            state.favouriteItems.splice(value,1)
        },
        SET_PRODUCT_LIST(state,value) {
            state.productList = value;
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
        },
        getAllProductList: (state) => {
            return state.productList;
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
        },
        ["removeItemFromCart"]({ commit }, value) {
            commit("REMOVE_CART_ITEMS",value)
        },
        ["addProductList"]({commit},value) {
            commit("SET_PRODUCT_LIST",value)
        }
    },
});
export default productStore;