<template>
  <div id="app">
    <Header />
    <Search />
    <AddTodo />
    <Todos v-bind:todos="notes" />
  </div>
</template>

<script>
import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo,
    Search
  },
  computed: {
    notes() {
      return this.$store.getters.listNotes;
    }
  },
  created() {
    this.$store.dispatch('getNotes');
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  #app {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
