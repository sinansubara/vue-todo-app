<template>
    <div>
        <div>
            <div v-for="(todo, index) in $store.getters.notesFiltered" v-bind:key="todo.id">
                <TodoItem v-bind:todo="todo" :idKey="index" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
    name: 'Todos',
    props: ['todos'],
    components: {
        TodoItem
    }
}
</script>

<style scoped>

</style>