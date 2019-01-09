import React, { Component } from 'react';
import Form from "./form.js";
import Diet from "./diet.js";
import Countries from "./countries.js"
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <>
      <Form />
      <Countries />
      <Diet />
      </>
    )
  }
}

export default App;
