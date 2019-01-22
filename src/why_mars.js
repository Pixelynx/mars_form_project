import React, { Component } from "react";
import "./App.css";

class WhyMars extends Component {
  constructor() {
    super();
    this.state = {
      why_mars: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <>
        <div>
          <label htmlFor="why_mars">Why Do You Want to Be a Mars Explorer?</label>
          <br />
          <input
                type="text"
                id="why_mars"
                name="why_mars"
                // placeholder="Detail your answer here..."
                value={this.state.why_mars}
                onChange={this.handleChange}
                />
        </div>
      </>
    )
  }
}

export default WhyMars;
