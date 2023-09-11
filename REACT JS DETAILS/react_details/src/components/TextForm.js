import React, {useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState('Enter Text Here');
    const Convert_UpperCase = () => {
        // console.log("UpperCase Was Clicked...!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const on_change_fun = (event) => {
        console.log("On Changes...")
        setText(event.target.value);
    } 
  return (
    <div className="container text-center">
      <h3>{props.heading} </h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter Email ID
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={on_change_fun}
          />
        </div>
      <button className="btn btn-success" onClick={Convert_UpperCase}>Convert UpperCase</button>

    </div>
  );
}
