import React, { Component } from 'react';
import Form from "./form.js";
import Diet from "./diet.js";
import Countries from "./countries.js";
import WhyMars from "./why_mars.js";
import Submit from "./submit.js";
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
      <WhyMars />
      <Submit />
      </>
    )
  }
}

export default App;
