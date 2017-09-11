import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

// helpers
Template.taskDescription.helpers({
  getClickedTask: function () {
    let results = Session.get('clickedTaskArray');
    return results[0];
  },
});

// events
Template.taskDescription.events({
  'click #addTaskDescription' (event) {
    // Prevent default browser form submit
    event.preventDefault();
    
    // add a loading animation to button
    $(event.target).addClass('is-loading');

    // Get value from form element
    const target = event.target;
    const text = $('#taskDescriptionInput').val();
    let clickedTaskId = Session.get('clickedTaskArray')[0]._id;

    // Update a task's description
    Tasks.update({
      _id: clickedTaskId,
    }, {
      $set: {
        description: text,
      }
    });

    $(event.target).removeClass('is-loading');
    $(event.target).addClass('is-success');
    $(event.target).html("Description enregistrée!");
  }
});