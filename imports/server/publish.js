import Courses from '/imports/models/Courses.js';
import CourseAttendees from '/imports/models/CourseAttendees.js';

Meteor.publish('Courses.all', function() {
  return Courses.find({});
});

Meteor.publish('Courses.thisOne', function(courseId) {
  return Courses.find({ _id: courseId });
});

Meteor.publish('CourseAttendees.all', function() {
  return CourseAttendees.find({});
});
