import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ContentEditable from 'react-contenteditable';
import R from 'ramda';

// Import models
import Courses from '../../models/Courses.js';

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  // handleChange :: String, Event -> StateChange
  handleChange = (name, e) => {
    this.state.course[name] = e.target.value
    this.forceUpdate()
  }

  // submitForm :: void -> ?
  submitForm = (e) => {
    e.preventDefault();
    this.saveForm(this.state);
  }

  saveForm = (data) => Meteor.call('Courses.save', data.course);

  // renderInput :: String, Object { styles, extra }
  renderInput = (name, extra) => {
    return <ContentEditable
            text={this.state[name]}
            disabled={false}
            style={s.input}
            onChange={this.handleChange.bind(this, name)}
          />
  }

  render() {
    console.log('this.state', this.state)
    return (
      <form style={s.base} onSubmit={this.submitForm.bind(this)}>

        <header>
          <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/blockchainis.jpg" />
        </header>

        <label>Header image URL</label>
        {this.renderInput('headerImage.url')}

        <label>Title</label>
        {this.renderInput('title')}

        <fieldset style={s.fieldset}>

          <label>datePublishedStart</label>
          {this.renderInput('datePublishedStart')}

          <label>datePublishedEnd</label>
          {this.renderInput('datePublishedEnd')}

        </fieldset>

        <fieldset style={s.fieldset}>

          <label>Banner description</label>
          {this.renderInput('banner.description')}

          <label>Banner button text</label>
          {this.renderInput('banner.buttonText')}

        </fieldset>

        <fieldset style={s.fieldset}>

          <label>Details text</label>
          {this.renderInput('details.text')}

          <label>Banner button text</label>
          {this.renderInput('banner.buttonText')}

        </fieldset>

        <button type="submit" className="btn" style={s.btn}>
          Save
        </button>

      </form>
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
  fieldset: {
    padding: '10px 10px'
  },
  input: {
    border: 'solid #000 1px',
    marginBottom: '15px',
    padding: '5px'
  },
  btn: {
    display: 'block',
    position: 'absolute',
    bottom: 0
  }
}

Course.defaultProps = {
  course: []
}

export default withTracker((props) => {
  Meteor.subscribe('Courses.all');

  return {
    course: props.course
  }
})(Course);
