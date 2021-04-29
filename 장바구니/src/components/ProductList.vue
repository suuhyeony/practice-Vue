<template>
    <div>
        <div class="filter-item">
        <select name="product-filter" id="product-filter" v-model="filterValue" @change="arrangeList">
            <option value="score">인기순</option>
            <option value="low-price">낮은 가격순</option>
            <option value="high-price">높은 가격순</option>
            <option value="sale">쿠폰 적용가능</option>
        </select>
        </div>
        <div class="products">
            <product-box v-for="productItem in productList" :key="productItem.id" :productItem="productItem" />
        </div>
    </div>
</template>

<script>
import ProductBox from './ProductBox.vue';
import { sortByScore, sortByPriceAsc, sortByPriceDesc } from '../module/sort';
import { productItems } from '../data/productItems.js';


export default {
    name: 'ProductList',
    components: { ProductBox },
    data() {
        return {
            productList: [],
            filterValue: 'score',
        }
    },
    methods: {
        arrangeList() {
            if (this.filterValue === 'score') {
                this.productList = productItems.sort(sortByScore);
            } else if (this.filterValue === 'low-price') {
                this.productList = productItems.sort(sortByPriceAsc);
            } else if (this.filterValue === 'high-price') {
                this.productList = productItems.sort(sortByPriceDesc);
            } else {
                this.productList = productItems.sort(sortByScore).filter((item) => {
                    if (!('availableCoupon' in item)) return true;
                })
            }
        }
    },
    created() {
        this.productList = [...productItems.sort(sortByScore)];
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
.filter-item {
    margin-top: 70px;
    display: flex;
    justify-content: flex-end;
}
</style>