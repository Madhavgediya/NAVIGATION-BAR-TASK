import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const on_change_fun = (event) => {
    console.log("On Changes...");
    setText(event.target.value);
  };
  return (
    <div className="container text-center">
      <h3>{props.heading} </h3>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Enter Email ID
        </label>
        <textarea
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={text}
          onChange={on_change_fun}
          placeholder="Enter Text Here"
        ></textarea>
      </div>
      <div>
        <h5>{text}</h5>
      </div>
    </div>
  );
}
