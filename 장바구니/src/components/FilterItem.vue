<template>
    <div class="filter-item">
        <select name="" id="">
            <option value="score">인기순</option>
            <option value="low-price">낮은 가격순</option>
            <option value="high-price">높은 가격순</option>
            <option value="sale">쿠폰 적용가능</option>
        </select>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.filter-item {
    margin-top: 70px;
    display: flex;
    justify-content: flex-end;
}
</style>