import React, { Component } from "react";

// class based component
class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    designation: "developer",
    city: "pune",
    arr: [90, 30, 39],
    contact: {
      email: "admin@gmail.com",
    },
    employeeData: [
      {
        name: "",
        age: 22,
        id: 3,
      },
      {
        name: "",
        age: 24,
        id: 2,
      },
      {
        name: "",
        age: 25,
        id: 1,
      },
    ],
  };

  handleUpdate = () => {
    // this is referring to App
    // to update state
    this.setState({
      designation: "manager",
      age: 30,
    });
  };

  // whenever state updates, re-rendering happens ( render method is called again)
  render() {
    return (
      // this is referring to App
      // JSX
      <div>
        <p>
          My name is {this.state.firstName} age: {this.state.age}, working as a{" "}
          {this.state.designation}
        </p>
        <p>Contact: {this.state.contact.email}</p>
        <p>
          {this.state.arr.map((e) => {
            return <p>{e}</p>;
          })}
        </p>

        <button onClick={this.handleUpdate}>Submit</button>
      </div>
    );
  }
}

export default App;

// reconcilation process
// diffing algo

{
  /* in html 
<button onclick="handle()"></button>

handle = () => {
  document.getElementById("display").innerHTML = ""
}
*/
}

// jsx -> plain js

// babel => transpiler + compiler

//run => npm i
