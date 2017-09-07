import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

/*Template.dragList.onCreated(function dragListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});*/


Template.actions.events({
  'click #addTask, keypress input' (event) {
    if (event.which === 13 || event.type === 'click') {
      // Prevent default browser form submit
      event.preventDefault();


      // Get value from form element
      const target = event.target;
      const text = $('#taskInput').val();
      const isImportant = $("#isTaskImportant").is(":checked");

      // Insert a task into the collection
      Tasks.insert({
        content: text,
        parent: "backlog",
        date: new Date(),
        isImportant: isImportant,
      });

      // Clear form
      $('#taskInput').val("");
    }
  },
});