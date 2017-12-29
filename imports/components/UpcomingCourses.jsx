import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../models/Courses.js';

// Import componets
import Course from './Course';

class UpcomingCourses extends Component {

  renderCourse(course) {
    return <Course key={course._id} course={course} />
  }

  render() {

    return (
      <div className="grid" style={s.base}>
        {R.map(this.renderCourse, this.props.upcomingCourses)}
      </div>
    );
  }
}

var s = {
  base: {
  },
}

Courses.defaultProps = {
  upcomingCourses: {}
}

export default withTracker((props) => {
  Meteor.subscribe('Courses.all');

  return {
    upcomingCourses: Courses.find({
      'datePublishedStart': { $lte: new Date() },
      'datePublishedEnd': { $gte: new Date() }
    }, {sort: {dateStart: 1}}).fetch()
  }
})(UpcomingCourses);
