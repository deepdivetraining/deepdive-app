import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../models/Courses.js';

class CourseDetails extends Component {

  render() {

    buttonUrl = 'mailto:info@deepdive.training?subject=Signup: ' + this.props.course.title;

    if ( ! this.props.course.title )
      return (<div>Loading course</div>)

    return (
      <div style={s.base}>
        <div className="page-inner">

          <header>
            <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/blockchainis.jpg" />
          </header>

          <h3>
            {this.props.course.title}
          </h3>

          <p>
            {this.props.course.detailsText}
          </p>

          <a href={buttonUrl} className="btn" style={s.btn}>
            Sign up now
          </a>

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
  btn: {
    display: 'block',
    position: 'absolute',
    bottom: 0
  }
}

CourseDetails.defaultProps = {
  course: []
}

export default withTracker((props) => {

  Meteor.subscribe('Courses.thisOne', props.courseId);

  return {
    course: Courses.findOne(props.courseId)
  }

})(CourseDetails);
