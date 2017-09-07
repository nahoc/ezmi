import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Tasks = new Mongo.Collection('Tasks');

Tasks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Tasks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

TasksSchema = new SimpleSchema({
  content: {
    type: String,
    label: 'The content of the task.',
  },
  parent: {
    type: String,
    label: 'The parent of the task.',
  },
});

Tasks.attachSchema(TasksSchema);

export default Tasks;
