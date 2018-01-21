import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import UpcomingCourses from './UpcomingCourses';

export default class Landing extends Component {
 
  render() {
    return (
      <div style={s.base} className="page-module">
        <div className="page-inner">

          <h2>Upcoming courses</h2>

          <UpcomingCourses />

          <h2>Trainers</h2>

          <div className="grid">

            <article>
              <h3>
                Bart Roorda
              </h3>
              <p>
                As a software developer, I'm intrigued everyday by the speed of developments in the blockchain space.
              </p>
              <p>
                <a href="https://www.bartroorda.nl" target="_blank">bartroorda.nl</a>
              </p>
            </article>

            <article>
              <h3>
                Marc Buma
              </h3>
              <p>
                Industrial, IOT and blockchain software development & consultant.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/mosbuma/" target="_blank">linkedin</a>
              </p>
            </article>

          </div>

        </div>
      </div>
    );
  }
}

var s = {
  base: {
  },
}
