import React from "react";

// function based component
const Display = (props) => {
  console.log(props); //always  a object

  // destructuring of objects
  const { data } = props;

  return (
    <>
      My name is {data.firstName}, working as a {data.designation}
    </>
  );
};

export default Display;

// add = (a, b) => {

// };

// add(20, 30);
