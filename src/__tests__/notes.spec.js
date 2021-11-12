import { render, screen, fireEvent, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom'
import App from '../App.vue';
import NotesList from '../components/notes/NotesList.vue';
import AddNote from '../components/notes/AddNote.vue';

/*
  if you need to 'see' the DOM at a certain moment while writing tests
  you can call:
    screen.debug()
  and it will print the _current_ state of the DOM at that
  point in the terminal while running the tests.
*/

describe('App.vue', () => {
  it('Should render "Notes App"', () =>{
    render(App);
    /*
      even though it may not look like it, this is our 
      test's assertion call, it's implicit. it can be thought
      as:
        expect(screen.getByText('rendered text')).toBeInTheDocument();
    */
    screen.getByText('Notes App');
  });
});

describe('NotesList.vue', () => {
  
  it('Should render "Primera tarea"', () =>{
    render(NotesList);
    screen.getByText("Primera tarea");
  });

  it('Should render "Segunda tarea"', () =>{
    render(NotesList);
    screen.getByText("Segunda tarea");
  });

  it('Should render "Tercera tarea"', () =>{
    render(NotesList);
    screen.getByText("Tercera tarea");
  });
  
  it('Should render the toggleShowAddNoteComponent button', () =>{
    render(NotesList);
    screen.getByRole("show-add-note");

  });
  
  it('Should render the AddNote component after the toggle button is pressed', async () =>{
    render(NotesList);
    const toggleShowAddNoteComponentButton = screen.getByRole("show-add-note");
    
    /*
      we're gonna 'click' the button as the user would do by 'firing'
      the click event
    */
    fireEvent.click(toggleShowAddNoteComponentButton);

    /* 
      the input to add note will only exist on the screen after the button
      is pressed, as a little 'gotcha', the change in the DOM will only occur
      after the next 'tick' (see: https://stackoverflow.com/a/47636157/9654976)
      so we need to wait for that next tick to happen; To accomplish that, we'll
      use the waitFor() method.
    */
    waitFor(()=> {
      screen.getByRole("add-note-form");
    });
  });

  describe('AddNote.vue', () => {
    it('Should render the add note form', () =>{
      render(AddNote);
      screen.getByRole("add-note-form");
    });

    it('Should render the add note form submit button', () =>{
      render(AddNote);
      screen.getByRole("add-note-submit-button");
    });
    
    it('The add note submit button should be disabled', () =>{
      render(AddNote);
      /* 
        remember this is an asertion call so it should fail 
        if the button doesn't exists
      */
      const addNoteFormSubmitButton = screen.getByRole("add-note-submit-button");

      expect(addNoteFormSubmitButton).toBeDisabled();
    });

    it('The add note submit button should be accesible to click after\
    the user inputs something into the text input of the form', async () =>{
      render(AddNote);
      const addNoteFormSubmitButton = screen.getByRole("add-note-submit-button");
      const addNoteFormTextInput = screen.getByRole("add-note-text-input");
      
      // first, the button is disabled
      expect(addNoteFormSubmitButton).toBeDisabled();

      /*
        again we need to fire an event, this time for the form's text input
        to be filled with some data, and again, we're gonna have to wait for
        the next 'tick' for it to pass our assertion call
      */

      fireEvent.update(addNoteFormTextInput, "Tarea a ser realizada");

      // now the user should be able to click the submit button
      waitFor(() => expect(addNoteFormSubmitButton).not.toBeDisabled());

    });

    it('Should emit the add-note event with the corresponding text when the\
    submit button is clicked', async () => {
      /* 
        the following line is a way of destructuring our component's emit's
        into this emitted function
      */
      const {emitted} = render(AddNote);
      const addNoteFormSubmitButton = screen.getByRole("add-note-submit-button");
      const addNoteFormTextInput = screen.getByRole("add-note-text-input");
      
      // first, the button is disabled
      expect(addNoteFormSubmitButton).toBeDisabled();

      /*
        again we need to fire an event, this time for the form's text input
        to be filled with some data, and again, we're gonna have to wait for
        the next 'tick' for it to pass our assertion call
      */

      fireEvent.update(addNoteFormTextInput, "Tarea a ser realizada");

      /*
        this is a very subtle 'bug' or behavior of our tests, but if we're
        gonna fire the click event of the button, first we must wait for that
        button to be accesible and since waitFor will take _at least_ one tick
        of time, we need for it to end to then fire our button's click event and
        that's why we need the await keyword before it
      */
      await waitFor(() => expect(addNoteFormSubmitButton).not.toBeDisabled());

      // _now_ that the button is accesible, we can trigger our emit event
      fireEvent.click(addNoteFormSubmitButton);

      /*
        the emitted event should've been registered in our emitted function
      */
      expect(emitted()['add-note'][0][0].text).toBe("Tarea a ser realizada");
    });

  });







});
