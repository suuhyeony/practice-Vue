<template>
  <ul>
      <li v-for="(item, index) of todoList" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todoList: Array,
    },
}
</script>

<style>

</style>