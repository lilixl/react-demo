import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Hello extends Component {
  
  render() {
    return (
      <div className="hello">
        <h1>Hello,world!</h1>
        <Link to="home">
          <button>首页</button>
        </Link>
      </div>
    );
  }
}

export default Hello;
