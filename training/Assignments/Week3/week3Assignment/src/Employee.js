import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Employee = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ border: "1px solid black", width: "50%" }}>
        <h1 onMouseEnter={handleShow}>{props.fullName}</h1>
        <img src={props.img} />
        <h3>{props.designation}</h3>
      </div>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {props.fullName}, {props.age}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <img src={props.img} />
          </p>
          <div>
            <p>DOB: {props.dob}</p>
            <p>Salary: ${props.salary}</p>
            <p>Designation: {props.designation}</p>
            <p>Department: {props.dept}</p>
            <p>
              Favourite food:{" "}
              {
                props.grocery[Math.floor(Math.random() * props.grocery.length)]
                  .item
              }
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Employee.propTypes = {
  fullName: PropTypes.string,
  // age: PropTypes.number,
  // dob: PropTypes.instanceOf(Date),
  // salary: PropTypes.number,
  designation: PropTypes.string,
  img: PropTypes.any,
  // dept: PropTypes.string,
};

export default Employee;
