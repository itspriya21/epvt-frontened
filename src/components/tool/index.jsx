import React from "react";
import { Spinner } from "react-bootstrap";

import "./index.css";

const Component = ({ name, func, spinner }) => {
  return (
    <div className="col-4 handler">
      <button className="btn btn-secondary" type="button" onClick={func}>
        {spinner && (
          <Spinner as="span" animation="border" size="lg" role="status" />
        )}
        &nbsp;&nbsp;&nbsp;
        {name}
      </button>
    </div>
  );
};

export default Component;
