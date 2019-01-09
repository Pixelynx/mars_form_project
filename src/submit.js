import React, { Component } from "react";

class Submit extends Component {
  constructor() {
    super();
    this.state = {
      formSubmitted: false,
      message: ""
    }
  }

  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    // const { name, day, month, year, dietary, country, text, formSubmitted, message } = this.state;

    // if (name && day && month && year && dietary && country && text) {
    //   formSubmitted = true
    //   console.log('works')
    // }  else {
    //   console.log('nope')
    // }

    return(
      <>
        <button onClick={this.handleClick}>Confirm</button>
      </>
    )
  }
}

export default Submit;
