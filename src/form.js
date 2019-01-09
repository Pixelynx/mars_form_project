import React, { Component } from "react";
import countries from "./countries_list.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  months = () => {
    let arr = [];
    let mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    for(let i = 0; i <= 11; i++) {
      arr.push(<option>{mo[i]}</option>)
    }
    return arr;
  }

  days = () => {
    let arr = [];
    for(let i = 1; i <= 31; i++) {
      arr.push(<option>{i}</option>)
    }
    return arr;
  }



  years = () => {
    let arr = [];
    for (let i = 2019; i >= 1990; i--) {
      arr.push(<option>{i}</option>)
    }
    return arr;
  }


  render() {
    console.log(this.state);
    let years = this.years();
    let days = this.days();
    let months = this.months();
    return(
      <div className="register">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

          <br />

          <label htmlFor="dob">DOB: </label>
          <select className="day" name="day">
            {days}
          </select>
          <select className="month" name="month">
            {months}
          </select>
          <select className="year" name="year">
            {years}
          </select>

          <br />

        </form>
      </div>
    )
  }

}

export default Form;
