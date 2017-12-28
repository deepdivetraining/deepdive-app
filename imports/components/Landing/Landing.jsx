import React, { Component } from 'react';
import UpcomingCourses from '../UpcomingCourses/UpcomingCourses';

export default class Landing extends Component {
 
  render() {
    return (
      <div style={s.base}>

        <h1>Deep Dive blockchain trainingen</h1>

        <p>
          Blockchain is changing society. We give <b>Deep Dive blockchain workshops</b>.
        </p>

        <hr />

        <h2>Upcoming courses</h2>

        <UpcomingCourses />

        <article className="block">
          <header>
          </header>
          <strong>BRAIN PICKING ABOUT BLOCKCHAIN</strong>
          <p>During this event we will create, share and build a qualified idea with a very high potential for success. Free event.</p>
          <p><a className="btn" href="https://www.meetup.com/SIFUtrecht/events/245829036/" target="_blank">Sign up for December 19th</a>
          </p>
        </article>

        <article className="block">
          <header>
          </header>
          <strong>Ethereum Dev Basics: Learn the basics of Ethereum development</strong>
          <p>Learn how to move some ether around, interact with the Ethereum blockchain &amp; deploy a smart contract.</p>
          <p><a className="btn" href="mailto:info@deepdive.training&subject=DeepDive.training | Sign up for ETH DEV 101">I'm interested</a>
          </p>
        </article>

        <article className="block">
          <header>
          </header>
          <strong>Secure your tokens: How to do transactions &amp; store tokens in a safe way</strong>
          <p>You will learn best practices and secure ways of using cryptotokens. Topics are private keys, hardware wallets and safe exchanges.</p>
          <p><a className="btn" href="mailto:info@deepdive.training&subject=DeepDive.training | Sign up for Cryptotokens Security">I'm interested</a>
          </p>
        </article>

        <hr />

        <div id="mc_embed_signup">
          <form action="https://training.us17.list-manage.com/subscribe/post?u=0463dd05b80d6019994de2b17&amp;id=797ad7df86" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <h2 htmlFor="mce-EMAIL">Get notified on new DeepDive courses</h2>
            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_0463dd05b80d6019994de2b17_797ad7df86" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </form>
        </div>

        <hr />

        <p>
          Interested in a course on your location? Call Marc: + 31 (0) six 22 55 55 22,
          or email: <a href="mailto:info@deepdive.training">info@deepdive.training</a>
        </p>

      </div>
    );
  }
}

var s = {
  base: {
  },
}
