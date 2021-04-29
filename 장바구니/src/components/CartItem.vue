<template>
    <div class="productBlock">
        <input type="checkbox" checked v-model="isCheck" @change="controllCheck">
        <img :src="cartItem.coverImage" alt="">
        <div class="contentBlock">
            <div class="cart-content">
                <p class="coupon" v-if="cartItem.availableCoupon === false" style="border: 1px solid red; marginLeft:3px;">쿠폰사용 불가</p>
                <p v-else></p>
            </div>
            <p>{{ cartItem.title }}</p>
            <p style="color:orange; marginRight:0px;"><b>{{ cartItem.price }}</b></p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

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
        ])
    },
    watch: {
        checkedAll: function() {
            this.isCheck = this.checkedAll;
        }
    },
    methods: {
        controllCheck() {
            if (this.isCheck) {
                this.$store.commit('ADD_TO_CHECKLIST', this.cartItem);
            } else {
                this.$store.commit('DEL_FROM_CHECKLIST', this.cartItem);
            }
        }
    },
    created() {
        // this.isCheck = true;
        this.controllCheck();
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
    /* height: 100px; */
}
.addButton {
    position: relative;
    right: -290px;
}
.cart-content {
    width: 150px;
    display: flex;
    /* justify-content: space-evenly; */
}
</style>