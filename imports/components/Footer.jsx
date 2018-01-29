import React, { Component } from 'react';

import MailChimpSubscribe from './MailChimpSubscribe.jsx';

class UserBar extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Header extends Component {

  render() {
    return (
      <div style={s.base} className="page-module">
        <div className="page-inner">

          <h1>DeepDive.training</h1>

          <p>
            Koediefstraat 2<br />
            2511 CG Den Haag<br />
            The Netherlands
          </p>

          <p>
            <a href="mailto:info@deepdive.training" style={s.link}>info@deepdive.training</a><br />
            <a href="tel:+31622555522" style={s.link}>+31 6 22 55 55 22</a> (Marc)
          </p>

          <p>
            <a href="https://www.twitter.com/deepdivetrain" style={s.link} target="_blank">twitter.com/deepdivetrain</a><br />
          </p>

          <hr style={s.hr} />

          <MailChimpSubscribe />

        </div>
      </div>
    );
  }
}

var s = {
  base: {
    background: '#000',
    color: '#fff',
    fontSize: '18px',
    lineHeight: '25px'
  },
  link: {
    color: '#fff',
  },
  input: {
    border: 'solid #fff 1px',
    color: '#fff',
    background: '#000',
    fontSize: '18px',
    lineHeight: '25px',
    width: '100%',
    maxWidth: '200px',
    padding: '5px 8px'
  },
  btn: {
    background: '#fff',
    color: '#000',
    width: '100%',
    maxWidth: '200px',
    padding: '5px 8px'
  },
  hr: {
    height: '1px',
    backgroundColor: '#333',
    border: 'none',
    margin: '30px 0'
  }
}

export default Header;
