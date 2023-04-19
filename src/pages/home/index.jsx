import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

import "./index.css";
import defaultContent from "./demo";

import ToolBox from "../../components/toolbox";

const fileNames = ["counter.sol", "person.sol", "simplestorage.sol"];

const Page = () => {
  const [editorValue, setEditorValue] = useState({ code: defaultContent });

  const [selectedFile, setSelectedFile] = useState();

  const onChangeHandler = (event) => {
    document.getElementById("fileChooser").value = "";
    if (event.target.value !== "Select file") {
      fetch(event.target.value)
        .then((response) => response.text())
        .then((text) => setEditorValue({ ...editorValue, code: text }));
    } else {
      setEditorValue({ ...editorValue, code: "" });
    }
    setSelectedFile(event.target.value);
  };

  useEffect(() => {
    setEditorValue({ ...editorValue, code: "" });
    // fetch(fileNames[0])
    // .then((response) => response.text())
    // .then((text) => setEditorValue({ ...editorValue, code: text }));
  }, []);

  const fileChooseHandler = async (event) => {
    setSelectedFile("Select file");
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setEditorValue({ ...editorValue, code: text });
    };
    reader.readAsText(event.target.files[0]);
  };

  return (
    <div className="row bg-light ">
      <span className="bg-primary-subtle">
        <h1 className="text-black bold">
          Formal Method Toolchain for Solidity
        </h1>
      </span>
      <div className="col-lg-6">
        <div className="button-section">
          <button
            type="button"
            className="bg-primary-subtle"
            style={{
              float: "left",
              marginTop: "20px",
              marginLeft: "10px",
              borderRadius: "4px",
              display: "box",
            }}
            onClick={() => setEditorValue({ ...editorValue, code: "" })}
          >
            New File
          </button>

          <select
            style={{
              float: "left",
              marginLeft: "45px",
              marginTop: "24px",
              borderRadius: "4px",
              display: "box",
              backgroundColor: "gray",
            }}
            className="bg-primary-subtle"
            onChange={onChangeHandler}
            value={selectedFile}
          >
            <option selected>Upload File</option>
            {fileNames.map((f, i) => {
              return <option key={i}>{f}</option>;
            })}
          </select>

          <input
            type="file"
            id="fileChooser"
            onChange={(e) => fileChooseHandler(e)}
            className="bg-primary-subtle"
            accept=".sol"
            style={{
              float: "left",
              marginLeft: "40px",
              marginTop: "20px ",
              borderRadius: "4px",
            }}
          />
        </div>

        <div className="editor">
          <Editor
            defaultLanguage="sol"
            value={editorValue.code}
            onChange={(value) => {
              document.getElementById("fileChooser").value = "";
              setSelectedFile("Select file");
              setEditorValue({ code: value });
            }}
          />
        </div>
      </div>

      <div className="col-lg-6 button-section">
        <ToolBox code={editorValue.code} />
      </div>
    </div>
  );
};

export default Page;
