import React, { Component } from "react";
import Display from "./Display";
import DisplayTwo from "../DisplayTwo";

class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    designation: "developer",
    city: "pune",
    arr: [10, 29, 4, 100],
    contact: {
      email: "admin@gmail.com",
    },
    isMarried: true,
    emp: [
      { name: "", id: 1 },
      { name: "", id: 2 },
      { name: "", id: 3 },
    ],
    strOrNum: "hello",
  };

  sample = () => {
    console.log("sample");
  };

  handleUpdate = () => {
    this.setState({
      designation: "manager",
    });
  };

  render() {
    // const {data} = this.props;
    return (
      <>
        <Display data={this.state} />
        <DisplayTwo
          firstName={this.state.firstName}
          age={this.state.age}
          arr={this.state.arr}
          contact={this.state.contact}
          isMarried={this.state.isMarried}
          emp={this.state.emp}
          sample={this.sample}
          strOrNum={this.state.strOrNum}
        />
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default App;

// Display({data : this.state})

// rcc -> class based
// rsc -> function based component
