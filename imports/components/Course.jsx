import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../models/Courses.js';

class Course extends Component {

  render() {
    buttonUrl = this.props.course.banner.optionalExternalUrl
      ? this.props.course.banner.optionalExternalUrl
      : 'mailto:info@deepdive.training?subject=Signup: '+this.props.course.title;

    return (
      <div style={s.base}>

        <article className="block">
          <header></header>
          <strong>{this.props.course.title}</strong>
          <p>{this.props.course.banner.description}</p>
          <p>
            <a className="btn" href={buttonUrl} target="_blank">
              {this.props.course.banner.buttonText}
            </a>
          </p>
        </article>

      </div>
    );
  }
}

var s = {
  base: {
  },
}

Course.defaultProps = {
  course: {}
}

export default withTracker((props) => {
  Meteor.subscribe('Courses.all');

  return {
    course: props.course
  }
})(Course);
