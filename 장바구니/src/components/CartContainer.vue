<template>
    <div class="cart-container">
        <cart-item v-for="cartItem in cartList" :key="cartItem.id" :cartItem="cartItem" class="cart-item" />
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapState } from 'vuex';

export default {
    name: 'CartContainer',
    components: { 
        CartItem, 
    },
    computed: {
        ...mapState([ 
            'cartList', 
        ]),
    },

}
</script>

<style scoped>
.cart-container {
    border-bottom: 1px solid gray;
    margin-bottom: 30px;
}
.cart-item:last-child {
    margin-bottom: 20px;
}
</style>