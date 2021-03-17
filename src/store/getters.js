export default {
    listNotes: state => state.notes,
    notesFiltered(state) {
        if(!state.search){
            return state.notes;
        }
        return state.notes.filter(note => note.title.toLowerCase().includes(state.search.toLowerCase()));
    }
}