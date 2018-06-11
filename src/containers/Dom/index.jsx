import React, { Component } from "react";
import ReactDOM from "react-dom";

class ComponentChild extends Component {
  render() {
    return (
      <div>
        <p>我是子组件</p>
      </div>
    );
  }
}

class ComponentDom extends Component {
  componentDidMount() {
    console.log(this.refs.componentChild);
    console.log(ReactDOM.findDOMNode(this.refs.componentChild));    
  }
  render() {
    return (
      <div>
        <ComponentChild ref="componentChild" />
      </div>
    );
  }
}

export default ComponentDom;
