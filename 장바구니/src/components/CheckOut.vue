<template>
    <div>
        <div class="select-block">
            <select name="sel-cpn" id="sel-cpn" v-model="selectedCoupon">
                <option value="no-cpn">쿠폰 미적용</option>
                <option value="10per-cpn">10% 할인 쿠폰</option>
                <option value="dis-cpn">10,000원 할인 쿠폰</option>
            </select>
        </div>
        <div class="checkout-block">
            <div class="checkout-item">
                <p class="text">주문 상품 수: </p><p class="text"><b>{{ checkList.length }}</b></p>
            </div>
            <div class="checkout-item">
                <p class="text">총 주문금액: </p><p class="text"><b>{{ totalPrice }}</b></p>
            </div>
            <div class="checkout-item">
                <p class="text">할인금액: </p><p class="text"><b>{{ discountedPrice }}</b></p>
            </div>
            <div class="checkout-item">
                <p class="text">총 결제금액: </p><p class="text"><b>{{ resultPrice }}</b></p>
            </div>
            <button class="pay-btn">결제하기</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CheckOut',
    data() {
        return {
            selectedCoupon: 'no-cpn',
        }
    },
    methods: {
        // 가격 모두 합하기
        priceSum(targetList) {
            return targetList.reduce((acc, cur) => {
                acc += cur.price;
                return acc
            }, 0)
        },
        // 해당 리스트 내 쿠폰미적용 상품 거르기
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
        // 총 주문금액
        totalPrice() {
            return this.priceSum(this.checkList);
        },
        // 총 할인금액 (쿠폰 종류에 따른 결과)
        discountedPrice() {
            if (this.selectedCoupon === 'no-cpn') return 0;
            else if (this.selectedCoupon === '10per-cpn') {  // 쿠폰미적용 상품 필터 후 10퍼센트 할인
                return parseInt(this.priceSum(this.filterItem(this.checkList))/10);
            } else { // 쿠폰적용 가능 상품이 하나라도 있을 시 만원 할인
                if (this.filterItem(this.checkList).length) return 10000;
                else return 0;
            } 
        },
        // 총 결제금액
        resultPrice() {
            return this.totalPrice - this.discountedPrice;
        }
    },
}
</script>

<style scoped>
.checkout-block {
    padding: 10px;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 20px;
}
.select-block {
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
}
#sel-cpn {
    width: 180px;
    height: 40px;
    font-size: 16px;
    background-color: white;
    padding: 10px 5px;
    border-radius: 5px;
    cursor: pointer;
}
option {
    font-size: 16px;
}
.checkout-item {
    display: flex;
    justify-content: space-between;
}
.text{
    margin: 10px 0px;
    font-size: 17px;
}
.pay-btn {
    margin: 30px auto;
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: bold;
    width: 50%;
    padding: 10px;
    background-color: white;
    border: 2px solid gray;
    border-radius: 8px;
    cursor: pointer;
}
</style>