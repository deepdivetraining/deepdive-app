import React, { Component } from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { T9n } from 'meteor/softwarerero:accounts-t9n';

/**
 *  App
 */
import App from '/imports/App.jsx';
import Landing from '/imports/components/Landing.jsx';
import Admin from '/imports/components/Admin/Admin.jsx';
import CourseDetails from '/imports/components/CourseDetails.jsx';

T9n.setLanguage('en');

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      content: <Landing />
    })
  }
});

/* Account */

FlowRouter.route("/verify/:token", {
  action(params) {
    mount(App, {
      content: <Accounts.ui.LoginForm {...{
        signUpPath: '/signup'
      }} />
    });
  }
});
FlowRouter.route("/login", {
  action(params) {
    mount(App, {
      content: <Accounts.ui.LoginForm {...{
        signUpPath: '/signup'
      }} />
    });
  }
});
FlowRouter.route("/signup", {
  action(params) {
    mount(App, {
      content: <Accounts.ui.LoginForm {...{
        formState: STATES.SIGN_UP,
        loginPath: '/login'
      }} />
    });
  }
});

/* Courses */

FlowRouter.route('/c/:courseId', {
  name: 'course',
  action(props) {
    mount(App, {
      content: <CourseDetails courseId={props.courseId} />
    })
  }
});

/* Admin */

FlowRouter.route("/admin", {
  name: 'admin',
  action(params) {
    mount(App, {
      content: <Admin />
    })
  }
});

/* Course */

FlowRouter.route("/eth-101", {
  name: 'eth-101',
  action(params) {
    mount(App, {
      content: (<a class="btn" href="https://docs.google.com/document/d/1af0TdlmDgwPp9Sf7-6rcB8WCfkLWxvFjJrV43pVPvIo/edit?usp=sharing">Go to course</a>)
    })
  }
});
