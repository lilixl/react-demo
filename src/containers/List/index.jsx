import React, { Component } from "react";
import Item from "../../components/Item";

let data = [
  {
    name: "复仇者联盟3：无限战争",
    score: "8.5"
  },
  {
    name: "银河护卫队2",
    score: "8.1"
  },
  {
    name: "美国队长3",
    score: "7.7"
  },
  {
    name: "黑豹",
    score: "6.6"
  },
  {
    name: "奇异博士",
    score: "7.6"
  }
];

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    this.setState({
      data:data
    })
  }
  render() {
    return (
      <ul className="list">
        {this.state.data.map((item, index) => {
          return (
            <li key={index}>
              <Item data={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
