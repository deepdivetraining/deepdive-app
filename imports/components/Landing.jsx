import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import UpcomingCourses from './UpcomingCourses';

export default class Landing extends Component {
 
  render() {
    return (
      <div style={s.base} className="page-module">

        <h2>Upcoming courses</h2>

        <UpcomingCourses />

        <p>
          Interested in a course on your location? Email <a href="mailto:info@deepdive.training">info@deepdive.training</a>
        </p>

        <p>or sign up for the newsletter and get notified of new courses:</p>

        <div id="mc_embed_signup">
          <form action="https://training.us17.list-manage.com/subscribe/post?u=0463dd05b80d6019994de2b17&amp;id=797ad7df86" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_0463dd05b80d6019994de2b17_797ad7df86" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </form>
        </div>

        <hr />

        <h2>Team</h2>

        <div className="grid">

          <article>
            <header hidden><img src="https://media.licdn.com/media/AAEAAQAAAAAAAAvCAAAAJDA5MDU0ZjJiLTkxYWYtNGM0Ni05ODNmLTQ0YTEzYzVjNzZmNQ.jpg" /></header>
            <strong>Bart Roorda</strong>
            <p></p>
          </article>

          <article>
            <header hidden><img src="https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAsDAAAAJDdlOWM1ZDg2LTQxZDAtNGU2NC05ODI1LTZhZDFiN2U2M2M0OA.jpg" /></header>
            <strong>Marc</strong>
            <p></p>
          </article>

        </div>

        <hr />

        <a onClick={Accounts.logout}>
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
