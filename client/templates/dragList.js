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
    return Tasks.find({
      parent: "backlog",
    });
  },
  todo: function () {
    return Tasks.find({
      parent: "todo",
    });
  },
  inProgress: function () {
    return Tasks.find({
      parent: "inProgress",
    });
  },
  meetings: function () {
    return Tasks.find({
      parent: "meetings",
    });
  },
  blocked: function () {
    return Tasks.find({
      parent: "blocked",
    });
  },
  done: function () {
    return Tasks.find({
      parent: "done",
    });
  }
});