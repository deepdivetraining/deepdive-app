import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

getUpcomingCourses = () => Meteor.call('Courses.getUpcoming');

class UpcomingCourses extends Component {

  render() {
    console.log('UpcomingCourses render')
    return (
      <div style={s.base}>

        <article className="block">
          <header></header>
          <strong>BRAIN PICKING ABOUT BLOCKCHAIN</strong>
          <p>During this event we will create, share and build a qualified idea with a very high potential for success. Free event.</p>
          <p><a className="btn" href="https://www.meetup.com/SIFUtrecht/events/245829036/" target="_blank">Sign up for December 19th</a></p>
        </article>

      </div>
    );
  }
}

var s = {
  base: {
  },
}

export default withTracker((props) => {
  return {

  }
}, UpcomingCourses);
