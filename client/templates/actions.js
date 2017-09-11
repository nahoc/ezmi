import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.actions.onRendered(function () {
  $('#taskInput').focus();
});

Template.actions.events({
  'click #addTask, keypress input' (event) {
    if (event.which === 13 || event.type === 'click') {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = $('#taskInput').val();
      const isImportant = $("#isTaskImportant").is(":checked");
      const parent = $("#selectTask").find(":selected").val();

      // Insert a task into the collection
      Tasks.insert({
        content: text,
        parent: parent,
        date: new Date(),
        isImportant: isImportant,
      });

      // Clear form
      $('#taskInput').val("");
    }
  },
});