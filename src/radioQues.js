import React, { Component } from "react";

class RadioQuestions extends Component {
  constructor() {
    super();
    this.state = {
      holdBreath: "",
      marital: "",
      stress: "",
      claustrophobic: ""
    }
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
      const { holdBreath, marital, stress, claustrophobic } = this.state;
      console.log(this.state)
      return(
        <>
          <div onChange={this.handleChange}>
            <label htmlFor="radioButtons">
              Can you hold your breath underwater longer than one minute?
            </label>
            <br/>

            <input
                  type="radio"
                  name="radioButtons"
                  value="yes"
                  selected={holdBreath === "yes"}
                  // onChange={this.handleChange}
                  />
                  Yes
            <br/>

            <input
                  type="radio"
                  name="radioButtons"
                  value="no"
                  selected={holdBreath === "no"}
                  // onChange={this.handleChange}
                  />
                  No

            <br/>
            <input
                  type="radio"
                  name="radioButtons"
                  value="dunno"
                  selected={holdBreath === "dunno"}
                  // onChange={this.handleChange}
                  />
                  Dunno

            <br/>
            <input
                  type="radio"
                  name="radioButtons"
                  value="imafish"
                  selected={holdBreath === "imafish"}
                  // onChange={this.handleChange}
                  />
                  I be a fish

              <br/>
              <br/>

              <label htmlFor="radioButtons">What is your marital status?</label>
              <br/>

              <input
                    type="radio"
                    name="radioButtons"
                    value="single"
                    selected={marital === "single"}
              />
              Single

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="married"
                    selected={marital === "married"}
              />
              Married

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="divorced"
                    selected={marital === "divorced"}
              />
              Divorced

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="widowed"
                    selected={marital === "widowed"}
              />
              Widowed

              <br/>
              <br/>

              <label htmlFor="radioButtons">
                When you are in a stressful or difficult situation, how do you most frequently react?
              </label>

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="determination"
                    selected={stress === "determination"}
              />
              I continue to confront the situation.

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="defeat"
                    selected={stress === "defeat"}
              />
              I stop confronting the situation.

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="anger"
                    selected={stress === "anger"}
              />
              I become upset at the situation.

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="resourcefulness"
                    selected={stress === "resourcefulness"}
              />
              I seek help to confront the situation.

              <br/>
              <br/>

              <label htmlFor="radioButtons">Are you claustrophobic?</label>
              <br/>

              <input
                    type="radio"
                    name="radioButtons"
                    value="yes"
                    selected={claustrophobic === "yes"}
              />
              Yes

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="no"
                    selected={claustrophobic === "no"}
              />
              No

              <br/>
              <input
                    type="radio"
                    name="radioButtons"
                    value="dunno"
                    selected={claustrophobic === "dunno"}
              />
              Dunno

              <br/>

          </div>
        </>
      )
    }

}

export default RadioQuestions;
