import React, { Component } from "react";

class ComponentProps extends Component {
  render() {
    return <p>{`大家好，我叫${this.props.name}！`}</p>;
  }
}

export default ComponentProps;
