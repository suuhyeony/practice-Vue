<template>
    <div>
        <p v-if="!cartList.length" class="nothing">장바구니에 담긴 상품이 없습니다.</p>
        <div v-else>
            <cart-header />
            <cart-container />
            <check-out />
        </div>
    </div>
</template>

<script>
import CartContainer from '../components/CartContainer.vue'
import CartHeader from '../components/CartHeader.vue'
import CheckOut from '../components/CheckOut.vue'
import { mapState } from 'vuex'

export default {
    name: 'CartPage',
    components: { CartHeader, CartContainer, CheckOut },
    computed: {
        ...mapState([
            'cartList',
        ])
    },
}
</script>

<style>
.nothing {
    margin-top: 80px;
    display: flex;
    justify-content: center;
}
</style>