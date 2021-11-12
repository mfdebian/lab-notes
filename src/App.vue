<template>
  <h1>Notes App</h1>
  <NotesList />
</template>

<script>
import NotesList from './components/notes/NotesList';

// component's attributes
export default {
  name: 'App',
  components: {
    NotesList
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
