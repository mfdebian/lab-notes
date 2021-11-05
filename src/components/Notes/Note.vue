<template>
  <input type="checkbox" />
  <h2>{{note.text}}</h2>
  <button>Delete</button>
  <button>Edit</button>
  <h3>{{note.completed}}</h3>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: Object
  }
}
</script>

<style>

</style>