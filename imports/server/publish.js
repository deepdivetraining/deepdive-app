import Courses from '/imports/models/Courses.js';

Meteor.publish('Courses.all', function() {
  return Courses.find({});
});

Meteor.publish('Courses.thisOne', function(courseId) {
  return Courses.find({ _id: courseId });
});
