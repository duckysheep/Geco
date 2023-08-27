import React, { Component } from "react";
import data from "./data";
import Employee from "./Employee";
import { useState } from "react";
import Transport from "./Transport";
import Button from "react-bootstrap/esm/Button";

const App = () => {
  let arr = {
    grocery: [
      { item: "apple", category: "food" },
      { item: "orange", category: "food" },
      { item: "banana", category: "food" },
    ],
  };

  const [state, setState] = useState(arr.grocery);
  const [transport, setTransport] = useState(["bicycle", "car"]);

  return (
    <>
      <Button onClick={() => setTransport(["bicycle"])}>Road Closure</Button>

      <Transport transport={transport}></Transport>
      {data.employees.map((info) => {
        return (
          <Employee
            key={info.id}
            fullName={info.fullName}
            age={info.age}
            dob={info.dob}
            salary={info.salary}
            designation={info.designation}
            img={info.img}
            dept={info.dept}
            grocery={state}
          ></Employee>
        );
      })}
    </>
  );
};

export default App;
