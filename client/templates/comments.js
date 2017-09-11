import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.comments.helpers({
  getClickedTaskComments: function () {
    let results = Session.get('clickedTaskCommentsArray');
    console.log("2");
    console.log(results);
    return results;
  },
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

      // refresh
      Session.set('clickedTaskCommentsArray', Comments.find({
        taskId: taskId,
      }, {
        sort: {
          'date': -1
        }
      }, ).fetch());

      // Clear form
      $('#commentInput').val("");
    }
  },
  'click .delete-comment' (event) {
    const parent = $(event.target).closest('.anti-modal-body');
    const taskId = $(parent).find('#modalTaskId').html();

    Comments.remove({
      _id: this._id,
    });

    // refresh
    Session.set('clickedTaskCommentsArray', Comments.find({
      taskId: taskId,
    }, {
      sort: {
        'date': -1
      }
    }, ).fetch());
  },
});