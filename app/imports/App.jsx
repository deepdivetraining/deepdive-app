import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {

  constructor() {
    super();
  }
 
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}
