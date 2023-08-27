import React, { Component } from "react";

class Transport extends Component {
  render() {
    return (
      <>
        <ul>
          Transport available:
          {this.props.transport.map((ele, i) => {
            return <li key={i}>{ele}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Transport;
