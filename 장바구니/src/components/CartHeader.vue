<template>
    <div class="header">
        <h3><b>장바구니에 담긴 상품</b></h3>
        <div class="select">
            <div class="checkbox">
                <input class="for-check" type="checkbox" checked v-model="isCheck" @change="handleCheck" />
                <p>전체선택</p>
            </div>
            <div class="count">
                <p style="marginRight:8px;">({{ checkList.length }}/{{ cartList.length }})</p>
                <button @click="delItem" style="cursor:pointer;"><b>선택삭제</b></button>
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
        delItem() {
            this.checkList.forEach((item) => {
                this.$store.commit('DEL_FROM_CART', item);
            });
            this.$store.commit('CLEAR_CHECKLIST');
        },
        handleCheck() {
            this.$store.commit('UPDATE_ENTIRE_CHECK', this.isCheck);
        }
    }
}
</script>

<style>
.header {
    margin-top: 40px;
    padding: 5px;
    border-bottom: 1px solid gray;
}
.select {
    display: flex;
    justify-content: space-between;
}
.checkbox {
    display: flex;
    justify-content: space-evenly;
    
}
.count {
    display: flex;
    justify-content: space-between;
}
.for-check {
    position: relative;
    top: 18px;
    margin-right: 5px;
}
</style>