<template>
  <div class="note">
    <h2>
      <input 
      type="checkbox"
      v-bind:checked="note.completed"
      @change="toggleNoteCompleted(note)"
      class="input-checkbox"/>
      <span v-bind:class="textClass">{{note.text}}</span>
      <button>&#128221;</button>
      <button @click="emitDeleteNoteEvent(note.id)">&#128465;</button>
    </h2>
  </div>

  
</template>

<script>

function toggleNoteCompleted(note) {
  note.completed = !note.completed
  if(note.completed) {
    this.textClass='completed'
  } else {
    this.textClass=''
  }
}

function emitDeleteNoteEvent(noteId) {
  /* We need to 'emit' this event to our parent component
  where the data lives */
  this.$emit('delete-note', noteId);
}

export default {
  name: 'Note',
  props: {
    note: Object,
  },
  data() {
    return {
      textClass: ''
    }
  },
  created() {
    if(this.note.completed) {
      this.textClass='completed'
    }
  },
  methods: {
    emitDeleteNoteEvent: emitDeleteNoteEvent,
    toggleNoteCompleted: toggleNoteCompleted
  }
}
</script>

<style>
.note {
  border-style: solid;
  border-radius: 25px;
  margin: 10px;
}

.input-checkbox {
  transform: scale(2);
  margin: 20px;
}

.completed {
  text-decoration: line-through;
}
</style>