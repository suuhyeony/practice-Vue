<template>
    <div class="header">
        <h3><b>장바구니에 담긴 상품</b></h3>
        <div class="select">
            <div class="checkbox">
                <input type="checkbox" />
                <p>전체선택</p>
            </div>
            <p>(선택개수/총개수) 선택삭제</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    margin-top: 40px;
    padding: 5px;
    border-bottom: 1px solid gray;
}
.select {
    display: flex;
    justify-content: space-between;
}
.checkbox {
    display: flex;
    justify-content: space-evenly;
    
}
</style>