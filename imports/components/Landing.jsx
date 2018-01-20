import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import UpcomingCourses from './UpcomingCourses';

export default class Landing extends Component {
 
  render() {
    return (
      <div style={s.base} className="page-module">

        <h2>Upcoming courses</h2>

        <UpcomingCourses />

        <h2>Trainers</h2>

        <div className="grid">

          <article>
            <strong>Bart Roorda</strong>
            <p>
              As a software developer, I'm intrigued everyday by the speed of developments in the blockchain space.
            </p>
          </article>

          <article>
            <strong>Marc Buma</strong>
            <p>
              Industrial, IOT and blockchain software development & consultant.
            </p>
          </article>

        </div>

        <a hidden onClick={Accounts.logout}>
          Log out
        </a>

      </div>
    );
  }
}

var s = {
  base: {
  },
}
