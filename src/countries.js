import React, { Component } from "react";
import countries from "./countries_list";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      country: ""
    }
  }

  renderCountry = () => {

    let results = countries.map(country => {
      return <option>{country.name}</option>
    })
    return results
  }

  render() {
    let country = this.renderCountry();
    return(
      <>
        <div>
          <select name="countries">
            {country}
          </select>
        </div>
      </>
    )
  }
}

export default Countries;
