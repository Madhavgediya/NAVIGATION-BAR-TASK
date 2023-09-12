import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const Convert_UpperCase = () => {
    // console.log("UpperCase Was Clicked...!" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const on_change_fun = (event) => {
    console.log("On Changes...");
    setText(event.target.value);
  };
  const Convert_LowerCase = () => {
    //        console.log("Lowercase was clicked...");
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
  };
  const ClearMethod = () => {
    let newText = "";
    setText(newText);
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
        ></textarea>
      </div>
      <div className="m-4">
        <button className="btn btn-success m-3" onClick={Convert_UpperCase}>
          Convert UpperCase
        </button>
        <button className="btn btn-success m-3" onClick={Convert_LowerCase}>
          Convert LowerCase
        </button>
        <button className="btn btn-success m-3" onClick={ClearMethod}>
          Clear
        </button>
      </div>
      <div>
        Here We will Count word and characters... <br />
        word :- <b> {text.split(" ").length} </b> <br />
        char :- <b> {text.length} </b> <br />
      </div>
      <div>
        This is Preview Of TextBox :-
        <h5>{text}</h5>
      </div>
    </div>
  );
}
