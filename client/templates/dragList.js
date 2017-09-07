import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.dragList.onCreated(function dragListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.dragList.onRendered(function () {
  dragula([document.querySelector('#backlog'), document.querySelector('#todo'), document.querySelector('#inProgress'), document.querySelector('#meetings'), document.querySelector('#blocked'), document.querySelector('#done')]);
});

Template.dragList.helpers({
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
  }
});

Template.dragList.events({
  'click .deleteTask' (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = $(target).parent().children('.content').html();
    const taskToDelete = Tasks.findOne({content: text}, {});

    // Insert a task into the collection
    Tasks.remove( { _id: taskToDelete._id } )
  },
});