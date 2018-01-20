import { Meteor } from 'meteor/meteor';

// Import server methods
import '/imports/server/methods/Courses.js';

// Publish what we need
import '/imports/server/publish.js';

Meteor.startup(() => {
  // code to run on server at startup
});
