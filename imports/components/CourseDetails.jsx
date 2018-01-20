import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import R from 'ramda';

// Import models
import Courses from '../models/Courses.js';

class CourseDetails extends Component {

  render() {
    console.log(this.props)

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
            {this.props.course.details ? this.props.course.details.text : ''}
          </p>

          <a className="btn" style={s.btn}>
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

  var objectId = new Meteor.Collection.ObjectID(props.courseId);

  Meteor.subscribe('Courses.thisOne', objectId);

  return {
    course: Courses.findOne(objectId)
  }

})(CourseDetails);
