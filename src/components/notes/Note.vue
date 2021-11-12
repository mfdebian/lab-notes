<template>
  <div class="note">
    <h2>
      <input 
        type="checkbox"
        v-bind:checked="note.completed"
        @change="toggleNoteCompleted(note)"
        class="input-checkbox"/>
      <span v-bind:class="textClass" ref="noteText">{{note.text}}</span>
      <EditNoteModal
        v-show="showEditNoteModalComponent"
        v-bind:note="note"
        @edit-note-text="editNoteText"
      />
      <button @click="openEditNoteTextModal">&#128221;</button>
      <button @click="emitDeleteNoteEvent(note.id)">&#128465;</button>
    </h2>
  </div>

  
</template>

<script>
import EditNoteModal from './EditNoteModal'

function toggleNoteCompleted(note) {
  note.completed = !note.completed
  if(note.completed) {
    this.textClass='completed'
  } else {
    this.textClass=''
  }
}

function openEditNoteTextModal() {
  this.showEditNoteModalComponent = true;
}

function editNoteText(editedText) {
  this.note.text = editedText;
  this.showEditNoteModalComponent = false;
}

function emitDeleteNoteEvent(noteId) {
  /* We need to 'emit' this event to our parent component
  where the data lives */
  this.$emit('delete-note', noteId);
}

export default {
  name: 'Note',
  components: {
    EditNoteModal
  },
  props: {
    note: Object,
  },
  data() {
    return {
      textClass: '',
      showEditNoteModalComponent: false
    }
  },
  created() {
    if(this.note.completed) {
      this.textClass='completed'
    }
  },
  methods: {
    toggleNoteCompleted: toggleNoteCompleted,
    editNoteText: editNoteText,
    openEditNoteTextModal: openEditNoteTextModal,
    emitDeleteNoteEvent: emitDeleteNoteEvent,
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