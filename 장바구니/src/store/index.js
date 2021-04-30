import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

// 스토리지에 저장된 장바구니 리스트
const savedCartList = JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : [];
// console.log(savedCartList);

export default new Vuex.Store({
    state: {
        cartList: [...savedCartList],  // 초기값은 저장된 리스트
        checkList: [],                 // 장바구니 내 체크된 리스트
        checkedAll: true,              // 전체 체크 여부
    },
    mutations: {   // state 수정하기
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
        // 전체선택 다루기
        UPDATE_ENTIRE_CHECK(state, checked) {
            state.checkedAll = checked;
        }
    },
});