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

/* Admin */

FlowRouter.route("/admin", {
  action(params) {
    mount(App, {
      content: <Admin />
    })
  }
});
