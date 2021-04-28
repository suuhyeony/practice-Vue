<template>
    <div class="products">
        <product-box v-for="productItem in productItems" :key="productItem.id" :productItem="productItem" />
    </div>
</template>

<script>
import ProductBox from './ProductBox.vue';
import { productItems } from '../data/productItems.js';
// import { coupons } from '../data/coupons.js';

console.log(productItems);
export default {
    name: 'ProductList',
    components: { ProductBox },
    data() {
        return {
            productItems,
            // coupons,
        }
    },
    created() {
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