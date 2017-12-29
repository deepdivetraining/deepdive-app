import React, { Component } from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

/**
 *  App
 */
import App from '/imports/App.jsx';
import Landing from '/imports/components/Landing.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      content: <Landing />
    })
  }
});
