<template>
  <div class="note">
    <h2>
      <input type="checkbox" v-bind:checked="note.completed"/>
      {{note.text}}
      <button>&#128221;</button>
      <button @click="emitDeleteNoteEvent(note.id)">&#128465;</button>
    </h2>
  </div>

  
</template>

<script>

function emitDeleteNoteEvent(noteId) {
  /* We need to 'emit' this event to our parent component,
  were the data lives */
  this.$emit('delete-note', noteId);
}

export default {
  name: 'Note',
  props: {
    note: Object
  },
  methods: {
    emitDeleteNoteEvent: emitDeleteNoteEvent
  }
}
</script>

<style scoped>
.note {
  border-style: solid;
  border-radius: 25px;
  margin-bottom: 10px;
}

button {
  font-size: 30px;
  margin: 5px;
}
</style>