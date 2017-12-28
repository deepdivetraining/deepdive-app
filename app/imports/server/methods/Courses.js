import Courses from '/imports/models/Courses.js'

Meteor.methods({

  'Courses.getUpcoming'(limit) {
    if(! limit) limit = 3
    return Courses.find({'dateStart': { $gte: new Date() } }, {sort: {dateStart: 1}, limit: limit});
  }

})
