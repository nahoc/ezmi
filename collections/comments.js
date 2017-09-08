import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Comments = new Mongo.Collection('Comments');

Comments.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Comments.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

CommentsSchema = new SimpleSchema({
  content: {
    type: String,
    label: 'The content of the comment.',
  },
  taskId: {
    type: String,
    label: 'ID of the task the comment is linked to.',
  },
  date: {
    type: Date,
    label: 'Date the comment was created.',
    optional: true,
  },
});

Comments.attachSchema(CommentsSchema);

export default Comments;
