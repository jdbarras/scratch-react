import React from 'react';
import withConfig from './config/withConfig';
import { connect } from 'react-redux';

const App = props => (
  <div className="App">
    <h1> Hello World! {props.testString} </h1>
  </div>
);

const mapStateToProps = state => ({
  testString: state.test.testString
});

export default withConfig(connect(mapStateToProps, null)(App));
