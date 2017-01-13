import React, { Component } from 'react';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: String(event.target.value).trim().toUpperCase()
    });
  }

  handleSubmit(event) {
    let value = this.state.value;
    if ((this.props.buttonType === "donate") && value.length === 9) {
      alert("You submitted a Code, " + value)
    } else if (this.props.buttonType === "request") {
      alert("You requested a Code")
    }
    event.preventDefault();
  }

  render() {
    const buttonType = this.props.buttonType

    return (
      <form onSubmit={this.handleSubmit} style={{color:"black"}}>
      {buttonType==="donate" ? (
        <div>
          <input id="donate-input" maxLength="11" placeholder="Guest Pass Code" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value ="Donate" type="submit" className="btn mc-btn hvr-grow"/>

        </div>
      ):
      (
        <input id="request-btn" value ="Request" type="submit" className="btn mc-btn hvr-grow"/>
      ) }
      </form>
    )
  }
}

export default CustomForm;