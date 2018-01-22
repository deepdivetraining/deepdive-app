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
    return (
      <div style={s.base}>
        {this.renderCourse({ _id: 'new', title: 'New course' })}
        {this.props.allCourses.length > 0 ? R.map(this.renderCourse, this.props.allCourses): ''}
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
  allCourses: []
}

export default withTracker((props) => {
  Meteor.subscribe('Courses.all');

  return {
    allCourses: Courses.find({}, {sort: {dateStart: 1}}).fetch()
  }
})(CourseList);
