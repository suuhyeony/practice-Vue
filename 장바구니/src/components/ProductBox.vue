<template>
    <div style="boxShadow: 0 0 8px rgba(0, 0, 0, 0.07);">
        <b-card
            :title="productItem.title"
            :img-src="productItem.coverImage"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 product-item"
        >
            <div class="product-content">
                <div class="price-tag">
                    <p class="coupon" v-if="productItem.availableCoupon === false" style="border: 1px solid red; marginLeft:3px;">쿠폰사용 불가</p>
                    <p v-else></p>
                    <b-card-text style="color:orange; marginRight:8px;">
                        <b>{{ productItem.price }}</b>
                    </b-card-text>
                </div>
                <b-button href="#" variant="primary" style="display:inline-block; text-decoration:none;">담기</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        productItem: Object,
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.coupon {
    color: red;
    font-size: 15px;
}
img {
    width: 100%;
    height: 200px;
}
.card-body {
    padding: 0 10px;
}
.price-tag {
    display: flex;
    justify-content: space-between;
}
.product-content {
    margin-bottom: 30px;
    margin-top: 0px;
}
</style>