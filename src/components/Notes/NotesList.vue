<template>
  <button @click="toggleShowAddNoteComponent">&#10133;</button>
  <AddNote v-show="showAddNoteComponent" @add-note="addNote" />
  <Note
    @delete-note="deleteNote"
    v-for="note in notes" 
    v-bind:key="note.id" 
    v-bind:note="note"
  />
</template>

<script>
import Note from './Note'
import AddNote from './AddNote';

function toggleShowAddNoteComponent() {
  this.showAddNoteComponent = !this.showAddNoteComponent;
}

function addNote(note) {
  this.notes = [note, ...this.notes];
}

function deleteNote(noteId) {
  let oldNotes = this.notes;
  let newNotes = oldNotes.filter(note => note.id !== noteId);
  this.notes = newNotes;
}

export default {
  name: 'NotesList',
  components: {
    Note,
    AddNote
  },
  data() {
    return {
      notes: [],
      showAddNoteComponent: false
    }
  },
  methods: {
    addNote: addNote,
    deleteNote: deleteNote,
    toggleShowAddNoteComponent: toggleShowAddNoteComponent
  },
  created() {
    this.notes = [
      {
        id: 1,
        text: "Primera tarea",
        completed: false,
      },
      {
        id: 2,
        text: "Segunda tarea",
        completed: false,
      },
      {
        id: 3,
        text: "Tercera tarea",
        completed: true,
      },
    ]
  }

}
</script>

<style>

button {
  font-size: 30px;
  margin: 5px;
}

</style>