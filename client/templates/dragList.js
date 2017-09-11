import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

CLICKED_TASK = "";

Template.dragList.onCreated(function dragListOnCreated() {
  this.state = new ReactiveDict();
  Session.set('showModal', false);
  Meteor.subscribe('tasks');
  Meteor.subscribe('comments');
});

Template.dragList.onRendered(function () {
  dragula([document.querySelector('#backlog'), document.querySelector('#todo'), document.querySelector('#inProgress'), document.querySelector('#meetings'), document.querySelector('#blocked'), document.querySelector('#done')]).on('drop', function (el) {
    const text = $(el).children('.content').html();
    const parentId = $(el).parent().attr('id');
    const taskToUpdate = Tasks.findOne({
      content: text
    }, {});

    Tasks.update({
      _id: taskToUpdate._id
    }, {
      $set: {
        parent: parentId,
      }
    });
  });
});

Template.dragList.helpers({
  'showModal': function () {
    return Session.get('showModal');
  },
  backlog: function () {
    const query = {
      parent: 'backlog',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  todo: function () {
    const query = {
      parent: 'todo',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  inProgress: function () {
    const query = {
      parent: 'inProgress',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  meetings: function () {
    const query = {
      parent: 'meetings',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  blocked: function () {
    const query = {
      parent: 'blocked',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  done: function () {
    const query = {
      parent: 'done',
    };
    const options = {
      sort: {
        isImportant: -1,
      }
    };
    const results = Tasks.find(query, options).fetch();
    return results;
  },
  isImportantClass: function (arg) {
    // returns an "isImportant" class so we can style it with css
    if (arg) {
      return "isImportant";
    }
  },
});

Template.dragList.events({
  'click .deleteTask' (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Insert a task into the collection
    Tasks.remove({
      _id: taskToDelete._id
    })
  },
  'click .card' (event, template) {
    let clickedTaskId = this._id;
    CLICKED_TASK = this._id;

    Session.set('clickedTaskArray', Tasks.find({
      _id: clickedTaskId,
    }).fetch());
    Session.set('clickedTaskCommentsArray', Comments.find({
      taskId: clickedTaskId,
    }, {
      sort: {
        'date': -1
      }
    }, ).fetch());
    Session.set('showModal', true);
    AntiModals.overlay('modal');
  }
});