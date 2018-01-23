import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../../models/Courses.js';
import CourseAttendeesModel from '../../models/CourseAttendees.js';

class CourseAttendeeRow extends Component {

  getUser(userId) {
    return Meteor.users.findOne(userId);
  }

  getCourse(courseId) {
    return Courses.findOne(courseId);
  }

  render() {
    return (
      <table style={{width: '100%', paddingBottom: '10px', marginBottom: '10px', borderBottom: 'solid #000 1px'}}>
        <tbody>
          <tr>
            <th width="150">Course</th>
            <td>{this.getCourse(this.props.data.courseId) ? this.getCourse(this.props.data.courseId).title : ''}</td>
          </tr>
          <tr>
            <th>User</th>
            <td>{this.getUser(this.props.data.userId) ? this.getUser(this.props.data.userId).emails[0].address : ''}</td>
          </tr>
          <tr>
            <th>Notes</th>
            <td>{this.props.data.notes}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class CourseAttendees extends Component {
  render() {
    return (
      <div style={s.base}>
        <h3>Course attendees</h3>
        {this.props.allCourseAttendees.length > 0 ? R.map((data) => <CourseAttendeeRow key={data._id} data={data} />, this.props.allCourseAttendees): ''}
      </div>
    );
  }
}

var s = {
  base: {
  },
}

CourseAttendees.defaultProps = {
  allCourseAttendees: []
}

export default withTracker((props) => {
  Meteor.subscribe('CourseAttendees.all');

  return {
    allCourseAttendees: CourseAttendeesModel.find({}, {sort: {_id: -1}}).fetch()
  }
})(CourseAttendees);
