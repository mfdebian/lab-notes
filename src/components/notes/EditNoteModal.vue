<template>
  <div class="note">
    <form @submit="emitEditNoteText">
      <input
        type="text"
        placeholder="Tarea a realizar"
        v-model="text"
        class="input-text"
      />
      <button
        type="submit" 
        class="button-submit"
        v-bind:disabled="!text.length"
        >
          &#10004;
      </button>
    </form>
  </div>
</template>

<script>

function emitEditNoteText(event) {
  event.preventDefault();
  if(this.text) {
    let editedText = this.text

    /* We need to 'emit' this event to our parent component
      where the data lives
    */
    this.$emit('edit-note-text', editedText)
  }
  
}

export default {
  name: "EditNoteModal",
  props: {
    note: Object,
  },
  data() {
    return {
      text: this.note.text
    }
  },
  methods: {
    emitEditNoteText: emitEditNoteText
  }
}
</script>

<style scoped>
.note {
  border-width: thin;
}

</style>
