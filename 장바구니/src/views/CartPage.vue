<template>
    <div>
        <cart-header />
        <cart-container />
        <coupon-select />
        <check-out />
    </div>
</template>

<script>
import CartContainer from '../components/CartContainer.vue'
import CartHeader from '../components/CartHeader.vue'
import CheckOut from '../components/CheckOut.vue'
import CouponSelect from '../components/CouponSelect.vue'

export default {
    components: { CartHeader, CartContainer, CheckOut, CouponSelect },

}
</script>

<style>

</style>