import Courses from '/imports/models/Courses.js'

Meteor.methods({
  'Courses.save'(data) {

    if(! Meteor.userId()) return false;

    return Courses.update({
      _id: data == 'new' ? null : data._id
    }, {
      datePublishedStart: data.datePublishedStart,
      datePublishedEnd: data.datePublishedEnd,
      authorId: Meteor.userId(),
      title: data.title,
      banner: {
        description: data['banner.description'],
        buttonText: data['banner.buttonText']
      },
      details: {
        text: data['details.text']
      },
      headerImage: {
        url: data['headerImage.url']
      }
    }, {
      upsert: true
    })
  }
})

