import { Meteor } from 'meteor/meteor';

// Import server methods
import '/imports/server/methods/Courses.js';

// Publish what we need
import '/imports/server/publish.js';

Meteor.startup(() => {
  // code to run on server at startup
  Future = Npm.require('fibers/future');

  var username = "postmaster@mg.deepdive.training";
  var password = "7d8a2e1969d4928d24b87290eee332ee";
  var server = "smtp.mailgun.org";
  var port = "587";

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@' + encodeURIComponent(server) + ':' + port;  
});
