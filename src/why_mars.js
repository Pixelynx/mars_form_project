import React, { Component } from "react";

class WhyMars extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
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
                placeholder="I'll make it bigger later"
                onChange={this.handleChange} />
        </div>
      </>
    )
  }
}

export default WhyMars;
