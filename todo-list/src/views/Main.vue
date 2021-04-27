<template>
  <div>
    <h1>Todo List</h1>
    <form v-on:submit.prevent="onSubmitForm">
      <input v-model="value" type="text" placeholder="할일을 입력해주세요.">
    </form>
    <TodoList @remove="removeItem" :todoList="todoList" />
  </div>
</template>


<script>
import TodoList from '../components/TodoList.vue';

export default {
    name: 'Main',
    components: {
      TodoList,
    },
    data() {
        return {
          todoList: [],
          value: '',
        }
    },
    methods: {
      onSubmitForm() {
        this.todoList.push(this.value);
        this.value = '';
      },
      removeItem(idx) {
        this.todoList.splice(idx, 1);
      },
    }
}
</script>

<style>

</style>