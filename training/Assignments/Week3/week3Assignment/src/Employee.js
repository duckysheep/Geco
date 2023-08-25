import React from "react";
import PropTypes from "prop-types";
import data from "./data";

const Employee = () => {
  // console.log(props);
  // const { id, fullName, age, dob, salary, designation, img, dept } = props;

  {
    data.employees.map((ele) => {
      return (
        <div key={ele.id}>
          {console.log(ele.fullName)}
          <p>{ele.fullName}</p>
        </div>
      );
    });
  }
};

// Employee.propTypes = {
//   fullName: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   dob: PropTypes.instanceOf(Date),
//   salary: PropTypes.number,
//   designation: PropTypes.string.isRequired,
//   designation: PropTypes.any,
//   dept: PropTypes.string.isRequired,
// };

export default Employee;
