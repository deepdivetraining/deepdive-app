import React, { Component } from 'react';
import Header from '/imports/components/Header.jsx';
import Footer from '/imports/components/Footer.jsx';

// App component - represents the whole app
export default class App extends Component {

  constructor() {
    super();
  }
 
  render() {
    return (
      <div>
        <Header />
        {this.props.content}
        <Footer />
      </div>
    );
  }
}
