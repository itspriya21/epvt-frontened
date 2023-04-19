import React from "react";

import "./index.css";

import Tool from "../tool";
import CFGViewer from "../cfg-viewer";

const Component = ({ code }) => {
  return (
    <div className="toolbox">
      <div className="row bg-light border border-secondary">
        <span className="border-bottom border-secondary bg-primary-subtle p-3">
          <h5 className="text-dark bg-body-blue">VISUALISER</h5>
        </span>
        <CFGViewer code={code} />
        <Tool code={code} name="Dummy Function" />
        <Tool code={code} name="Dummy Function" />
      </div>

      <div className="row bg-light border border-secondary mt-5">
        <span className="border-bottom border-secondary bg-primary-subtle p-3">
          <h5 className="text-dark ">FORMAL ANALYSER</h5>
        </span>
        <Tool code={code} name="Dummy Function" />
        <Tool code={code} name="Dummy Function" />
        <Tool code={code} name="Dummy Function" />
      </div>
      <div className="row bg-light border border-secondary mt-5">
        <span className="border-bottom border-secondary bg-primary-subtle p-3">
          <h5 className="text-dark ">STATIC ANALYSER</h5>
        </span>
        <Tool code={code} name="Dummy Function" />
        <Tool code={code} name="Dummy Function" />
        <Tool code={code} name="Dummy Function" />
      </div>
    </div>
  );
};

export default Component;
