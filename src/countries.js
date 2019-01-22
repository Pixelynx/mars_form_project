import React, { Component } from "react";
import { countries } from "./countries_list";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      country: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderCountry = () => {

    let results = countries.map(country => {
      return <option>{country.name}</option>
    })
    return results
  }

  render() {
    console.log(this.state)
    let country = this.renderCountry();
    return(
      <>
        <div>
          <select name="country" value={this.state.country} onChange={this.handleChange}>
            {country}
          </select>
        </div>
      </>
    )
  }
}

export default Countries;
