import Vue from 'vue';
import Vuex from 'vuex';

import { sortByScore } from '../module/sort';
import productItems from '../data/productItems';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        productList: [],
        cartList: [],
        filterValue: '',
    },
    getters: {

    },
    mutations: {
        GET_PRODUCT_ITEMS(state) {
            state.cartList = productItems.sort(sortByScore);
        }
    },
    actions: {
        // getProductItems(state) {

        // }
    },
});