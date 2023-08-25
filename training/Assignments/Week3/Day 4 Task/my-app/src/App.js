import React, { Component } from "react";

class App extends Component {
  state = {
    workplace: "Zoo",
    country: "SG",
    firstName: "Ah Meng",
    designation: "zookeeper",
    contact: {
      email: "zoo@zoo.com",
    },
    animalData: [
      {
        name: "lion",
        age: 10,
        id: 3,
      },
      {
        name: "giraffe",
        age: 24,
        id: 2,
      },
      {
        name: "orangutan",
        age: 25,
        id: 1,
      },
    ],
  };

  handleUpdate = () => {
    this.setState({
      animalData: [
        {
          name: "penguin",
          age: 3,
          id: 4,
        },
        {
          name: "crocodile",
          age: 40,
          id: 5,
        },
      ],
    });
  };

  handleReset = () => {
    this.setState({
      animalData: [
        {
          name: "lion",
          age: 10,
          id: 3,
        },
        {
          name: "giraffe",
          age: 24,
          id: 2,
        },
        {
          name: "orangutan",
          age: 25,
          id: 1,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <p>
          My name is {this.state.firstName}, working as a{" "}
          {this.state.designation} in the {this.state.country}{" "}
          {this.state.workplace}.
        </p>
        <p>I am in charge of the following animals:</p>
        <ul>
          {this.state.animalData.map((ele) => {
            return (
              <li>
                {ele.name}, age: {ele.age}
              </li>
            );
          })}
        </ul>

        <button onClick={this.handleUpdate}>Submit</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
