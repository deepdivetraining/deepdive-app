import React, { Component } from 'react';

class MailChimpSubscribe extends Component {

  render() {
    return (
      <form action="https://training.us17.list-manage.com/subscribe/post?u=0463dd05b80d6019994de2b17&amp;id=797ad7df86" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <input style={s.input} placeholder="Your email address" type="email" name="EMAIL" className="email" id="mce-EMAIL" required />
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
          <input type="text" name="b_0463dd05b80d6019994de2b17_797ad7df86" tabIndex="-1" value="" />
        </div>
        <div className="clear">
          <input type="submit" style={s.btn} value="Subscribe to the newsletter" name="subscribe" id="mc-embedded-subscribe" className="btn" />
        </div>
      </form>
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

export default MailChimpSubscribe;
