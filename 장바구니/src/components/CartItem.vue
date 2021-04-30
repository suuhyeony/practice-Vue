<template>
    <div class="productBlock">
        <input class="checkbox" type="checkbox" checked v-model="isCheck">
        <img :src="cartItem.coverImage" alt="item-img">
        <div class="contentBlock">
            <p style="margin:0px;">{{ cartItem.title }}</p>
            <div class="cart-content">
                <p class="coupon" v-if="cartItem.availableCoupon === false" style="border: 1px solid red; marginLeft:3px;">쿠폰사용 불가</p>
                <p v-else></p>
                <p style="color:orange; display:flex; justifyContent:flex-end;"><b>{{ cartItem.price }}</b></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CartItem',
    props: {
        cartItem: Object,
    },
    data() {
        return {
            isCheck: true,
        }
    },
    computed: {
        ...mapState([
            'checkList',
            'checkedAll',
            'cartList',
        ])
    },
    watch: {  // 어떤 값이 바뀌었는지 감시
        // 상위 전체체크 값이 변하면, 하위 체크 값들도 바꾸기
        checkedAll: function() {
            this.isCheck = this.checkedAll;
        },
        isCheck: function() {
            this.controllCheck();
        }
    },
    methods: {
        // 체크 여부에 따라 체크리스트에 상품 넣고 빼기
        controllCheck() {
            if (this.isCheck) {
                this.$store.commit('ADD_TO_CHECKLIST', this.cartItem);
            } else {
                this.$store.commit('DEL_FROM_CHECKLIST', this.cartItem);
            }
        }
    },
    created() { // created될 때, 체크리스트 생성
        this.controllCheck();
    },
    destroyed() {  // destroyed될 때, 체크리스트 비우기
        this.$store.commit('CLEAR_CHECKLIST');
    }
}
</script>

<style scoped>
.productBlock {
    display: flex;
    border-radius: 10px;
    margin-top: 10px;
    padding: 8px 20px;
}
img {
    width: 100px;
    height: 100px;
}
.contentBlock {
    padding-left: 15px;
    width: 350px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cart-content {
    height: 30px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
}
.coupon {
    color: red;
    font-size: 15px;
    margin: 3px 0px;
}
.checkbox {
    width: 15px;
    height: 15px;
}
</style>