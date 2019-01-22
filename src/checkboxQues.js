import React, { Component } from "react";

class CheckboxQuestions extends Component {
  constructor() {
    super();
    this.state = {
      famHist: "",
      famAmont: "",
      famLiving: "",
      edu: "",
      otherEdu: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { famHist, famAmont, famLiving, edu, otherEdu } = this.state;
    console.log(this.state)

    return(
      <>
        <div onChange={this.handleChange}>
          <label htmlFor="checkbox">
            Does your family have a history of (check all that apply):
          </label>

          <br/>
          <input
                type="checkbox"
                value="cancer"
                name="famHist"
                id="checkbox"
                // checked={famHist === "cancer"}
          />
          Cancer
          <br/>
          <input
                type="checkbox"
                value="heart_disease"
                name="famHist"
                id="checkbox"
                // checked={famHist === "cancer"}
          />
          Heart Disease
          <br/>
          <input
                type="checkbox"
                value="diabetes"
                name="famHist"
                id="checkbox"
                // checked={famHist === "cancer"}
          />
          Diabeetus


        </div>
      </>
    )
  }
}

export default CheckboxQuestions;
