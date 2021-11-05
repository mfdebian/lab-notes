<template>
  <button @click="addNote">Add Note</button>
  <NotesList v-bind:notesProps="notes"/>
  <p>{{msg}}</p>
</template>

<script>
import NotesList from './components/Notes/NotesList';

function addNote() {
  let oldMsg = this.msg;
  let newMsg= "Hello from button";
  this.msg = newMsg;
}

// component's attributes
export default {
  name: 'App',
  components: {
    NotesList
  },
  data() {
    return {
      msg: "",
      notes: [],
    }
  },
  methods: {
    addNote: addNote
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
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
