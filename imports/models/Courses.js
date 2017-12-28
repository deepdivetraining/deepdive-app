Courses = new Mongo.Collection("Courses")

Courses.publicFields = {
  dateCreated: 1, dateStart: 1
}

module.exports = Courses
