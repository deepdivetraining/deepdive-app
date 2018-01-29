import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Radium from 'radium';

import MailChimpSubscribe from './MailChimpSubscribe.jsx';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
  loginPath: '/login',
  signUpPath: '/signup',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/')
});

class UserBar extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Header extends Component {

  render() {
    {/*let renderthis = Meteor.userId() ? <UserBar /> : <Accounts.ui.LoginForm /> */}
    let renderthis = Meteor.userId() ? <UserBar /> : ''
    return (
      <div style={s.base} className="page-module">
        <div className="page-inner">

          {renderthis}

          <h1 style={s.title}>
            <a href="/" style={s.titleLink}>Deep Dive blockchain trainingen</a>
          </h1>

          <p>
            Blockchain is changing society. We give <b>Deep Dive blockchain workshops</b>.
          </p>

          <MailChimpSubscribe />

        </div>
      </div>
    );
  }
}

var s = {
  base: {
    background: '#000',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '28px'
  },
  title: {
    marginTop: 0
  },
  titleLink: {
    color: '#fff',
    'hover': {
      textDecoration: 'underline'
    }
  },
}

export default Radium(Header);
