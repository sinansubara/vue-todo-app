<template>
  <div class="todo-list" 
    v-bind:class="{'is-completed':todo.completed}">
      <p>
        <input type="checkbox" v-model="todo.completed" v-on:change="markComplete(idKey)">
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)" class="del">x</button>
      </p>
  </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['todo', 'idKey'],
    methods: {
      markComplete(id) {
        this.$store.dispatch('updateNote', id);
      },
      deleteTodo(id) {
        this.$store.dispatch('deleteNote', id);
      }
    }
}
</script>

<style>
  .todo-list {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-completed {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>