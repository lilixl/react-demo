import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const menu = [
  {
    name: "属性(props)",
    path: "/props"
  },
  {
    name: "状态(state)和生命周期",
    path: "/state"
  },
  {
    name: "条件渲染",
    path: "/condition"
  },
  {
    name: "列表渲染",
    path: "/list"
  },
  {
    name: "表单",
    path: "/form"
  },
  {
    name: "状态提升",
    path: "/liftingStateUp"
  },
  {
    name: "dom操作",
    path: "/dom"
  }
];

class Home extends Component {
  render() {
    let path = this.props.location.pathname;
    return (
      <div className="home">
        <ul className="menu">
          {/* <li className={path === "/props" ? "select" : ""}>
            <Link to="props">
              <button>属性(props)</button>
            </Link>
          </li>
          <li className={path === "/state" ? "select" : ""}>
            <Link to="state">
              <button>状态(state)和生命周期</button>
            </Link>
          </li>
          <li className={path === "/condition" ? "select" : ""}>
            <Link to="condition">
              <button>条件渲染</button>
            </Link>
          </li>
          <li className={path === "/list" ? "select" : ""}>
            <Link to="list">
              <button>列表渲染</button>
            </Link>
          </li>
          <li className={path === "/form" ? "select" : ""}>
            <Link to="form">
              <button>表单</button>
            </Link>
          </li>
          <li className={path === "/liftingStateUp" ? "select" : ""}>
            <Link to="liftingStateUp">
              <button>状态提升</button>
            </Link>
          </li>
          <li className={path === "/dom" ? "select" : ""}>
            <Link to="dom">
              <button>dom操作</button>
            </Link>
          </li> */}
          {menu.map((item, index) => (
            <li key={index} className={path === item.path ? "select" : ""}>
              <Link to={item.path}>
                <button>{item.name}</button>
              </Link>
            </li>
          ))}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
