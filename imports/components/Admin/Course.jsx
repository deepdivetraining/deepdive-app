import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ContentEditable from 'react-contenteditable';
import R from 'ramda';

// Import models
import Courses from '../../models/Courses.js';

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = props;
  }

  // handleChange :: String, Event -> StateChange
  handleChange = (name, e) => {
    this.state.course[name] = e.target.value
  }

  // submitForm :: void -> ?
  submitForm = (e) => {
    e.preventDefault();
    this.saveForm(this.state.course);
  }

  saveForm = (data) => Meteor.call('Courses.save', data);

  // renderInput :: String, Object { styles, extra }
  renderInput = (name, extra) => {
    return <input
            value={this.state.course[name]}
            style={s.input}
            onChange={this.handleChange.bind(this, name)}
          />
  }

  // renderInput :: String, Object { styles, extra }
  renderTextArea = (name, extra) => {
    return <textarea
            value={this.state.course[name]}
            style={s.input}
            onChange={this.handleChange.bind(this, name)}
          />
  }

  // renderInput :: String, Object { styles, extra }
  renderHtmlInput = (name, extra) => {
    return <ContentEditable
            html={this.state.course[name]}
            disabled={false}
            style={s.input}
            onChange={this.handleChange.bind(this, name)}
          />
  }

  render() {
    return (
      <form style={s.base} onSubmit={this.submitForm.bind(this, () => {})}>

        <header>
          <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/blockchainis.jpg" />
        </header>

        <label>Title</label>
        {this.renderInput('title', this.state.course._id)}

        <label>Header image URL</label>
        {this.renderInput('headerImageUrl', this.state.course._id)}

        <fieldset style={s.fieldset}>

          <label>datePublishedStart (jjjj-mm-dd)</label>
          {this.renderInput('datePublishedStart', this.state.course._id)}

          <label>datePublishedEnd (jjjj-mm-dd)</label>
          {this.renderInput('datePublishedEnd', this.state.course._id)}

        </fieldset>

        <fieldset style={s.fieldset}>

          <label>Banner description</label>
          {this.renderInput('bannerDescription', this.state.course._id)}

          <label>Banner button text</label>
          {this.renderTextArea('bannerButtonText', this.state.course._id)}

        </fieldset>

        <fieldset style={s.fieldset}>

          <label>Details text</label>
          {this.renderHtmlInput('detailsText', this.state.course._id)}

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
    padding: '5px',
    display: 'block',
    width: '100%'
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
