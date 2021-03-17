import mutationTypes from './mutation_types'

export default {
    getNotes({ commit }) {
        commit(mutationTypes.GET_NOTES);
    },
    addNote({ commit }, newNote) {
        commit(mutationTypes.ADD_NOTE, newNote);
    },
    deleteNote({ commit }, id) {
        commit(mutationTypes.DELETE_NOTE, id);
    },
    updateNote({ commit }, id) {
        commit(mutationTypes.UPDATE_NOTE, id);
    }
}