import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  years = () => {
    let year = document.querySelector('.year');
    for (let i = 0; i <= 1990; i++) {
      let option = document.createElement('option');
      option.innerText = i;
      year.appendChild(option)
    }
  }

  render() {
    console.log(this.state);
    return(
      <div className="register">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <label htmlFor="dob">DOB: </label>
          <select className="day" type="day" name="day">
            <option name="" value=""></option>
          </select>
          <select className="month" type="month" name="month">
            <option name="" value=""></option>
          </select>
          <select className="year" type="year" name="year">
            <option name="" value=""></option>
          </select>
        </form>
      </div>
    )
  }

}

export default Form;
