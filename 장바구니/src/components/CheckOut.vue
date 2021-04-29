<template>
    <div>
        <div class="selectBlock">
            <select name="" id="" v-model="selectedCoupon">
                <option value="no-cpn">쿠폰 미적용</option>
                <option value="10per-cpn">10% 할인 쿠폰</option>
                <option value="dis-cpn">10,000원 할인 쿠폰</option>
            </select>
        </div>
        <div class="checkoutBlock">
            <p>주문 상품 수: {{ checkList.length }}</p>
            <p>총 주문금액: {{ totalPrice }}</p>
            <p>할인금액: {{ discountedPrice }}</p>
            <p>총 결제금액: {{ resultPrice }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CheckOut',
    data() {
        return {
            selectedCoupon: 'no-cpn',
        }
    },
    methods: {
        priceSum(targetList) {
            return targetList.reduce((acc, cur) => {
                acc += cur.price;
                return acc
            }, 0)
        },
        filterItem(targetList) {
            return targetList.filter((item) => {
                if ('availableCoupon' in item) return false;
                else return true;
            })
        },
    },
    computed: {
        ...mapState([
            'checkList',
        ]),
        totalPrice() {
            return this.priceSum(this.checkList);
        },
        discountedPrice() {
            if (this.selectedCoupon === 'no-cpn') return 0;
            else if (this.selectedCoupon === '10per-cpn') {
                return parseInt(this.priceSum(this.filterItem(this.checkList))/10);
            } else {
                if (this.filterItem(this.checkList).length) return 10000;
                else return 0;
            } 
        },
        resultPrice() {
            return this.totalPrice - this.discountedPrice;
        }
    },
}
</script>

<style>
.checkoutBlock {
    padding: 10px;
    width: 300px;
    margin: 0 auto;
}
.selectBlock {
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
}
</style>