import React from "react";
import PropTypes from "prop-types";

const DisplayTwo = (props) => {
  console.log(props);
  const {
    firstName,
    age,
    arr,
    contact,
    sample,
    emp,
    strOrNum,
    isMarried,
    city,
  } = props;

  return (
    <>
      <p>FirstName: {firstName}</p>
      <p>Contact: {contact.email}</p>
      <p>Arr: {arr.map((e) => e)}</p>
      <p>{emp.map((e) => e.name)}</p>
      <p>City: {city}</p>
    </>
  );
};

//expected datatypes of props
DisplayTwo.propTypes = {
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  arr: PropTypes.arrayOf(PropTypes.number),
  contact: PropTypes.shape({
    email: PropTypes.string,
  }),
  emp: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  sample: PropTypes.func,
  strOrNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isMarried: PropTypes.bool,
};

//in-built, its coming from Component
DisplayTwo.defaultProps = {
  firstName: "alex",
  age: 20,
  arr: [90, 4, 59],
  contact: {
    email: "admin@gmail.com",
  },
  sample: () => {},
  emp: [
    { name: "", id: 1 },
    { name: "", id: 2 },
  ],
  strOrNum: "str",
  isMarried: false,
  city: "hyderabad",
};

export default DisplayTwo;
