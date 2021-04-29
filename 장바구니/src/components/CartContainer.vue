<template>
    <div>
        <cart-item v-for="cartItem in cartList" :key="cartItem.id" :cartItem="cartItem" />
    </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapState } from 'vuex' 

export default {
    name: 'CartContainer',
    components: { CartItem },
    computed: {
        ...mapState([ 
            'cartList', 
        ])
    },

}
</script>

<style>

</style>