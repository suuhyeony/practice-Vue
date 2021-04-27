<template>
    <ul>
        <TodoItem @remove="removeItem" :item="item" :index="index" v-for="(item, index) of todoList" :key="index" />
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    props: {
        todoList: Array,
    },
    data() {
        return {
        }
    },
    methods: {
        removeItem(idx) {
            this.$emit('remove', idx);
        }
    }
 }
</script>

<style>
    li {
        list-style: none;
        display: flex;
        justify-content: center;
    }
    .Done {
        text-decoration: line-through;
        color: rgb(165, 164, 164);
    }
</style>