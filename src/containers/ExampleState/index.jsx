import React, { Component } from "react";

class ExampleProps extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      number: 0
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  incrementNumber() {
    this.setState(
      prevState => ({
        number: prevState.number + 1
      }),
      () => {
        console.log(this.state.number);
      }
    );
    // console.log(this.state.number);
  }
  render() {
    return (
      <div>
        <p>{`现在是北京时间${this.state.date.toLocaleTimeString()}`}</p>
        <div style={{ marginTop: "10px" }}>
          <span style={{ marginRight: "10px" }}>{this.state.number}</span>
          <button
            style={{ padding: "2px 5px" }}
            onClick={this.incrementNumber.bind(this)}
          >
            +1
          </button>
        </div>
      </div>
    );
  }
}

export default ExampleProps;
