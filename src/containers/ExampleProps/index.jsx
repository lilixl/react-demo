import React, { Component } from "react";
import ComponentProps from "../../components/ComponentProps";

class ExampleProps extends Component {
  constructor() {
    super();
    this.state = {
      name: "张三"
    };
  }
  render() {
    return (
      <div>
        <ComponentProps name={this.state.name} />
        <button
          style={{ padding: "2px 5px", marginTop: "10px" }}
          onClick={() => {
            let name = this.state.name === "张三" ? "李四" : "张三";
            this.setState({ name: name });
          }}
        >
          切换
        </button>
      </div>
    );
  }
}

export default ExampleProps;
