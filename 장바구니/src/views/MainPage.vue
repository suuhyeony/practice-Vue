<template>
    <div>
        <filter-item />
        <product-list />
    </div>
</template>

<script>
import FilterItem from '../components/FilterItem.vue'
import ProductList from '../components/ProductList'

export default {
    components: { 
        ProductList,
        FilterItem, 
    },
    data() {
        return {
            
        }
    }

}
</script>

<style>

</style>