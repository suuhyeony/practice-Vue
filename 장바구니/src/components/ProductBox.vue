<template>
    <!-- vue bootstrap 사용 -->
    <div style="boxShadow: 0 0 8px rgba(0, 0, 0, 0.07);">
        <b-card class="mb-2 product-item"
            :title="productItem.title" :img-src="productItem.coverImage"
            img-alt="Image" img-top tag="article" style="max-width: 20rem;"
        >
            <div class="product-content">
                <div class="price-tag">
                    <p class="coupon" v-if="productItem.availableCoupon === false" style="border: 1px solid red; marginLeft:3px;">쿠폰사용 불가</p>
                    <p v-else></p>
                    <b-card-text style="color:orange; marginRight:8px;">
                        <b>{{ productItem.price }}</b>
                    </b-card-text>
                </div>
                <b-button v-show="!isInCart" href="#" variant="primary" style="display:inline-block; text-decoration:none;" @click="addItem">담기</b-button>
                <b-button v-show="isInCart" href="#" variant="primary" style="display:inline-block; text-decoration:none;" @click="delItem">빼기</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ProductBox',
    props: {
        productItem: Object,
    },
    data() {
        return {
            isInCart: false,    // 담기or빼기 버튼 토글을 위한 데이터 
        }
    },
    computed: {
        ...mapState([
            'cartList',
        ])
    },
    methods: {
        addItem() {
            this.$store.commit('ADD_TO_CART', this.productItem);
            this.checkItem();
        },
        delItem() {
            this.$store.commit('DEL_FROM_CART', this.productItem);
            this.checkItem();
        },
        // 해당 상품이 장바구니 담겨있는지 확인
        checkItem() {
            if (this.cartList.filter((item) => {
                if (this.productItem.id === item.id) return true;
                else return false;
            }).length >= 1) this.isInCart = true;
            else this.isInCart = false;
        }
    },
    created() {
        this.checkItem();
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