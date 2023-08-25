import React, { Component } from "react";
import data from "./data";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Employee from "./Employee";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {data.employees.map((info) => {
        return (
          <div key={info.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={info.img} />
              <Card.Body>
                <Card.Title onMouseEnter={handleShow}>
                  {info.fullName}
                </Card.Title>
                <Card.Text>{info.designation}</Card.Text>
              </Card.Body>
            </Card>

            <Modal show={show} onMouseLeave={handleClose}>
              <Modal.Header>
                <Modal.Title>
                  {info.fullName}, {info.age}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {info.dob}, {info.salary}, {info.designation}, {info.dept}
              </Modal.Body>
            </Modal>
          </div>
        );
      })}
    </>
  );
};

export default App;
