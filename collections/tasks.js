import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Tasks = new Mongo.Collection('Tasks');

Tasks.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Tasks.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
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
  description: {
    type: String,
    label: 'The description of the task.',
  },
  date: {
    type: Date,
    label: 'Date the task was created.',
    optional: true,
  },
  isImportant: {
    type: Boolean,
    label: 'If the task is important or not.',
    optional: true,
  },
  colorCode: {
    type: String,
    label: 'The color code of the task.',
    optional: true,
  }
});

Tasks.attachSchema(TasksSchema);

export default Tasks;
