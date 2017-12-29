import Courses from '/imports/models/Courses.js';

Meteor.publish('Courses.all', function() {
  return Courses.find({});
});
