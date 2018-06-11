import React, { Component } from "react";

class TemperatureInputFirst extends Component {
  constructor() {
    super();
    this.state = {
      temperature: ""
    };
  }
  changeTemperature(e) {
    this.setState({
      temperature: e.target.value
    });
  }
  render() {
    return (
      <div style={{ marginRight: "100px" }}>
        <h4>{`请输入${this.props.name}：`}</h4>
        <input
          type="text"
          value={this.state.temperature}
          onChange={this.changeTemperature.bind(this)}
        />
      </div>
    );
  }
}

class LiftingStateUpFirst extends Component {
  
  render() {
    return (
      <div>
        <TemperatureInputFirst name="摄氏度" />
        <TemperatureInputFirst name="华氏度" />
      </div>
    );
  }
}

export default LiftingStateUpFirst;
