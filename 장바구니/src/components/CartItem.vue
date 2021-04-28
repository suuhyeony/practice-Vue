<template>
    <div class="productBlock">
        <input type="checkbox">
        <img src="https://cdn.class101.net/images/1ea53728-c3f7-4fe9-a485-88c9a130b3b4" alt="">
        <div class="contentBlock">
            <button class="addButton">삭제</button>
            <p>title</p>
            <p>price</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.productBlock {
    display: flex;
    /* border: 1px solid gray; */
    border-radius: 10px;
    margin-top: 10px;
    padding: 8px 20px;
}
img {
    width: 100px;
    height: 100px;
}
.contentBlock {
    padding-left: 15px;
}
.addButton {
    position: relative;
    right: -290px;
}
</style>