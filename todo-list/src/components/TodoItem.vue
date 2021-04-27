<template>
    <li>
        <input type="checkbox" :id="item" @change="toggleDone" />
        <label :for="item">
        <p :class="[done ? 'Done' : '']">{{item}}</p>
        </label>
        <button @click="removeItem">X</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        item: String,
        index: Number,
    },
    data() {
        return {
            done: false,
        }
    },
    methods: {
        toggleDone() {
            this.done = !this.done;
            // console.log(this.done);
        },
        removeItem() {
            this.$emit('remove', this.index);
        }
    },
}
</script>

<style>
    label {
        cursor: pointer;
    }
</style>