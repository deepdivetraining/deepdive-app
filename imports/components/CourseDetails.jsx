import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { T9n } from 'meteor/softwarerero:accounts-t9n';

T9n.setLanguage('en');

// Import models
import Courses from '../models/Courses.js';

class CourseDetails extends Component {

  constructor(props) {
    super(props);
  }

  // handleChange :: String, Event -> StateChange
  handleChange = (name, e) => {
    this.state[name] = e.target.value
  }

  // submitForm :: void -> ?
  submitForm = (e) => {
    e.preventDefault();
    this.state.courseId = this.props.course.courseId;
    Meteor.call('Courses.signUp', this.state);
  }

  renderSignIn() {
    return (
      <div>
          <Accounts.ui.LoginForm {...{
          formState: STATES.SIGN_UP,
          loginPath: '/c/' + this.props.course._id
        }} />
      </div>
    );
  }

  renderSignUp() {
    return (
      <div>

        <p>
          You are logged in as {this.props.user.emails[0].address}
        </p>

        <p>
          Sign up for this course by clicking "Sign up" below.
        </p>

        <p>
          If you like, you can leave an a note to the organisers below.
        </p>

        <textarea name="notes" onChange={this.handleChange.bind(this)} style={s.notes}></textarea>

        <button className="btn" style={s.btn}>
          Sign up
        </button>

      </div>
    );
  }

  render() {

    buttonUrl = 'mailto:info@deepdive.training?subject=Signup: ' + this.props.course.title;

    if ( ! this.props.course.title )
      return (<div>Loading course</div>)

    console.log(this.props.user)

    return (
      <div style={s.base}>
        <div className="page-inner page-module" style={{paddingTop: '20px'}}>

          <header>
            <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/blockchainis.jpg" />
          </header>

          <h2>
            {this.props.course.title}
          </h2>

          <div dangerouslySetInnerHTML={{__html: this.props.course.detailsText}} />

          <div style={s.box}>
  
            <h2>Sign up now</h2>

            {this.props.user && this.props.user._id ? this.renderSignUp() : this.renderSignIn()}

          </div>

        </div>
      </div>
    );
  }
}

var s = {
  base: {
    minHeight: '300px',
    width: '100%',
    margin: '10px 0',
    position: 'relative',
    marginBottom: '30px',
    paddingBottom: '50px'
  },
  box: {
    marginTop: '10px',
    background: '#eee',
    padding: '5px 10px'
  },
  btn: {
    display: 'block',
  },
  notes: {
    width: '300px',
    maxWidth: '100%',
    height: '100px'
  }
}

CourseDetails.defaultProps = {
  course: []
}

export default withTracker((props) => {

  Meteor.subscribe('Courses.thisOne', props.courseId);

  return {
    course: Courses.findOne(props.courseId),
    user: Meteor.user()
  }

})(CourseDetails);
