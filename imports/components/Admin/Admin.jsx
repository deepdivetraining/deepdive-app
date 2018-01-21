import React, { Component } from 'react';

// Import components
import CourseList from './CourseList.jsx';

export default class Admin extends Component {
 
  render() {
    if(! Meteor.userId()) return <div>Log in</div>;
    return (
      <div style={s.base} className="page-module">
        <div className="page-inner">

          <h2>DeepDive Admin</h2>

          <CourseList />

        </div>
      </div>
    );
  }
}

var s = {
  base: {
  },
}
