import Courses from '/imports/models/Courses.js'

Meteor.methods({
  'Courses.save'(data) {

    if(! Meteor.userId()) return false;

    return Courses.update({
      _id: data._id == 'new' ? null : data._id
    }, {
      datePublishedStart: data.datePublishedStart,
      datePublishedEnd: data.datePublishedEnd,
      authorId: Meteor.userId(),
      title: data.title,
      bannerDescription: data['bannerDescription'],
      bannerButtonText: data['bannerButtonText'],
      detailsText: data['detailsText'],
      headerImageUrl: data['headerImageUrl']
    }, {
      upsert: true
    })
  }
})

