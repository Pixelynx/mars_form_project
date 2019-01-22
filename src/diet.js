import React, { Component } from "react";

class Diet extends Component {
  constructor() {
    super();
    this.state = {
      dietary: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { dietary } = this.state;
    console.log(this.state)
    return(
      <>
        <div>
        <br />
            <input type="radio"
                    name="dietary"
                    value="omnivore"
                    selected={dietary === 'omnivore'}
                    onChange={this.handleChange}/>
                    <label htmlFor="omni"> Omnivore </label>
                    <br />

            <input type="radio"
                    name="dietary"
                    value="vegitarian"
                    selected={dietary === 'vegitarian'}
                    onChange={this.handleChange}/>
                    <label htmlFor="veggie"> Vegitarian </label>
                    <br />

            <input type="radio"
                    name="dietary"
                    value="vegan"
                    selected={dietary === 'vegan'}
                    onChange={this.handleChange}/>
                    <label htmlFor="vegan"> Vegan </label>

          <br />
        </div>
      </>
    )
  }
}

export default Diet;
