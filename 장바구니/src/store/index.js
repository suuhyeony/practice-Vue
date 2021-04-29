import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const savedCartList = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : [];
console.log(savedCartList)

export default new Vuex.Store({
    state: {
        cartList: [...savedCartList],
        checkList: [],
        checkedAll: true,
    },
    getters: {

    },
    mutations: {
        ADD_TO_CART(state, item) {
            state.cartList.push(item);
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        },
        DEL_FROM_CART(state, item) {
            state.cartList = state.cartList.filter((i) => {
                if (i.id !== item.id) return true;
                else return false;
            });
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        },
        ADD_TO_CHECKLIST(state, item) {
            state.checkList.push(item);
        },
        DEL_FROM_CHECKLIST(state, item) {
            state.checkList = state.checkList.filter((i) => {
                if (i.id !== item.id) return true;
                else return false;
            })
        },
        CLEAR_CHECKLIST(state) {
            state.checkList = [];
        },
        UPDATE_ENTIRE_CHECK(state, checked) {
            state.checkedAll = checked;
        }
    },
    actions: {

    },
});