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
      <article style={s.base}>

        <header>
        <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/blockchainis.jpg" />
        </header>

        <h3>
          {this.props.course.title}
        </h3>

        <p>
          {this.props.course.banner.description}
        </p>

        <a href={buttonUrl} target="_blank" className="btn">
          {this.props.course.banner.buttonText}
        </a>

      </article>
    );
  }
}

var s = {
  base: {
    minHeight: '300px',
    width: '100%',
    margin: '10px 0',
    position: 'relative',
    marginBottom: '30px'
  },
  btn: {
    display: 'block'
  }
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
