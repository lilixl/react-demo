import React, { Component } from "react";
import LiftingStateUpFirst from "./subpage";

class TemperatureInput extends Component {
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    return (
      <div>
        <h4>{`请输入${this.props.name}：`}</h4>
        <input
          type="text"
          value={this.props.temperature}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

class LiftingStateUp extends Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
      scale: "c"
    };
  }
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  changeCelsius(val) {
    this.setState({
      temperature: val,
      scale: "c"
    });
  }
  changeFahrenheit(val) {
    this.setState({
      temperature: val,
      scale: "f"
    });
  }
  render() {
    let celsius =
      this.state.scale === "c"
        ? this.state.temperature
        : this.tryConvert(this.state.temperature, this.toCelsius);
    let fahrenheit =
      this.state.scale === "f"
        ? this.state.temperature
        : this.tryConvert(this.state.temperature, this.toFahrenheit);
    return (
      <div style={{ display: "flex" }}>
        <LiftingStateUpFirst />
        <div>
          <TemperatureInput
            name="摄氏度"
            temperature={celsius}
            onTemperatureChange={this.changeCelsius.bind(this)}
          />
          <TemperatureInput
            name="华氏度"
            temperature={fahrenheit}
            onTemperatureChange={this.changeFahrenheit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default LiftingStateUp;
