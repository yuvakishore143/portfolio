import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiCopy } from "react-icons/bi";
import "../../styles/Contact.css";
import PopUp from "./PopUp";

const Contact = (props) => {
  // const [number , setData] = useState('hello')
  const number = 9133037406;
  const email = "vishwanathyuva143@gmail.com";
  return (
    <Modal
      {...props}
      backdrop="true"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="headings">Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <span className="modal-question">Phone Number :</span>
          <span className="modal-ans">9133037406</span>
          <span>
            <PopUp val = {number} />
          </span>
        </div>

        <div className="d-flex">
          <span className="modal-question">Email :</span>
          <span className="modal-ans">vishwanathyuva143@gmail.com</span>
          <span>
          </span>
          <PopUp val = {email}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
