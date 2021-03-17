import axios from 'axios'
import mutationTypes from './mutation_types'

export default {
    [mutationTypes.GET_NOTES](state) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
          .then(result => state.notes = result.data)
          .catch(err => console.log(err));
    },
    [mutationTypes.ADD_NOTE](state, newNote) {
        const { id, title, completed } = newNote;
        axios.post('https://jsonplaceholder.typicode.com/todos', { id, title, completed })
            .then(result => state.notes.push(result.data))
            .catch(err => console.log(err));
    },
    [mutationTypes.DELETE_NOTE](state, id){
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => state.notes = state.notes.filter(todo => todo.id !== id))
        .then(() => console.log(state, "aktiviran id: " + id))
        .catch(err => console.log(err));
    },
    [mutationTypes.UPDATE_NOTE](state, id){
        // let updateNote = state.notes.find(x => x.id === id);
        // if(updateNote){
        //     updateNote.completed = !updateNote.completed;
        //     state.notes = state.notes.splice(id, 1, updateNote);
        // }
        console.log("state.notes[id].completed: ", state.notes[id].completed);
        console.log("!state.notes[id].completed: ", !state.notes[id].completed);
    },
    [mutationTypes.SEARCH_NOTES](state, value) {
        state.search = value;
    }
}