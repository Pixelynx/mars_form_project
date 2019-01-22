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
    for(let i = 0; i <= mo.length; i++) {
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

          <div className="name">
            <label htmlFor="name">Name: </label>
            <br />
            <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
          </div>

          

          <div className="dob">
            <label>DOB: </label>
            <br />
            <select className="day"
                    name="day"
                    value={this.state.day}
                    onChange={this.handleChange}
                    >
                    <option value=""></option>
              {days}
            </select>
            <select
                    className="month"
                    name="month"
                    value={this.state.month}
                    onChange={this.handleChange}
                    >
                    <option value=""></option>
              {months}
            </select>
            <select
                    className="year"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleChange}
                    >
                    <option value=""></option>
              {years}
            </select>
          </div>

          

        </form>
      </div>
    )
  }

}

export default Form;
