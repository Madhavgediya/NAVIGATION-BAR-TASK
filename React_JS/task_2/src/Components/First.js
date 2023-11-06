import React, { useState } from "react";
import { Link } from "react-router-dom";
import Second from "./Second";

function First() {
  const [name, setName] = useState("");
  let nameReturn;
  function inputBoxValue() {
    let name = document.getElementById("inputBox").value;
    console.log(name);
    setName(name);
    return alert(name);
  }
  return (
    <div>
    <Link to="/first">
      This is First Pages <br />
      <input type="text" id="inputBox" />
      <button onClick={inputBoxValue}>Click me</button>
      <Second nam={name} />
    </Link>
    </div>
  );
}

export default First;
