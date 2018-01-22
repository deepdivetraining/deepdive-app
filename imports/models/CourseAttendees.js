CourseAttendees = new Mongo.Collection("CourseAttendees")

CourseAttendees.publicFields = {
  courseId: 1
}

module.exports = CourseAttendees
