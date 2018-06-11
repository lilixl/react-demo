import React, { Component } from "react";
import "./index.css"

class Item extends Component {
  render(){
    let data = this.props.data;
    return (
      <div className="item">
        <h3>{data.name}</h3>
        <p>
          <span>豆瓣</span>
          <span className="score">{data.score}</span>
        </p>
      </div>
    )
  }
}

export default Item;