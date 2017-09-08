import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.comments.onCreated(function commentsOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('comments');
});

Template.comments.events({
  'click #addComment, keypress input' (event) {
    if (event.which === 13 || event.type === 'click') {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = $('#commentInput').val();
      const parent = $(event.target).closest('.anti-modal-body');
      const taskId = $(parent).find('#modalTaskId').html();

      // Insert a task into the collection
      Comments.insert({
        content: text,
        taskId: taskId,
        date: new Date(),
      });

      // Clear form
      $('#commentInput').val("");
    }
  },
});