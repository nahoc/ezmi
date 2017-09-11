import {
  Template
} from 'meteor/templating';

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});