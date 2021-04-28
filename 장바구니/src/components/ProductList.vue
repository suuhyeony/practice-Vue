<template>
    <div class="products">
        <product-box v-for="productItem in productList" :key="productItem.id" :productItem="productItem" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductBox from './ProductBox.vue';
// import { productItems } from '../data/productItems.js';
// import { coupons } from '../data/coupons.js';


export default {
    name: 'ProductList',
    components: { ProductBox },
    data() {
        return {
            // productItems,
            // coupons,
        }
    },
    computed: {
        ...mapState([
            'productList',
        ])
    },
    created() {
        this.$store.commit('GET_PRODUCT_ITEMS');
    }
}
</script>

<style>
.products {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
</style>