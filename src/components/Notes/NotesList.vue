<template>
  <h1>Notes</h1>
  <Note v-for="note in notesProps" v-bind:key="note.id" v-bind:note="note" />
</template>

<script>
import Note from './Note'

export default {
  name: 'NotesList',
  components: {
    Note
  },
  props: {
    notesProps: Array
  }

}
</script>

<style>

</style>