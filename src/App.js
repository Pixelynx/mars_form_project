import React, { Component } from 'react';
import Form from "./form.js";
import Diet from "./diet.js";
import Countries from "./countries.js";
import WhyMars from "./why_mars.js";
import Submit from "./submit.js";
import RadioQuestions from "./radioQues.js";
import CheckboxQuestions from "./checkboxQues.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      dietary: "",
      why_mars: "",
      famHist: "",
      famAmont: "",
      famLiving: "",
      edu: "",
      otherEdu: "",
      holdBreath: "",
      marital: "",
      stress: "",
      claustrophobic: ""
    }
  }

  render() {
    return(
      <>
      <Form />
      <Countries />
      <Diet />
      <WhyMars />
      <RadioQuestions />
      <CheckboxQuestions />
      <Submit />
      </>
    )
  }
}

export default App;
