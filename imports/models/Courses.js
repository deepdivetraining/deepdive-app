Courses = new Mongo.Collection("Courses")

Courses.publicFields = {
  dateCreated: 1,
  authorId: 0,
  title: 1,
  banner: {
    description: 1,
    buttonText: 1,
    optionalExternalUrl: 1
  },
  dates: 1
}

module.exports = Courses

/** Example Course object:

    {
        "_id" : ObjectId("5a46a0428c23b80d15e472c8"),
        "dateCreated" : "",
        "datePublishedStart" : "2017-12-01",
        "datePublishedEnd" : "2017-01-05",
        "authorId" : "bartwr",
        "title" : "Brain picking about blockchain",
        "banner" : {
            "description" : "During this event we will create, share and build a qualified idea with a very high potential for success. Free event.",
            "buttonText" : "Sign up for December 19th",
            "optionalExternalUrl" : "https://www.meetup.com/SIFUtrecht/events/245829036/"
        },
        "dates" : {
            "Brain picking about blockchain" : {
                "title" : "Brain picking about blockchain",
                "dateStart" : "2017-12-19 16:30",
                "dateEnd" : "2017-12-19 18:30"
            }
        }
    }

*/