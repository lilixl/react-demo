import React, { Component } from "react";

class Condition extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }
  changeLogin() {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <button
            style={{ padding: "2px 5px" }}
            onClick={this.changeLogin.bind(this)}
          >
            退出
          </button>
        ) : (
          <button
            style={{ padding: "2px 5px" }}
            onClick={this.changeLogin.bind(this)}
          >
            登录
          </button>
        )}
        {/* {this.state.isLogin && (
          <button
            style={{ padding: "2px 5px" }}
            onClick={this.changeLogin.bind(this)}
          >
            退出
          </button>
        )}
        {!this.state.isLogin && (
          <button
            style={{ padding: "2px 5px" }}
            onClick={this.changeLogin.bind(this)}
          >
            登录
          </button>
        )} */}
      </div>
    );
  }
}

export default Condition;
