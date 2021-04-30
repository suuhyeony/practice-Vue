<template>
    <div class="header">
        <h3><b>장바구니에 담긴 상품</b></h3>
        <div class="select">
            <div class="checkbox">
                <input class="for-check" type="checkbox" checked v-model="isCheck" @change="handleCheck" />
                <p style="fontSize:17px;"><b>전체선택</b></p>
            </div>
            <div class="count">
                <p style="margin: 0px 8px;">({{ checkList.length }}/{{ cartList.length }})</p>
                <button class="del-button" @click="delItem"><b>선택삭제</b></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CartHeader',
    data() {
        return {
            isCheck: true,
        }
    },
    computed: {
        ...mapState([
            'cartList',
            'checkList',
        ])
    },
    methods: {
        // 선택된 상품만 들어간 체크리스트에서 삭제
        delItem() {
            this.checkList.forEach((item) => {
                this.$store.commit('DEL_FROM_CART', item);
            });
            this.$store.commit('CLEAR_CHECKLIST');
        },
        // 전체체크 핸들
        handleCheck() {
            this.$store.commit('UPDATE_ENTIRE_CHECK', this.isCheck);
        },
    },
}
</script>

<style>
.header {
    margin-top: 40px;
    padding: 5px;
    border-bottom: 1px solid gray;
}
.select {
    height: 40px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
}
.checkbox {
    display: flex;
    justify-content: space-evenly;
    cursor:pointer;
}
.count {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.for-check {
    position: relative;
    top: 18px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
}
.del-button {
    cursor: pointer; 
    height:70%;
    margin-left: 10px;
    margin-bottom: 0px;
    border: 2px solid gray;
    background-color: white;
    color: black;
    border-radius: 5px;
}
</style>