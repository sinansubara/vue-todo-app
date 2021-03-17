<template>
  <div>
    <input class="searchHead" @input="$store.commit('searchNotes', $event.target.value)" type="text" :value="$store.state.search" placeholder="Search todo.." />
  </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style>
    .searchHead {
        width: 100%;
    }
</style>