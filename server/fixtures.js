// Import models
import Courses from '../imports/models/Courses.js';

// Count number of courses
numberOfCourses = Courses.find({}).count({})

// ... => {} whoop whoop
