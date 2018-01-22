import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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

Meteor.methods({
  sendEmail: function (mail) {
    check([mail.to, mail.from, mail.subject], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send(mail);
  },
  doFullSync: function () {
    SyncUtils.fullSync();
  }
});

Accounts.onCreateUser(function (options, user) {
  console.log('createUser', options, user);

  // Meteor.call('sendEmail', 
    // options.email

  return user;
});
