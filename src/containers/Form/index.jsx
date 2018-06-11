import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    alert(this.state.name);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(this.input.value);
    console.log(this.input);
  }
  render() {
    return (
      <div>
        <p style={{ marginBottom: "15px" }}>受控组件：</p>
        <form onSubmit={this.submit.bind(this)}>
          <label>
            姓名：<input
              type="text"
              value={this.state.name}
              onChange={this.changeName.bind(this)}
            />
          </label>
          <button style={{ marginLeft: "15px" }}>提交</button>
        </form>
        <p style={{ margin: "30px 0 15px 0" }}>不受控组件：</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            姓名：<input type="text" ref={input => (this.input = input)} />
          </label>
          <button style={{ marginLeft: "15px" }}>提交</button>
        </form>
      </div>
    );
  }
}

export default NameForm;
