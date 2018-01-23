import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { T9n } from 'meteor/softwarerero:accounts-t9n';

// Import components
import CourseList from './CourseList.jsx';
import CourseAttendees from './CourseAttendees.jsx';

class Admin extends Component {

  constructor(props) {
    super(props);
  }

  renderUnauthorized() {
    return (
      <div>
        <p>
          You are unauthorized to view this page.
        </p>
        <Accounts.ui.LoginForm {...{
          formState: STATES.SIGN_IN,
          loginPath: '/admin'
        }} />
      </div>
    );
  }

  render() {
    if (! Roles.userIsInRole(this.props.user, 'admin'))
      this.renderUnauthorized();

    return (
      <div style={s.base} className="page-module">
        <div className="page-inner">

          <h2>DeepDive Admin</h2>

          <CourseAttendees />

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

export default withTracker((props) => {
  Meteor.subscribe('CourseAttendees.all');

  return {
    user: Meteor.user()
  }
})(Admin);
