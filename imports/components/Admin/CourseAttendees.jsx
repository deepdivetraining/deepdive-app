import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../../models/Courses.js';
import CourseAttendeesModel from '../../models/CourseAttendees.js';

var i = 0;

class CourseAttendeeRow extends Component {

  constructor(props) {
    super(props);

    i++;
  }

  getUser(userId) {
    return Meteor.users.findOne(userId);
  }

  getCourse(courseId) {
    return Courses.findOne(courseId);
  }

  render() {
    return (
      <tr>
        <td>{i}</td>
        <td>{this.getCourse(this.props.data.courseId) ? this.getCourse(this.props.data.courseId).title : ''}</td>
        <td>{this.getUser(this.props.data.userId) ? this.getUser(this.props.data.userId).emails[0].address : ''}</td>
        <td><b>{this.props.data.notes}</b></td>
      </tr>
    );
  }
}

class CourseAttendees extends Component {
  render() {
    return (
      <div style={s.base}>
        <h3>Course attendees</h3>
        <table style={{width: '100%', paddingBottom: '10px', marginBottom: '10px', borderBottom: 'solid #000 1px'}}>
          <tbody>
            <tr>
              <th></th>
              <th>Course</th>
              <th>User</th>
              <th>Notes</th>
            </tr>
            {this.props.allCourseAttendees.length > 0 ? R.map((data) => <CourseAttendeeRow key={data._id} data={data} />, this.props.allCourseAttendees): ''}
          </tbody>
        </table>
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
  Meteor.subscribe('Courses.all');
  Meteor.subscribe('Users.all');

  return {
    users: Meteor.users,
    courses: Courses.find({}).fetch(),
    allCourseAttendees: CourseAttendeesModel.find({}, {sort: {_id: -1}}).fetch()
  }
})(CourseAttendees);
