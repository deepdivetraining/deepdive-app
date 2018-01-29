import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';
import moment from 'moment';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { T9n } from 'meteor/softwarerero:accounts-t9n';

T9n.setLanguage('en');

// Import models
import Courses from '../models/Courses.js';

class CourseDetails extends Component {

  constructor(props) {
    super(props);

    this.specialCode = 'DEEPDIVE-SIF';
    this.state = {}
  }

  // handleChange :: String, Event -> StateChange
  handleChange = (name, e) => {
    this.state[name] = e.target.value
    this.forceUpdate();
  }

  // submitForm :: void -> ?
  submitForm = (e) => {
    e.preventDefault();

    if( this.state.code.toUpperCase() != this.specialCode ) {
      document.location = 'https://useplink.com/payment/Ww2sjrw9EtWhMApSr2vG';
      return;
    }

    this.state.courseId = this.props.course._id;
    Meteor.call('Courses.signUp', this.state, this.signUpWasSuccesful.bind(this));
  }

  signUpWasSuccesful = () => {

    Meteor.call('sendEmail', {
      to: this.props.user.emails[0].address,
      from: 'DeepDive.training <info@deepdive.training>',
      subject: 'Your DeepDive.training course: ' + this.props.course.title,
      html: '<p>Thank you for signing up for <b>' + this.props.course.title + '</b>!</p>' +
            '<p>For this course you only need a laptop.</p>' +
            '<p>We look forward to see you at ' + moment(this.props.course.dateTimeStart).format('YYYY-MM-DD HH:mm') + '.</p>' +
            '<p>Until then,</p>' +
            '<p><a href="https://www.deepdive.training"><b>DeepDive.training</b></a><br /><a href="mailto:info@deepdive.training">info@deepdive.training</a></p>'
    });

    alert('An email confirmation has been sent.')

    document.location = 'https://giphy.com/gifs/adventure-time-cartoons-confetti-9sVS967nejlqU/fullscreen';
    //https://giphy.com/gifs/dog-japan-clapping-3ov9jV3qoiaGRPBrQk/fullscreen
    // https://giphy.com/gifs/love-cute-l49JCSwMXyxHnYJws/fullscreen
    // https://giphy.com/gifs/applause-followers-clap-11uArCoB4fkRcQ/fullscreen
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
      <form onSubmit={this.submitForm.bind(this)}>

        <label style={s.label}>
          Course date/time
        </label>
        {moment(this.props.course.dateTimeStart).format('YYYY-MM-DD HH:mm')} - 
        &nbsp;{moment(this.props.course.dateTimeEnd).format('HH:mm')}

        <label style={s.label}>
          Course price
        </label>

        &euro; {this.state.code && this.state.code.toUpperCase() == this.specialCode ? '0' : '400'} VAT included

        <label style={s.label}>
          Your email address
        </label>

        {this.props.user.emails[0].address}
        &nbsp;(<a style={{cursor: 'pointer'}} onClick={Meteor.logout}>logout</a>)

        <label style={s.label}>
          Do you have a invitation? Fill in your code:
        </label>

        <input placeholder="Your invitation code (optional)" name="code" onChange={this.handleChange.bind(this, 'code')} style={Object.assign({}, s.input, this.state.code && this.state.code.toUpperCase() == this.specialCode && {borderColor: '#0f0'})} />

        <label style={s.label}>
          If you like, you can leave a note to the organisers below.
        </label>

        <textarea placeholder="Note (optional)" name="notes" onChange={this.handleChange.bind(this, 'notes')} style={s.notes}></textarea>

        <button type="submit" className="btn" style={s.btn}>
          Sign up for this course
        </button>

      </form>
    );
  }

  renderCourseDoc() {
    return (
      <div>
        <a href="https://docs.google.com/document/d/1af0TdlmDgwPp9Sf7-6rcB8WCfkLWxvFjJrV43pVPvIo/edit?usp=sharing" target="_blank" className="btn" style={s.btn}>
          View the <i>Starting Ethereum development</i> course
        </a>
      </div>
    )
  }

  render() {

    buttonUrl = 'mailto:info@deepdive.training?subject=Signup: ' + this.props.course.title;

    if ( ! this.props.course.title )
      return (<div>Loading course</div>)

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
  input: {
    width: '300px',
    maxWidth: '100%',
    padding: '5px'
  },
  notes: {
    width: '300px',
    maxWidth: '100%',
    height: '100px',
    padding: '5px',
    font: '400 13.3333px Arial'
  },
  label: {
    display: 'block',
    fontSize: '13px',
    marginTop: '10px'
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
