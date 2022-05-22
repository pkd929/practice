import React, { useState } from "react";
import edit from "./assets/edit.png";
import { Button, Form, Col, Row, Modal } from "react-bootstrap";
import { useEffect } from "react";



function CreateModel() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loadUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
                    <>
                    <div className="d-flex mt-3"  onClick={handleShow} >
                      <div className="btn-primary ms-auto">Create User</div>
                    </div>
              
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>Create Modal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                       
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="textbox" placeholder="hello"/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Email
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="textbox" placeholder="Enter your Email" />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Phone
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="textbox" placeholder="Enter your Phone" />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                          <Form.Label column sm="2">
                            Website
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="textbox" placeholder="Enter your website" />
                          </Col>
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary">Create User</Button>
                      </Modal.Footer>
                    </Modal>
                  
                  </>

                    
  );
}
export default CreateModel;