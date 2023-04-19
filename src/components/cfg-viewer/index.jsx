import React, { useState } from "react";
import { Modal, Alert } from "react-bootstrap";
import SVG from "react-inlinesvg";

import "./index.css";

import Tool from "../tool";

const Component = ({ code }) => {
  const [CFG, setCFG] = useState("");
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  return (
    <>
      <Tool
        name="Generate CFG"
        spinner={spinner}
        alert={alert}
        func={() => {
          setSpinner(true);
          fetch(`${process.env.REACT_APP_BACKEND_URL}/cfg-image`, {
            method: "POST",
            crossDomain: true,
            body: JSON.stringify({
              source: code,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              setSpinner(false);
              setShow(true);
              setCFG(res["svg-string"]);
            })
            .catch((err) => {
              setSpinner(false);
              setAlert({ show: true, message: err.message });
            });
        }}
      />
      <Modal fullscreen show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CFG Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SVG src={CFG} width="100%" height="auto" title="React" />
        </Modal.Body>
      </Modal>
      <Modal show={alert.show} onHide={() => setAlert({ show: false })}>
        <Modal.Body>
          <Alert key="danger" variant="danger">
            {alert.message}
          </Alert>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Component;
