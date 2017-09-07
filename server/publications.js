import { Meteor } from 'meteor/meteor';
import Tasks from '../collections/tasks';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function () {
    return Tasks.find();
  });
}