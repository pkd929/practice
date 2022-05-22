import React, { useState } from "react";
import Delete from "./assets/delete.png";
import { Button, Form, Col, Row, Modal } from "react-bootstrap";
import { useEffect } from "react";



function DeletModel() {
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
                     <img src={Delete} onClick={handleShow} width={20} />
              
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>delet Modal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                       
                      Are u sure Want to delet user
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
export default DeletModel;