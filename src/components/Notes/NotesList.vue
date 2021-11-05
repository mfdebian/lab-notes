<template>
  <h1>Notes</h1>
  <button @click="addNote">Add Note</button>
  <p>{{msg}}</p>
  <Note
    @delete-note="deleteNote"
    v-for="note in notes" 
    v-bind:key="note.id" 
    v-bind:note="note"
  />
</template>

<script>
import Note from './Note'

function addNote() {
  let oldMsg = this.msg;
  let newMsg= "Hello from button";
  this.msg = newMsg;
}

function deleteNote(noteId) {
  let oldNotes = this.notes;
  let newNotes = oldNotes.filter(note => note.id !== noteId);
  this.notes = newNotes;
}

export default {
  name: 'NotesList',
  components: {
    Note
  },
  data() {
    return {
      msg: "",
      notes: [],
    }
  },
  methods: {
    addNote: addNote,
    deleteNote: deleteNote
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
        completed: true,
      },
      {
        id: 3,
        text: "Tercera tarea",
        completed: false,
      },
    ]
  }

}
</script>

<style>

</style>