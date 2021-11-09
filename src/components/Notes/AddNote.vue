<template>
  <form @submit="emitAddNote">
    <input
      type="text"
      placeholder="Tarea a realizar"
      v-model="text"
      class="input-text" />
    <button type="submit" class="button-submit">&#10004;</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

function emitAddNote(event) {
  event.preventDefault();
  
  /* normally we would capture the event's target value 
    like so:
      console.log(event.target[0].value); 
    bue since we're using a framework that already provides
    data capture/binding logic we can acomplish this using
    the v-model directive in the input tag so we can have 
    two-way data binding from/to the form's text input to/from 
    our component's (this) "text" data variable.
  */
  
  if(this.text) {
    let note = {
      id: uuidv4(),
      text: this.text,
      completed: this.completed
    }

    /* We need to 'emit' this event to our parent component
      where the data lives
    */
    this.$emit('add-note', note)

    // then we clean the text input field
    this.text='';
  }

}

export default {
  name: 'AddNote',
  data() {
    return {
      text: '',
      completed: false
    }
  },
  methods: {
    emitAddNote: emitAddNote
  }
}
</script>

<style>
.input-text {
  font-size: 20px;
  padding-top: 8px;
  line-height: 30px;
}
</style>