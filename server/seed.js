import {
  Meteor
} from 'meteor/meteor';
import Tasks from '../collections/tasks';

// Patterns
const tasks = [{
    content: 'Chasser les hommes',
    parent: 'backlog',
  },
  {
    content: 'Manger',
    parent: 'todo',
  },
  {
    content: 'Dormir',
    parent: 'inProgress',
  },
  {
    content: 'Travailler',
    parent: 'meetings',
  },
  {
    content: 'Retirer mes bas',
    parent: 'blocked',
  },
  {
    content: 'Danser comme une débile',
    parent: 'done',
  },
];

tasks.forEach(({
  content,
  parent,
}) => {
  const taskExists = Tasks.findOne({
    content
  });
  if (!taskExists) Tasks.insert({
    content,
    parent,
  });
});