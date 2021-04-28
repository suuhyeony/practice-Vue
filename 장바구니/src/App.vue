<template>
  <div id="app" class="template">
    <div class="headBlock">
      <router-link :to="{ name: 'MainPage' }" style="display:inline-block; text-decoration:none; fontSize:20px;">상품목록</router-link>
      <router-link :to="{ name: 'CartPage' }" style="display:inline-block; text-decoration:none; fontSize:20px;">장바구니</router-link> 
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  background: #ffffff;
}
.template {
  width: 510px;
  height: 768px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}
.headBlock {
  width: 510px;
  box-sizing: border-box;
  padding-top: 15px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
}
</style>
