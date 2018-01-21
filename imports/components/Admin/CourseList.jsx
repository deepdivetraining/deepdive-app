import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../../models/Courses.js';

// Import componets
import Course from './Course';

class CourseList extends Component {

  renderCourse(course) {
    return <Course key={course._id} course={course} />
  }

  render() {
    console.log(this.props)
        // {this.props.upcomingCourses.length > 0 ? R.map(this.renderCourse, this.props.upcomingCourses): ''}
    return (
      <div style={s.base}>
        {this.renderCourse({ _id: 'new', title: 'New course' })}
      </div>
    );
  }
}

var s = {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridTemplateRows: 'auto',
    gridGap: '15px 15px'
  },
}

Courses.defaultProps = {
  upcomingCourses: []
}

export default withTracker((props) => {
  Meteor.subscribe('Courses.all');

  return {
    upcomingCourses: Courses.find({}, {sort: {dateStart: 1}}).fetch()
  }
})(CourseList);
