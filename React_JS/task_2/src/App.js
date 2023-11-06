// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [print, setPrint] = useState("");
  let nameReturn;
  function inputBoxValue() {
    let name = document.getElementById("inputBox").value;
    console.log(name);
    setName(name);
    // return alert(name);
    setPrint(name);
  }
  // function send(name) {
  //   // return <Second nam={print} />;
  //   setPrint(name);
  // }
  return (
    <>
      <div>
        {/* <Link to="/first"> */}
        This is First Pages <br />
        <input type="text" id="inputBox" onChange={inputBoxValue} />
        <button>Click me</button>
        {/* </Link> */}
        <Second nam={name} />
      </div>
    </>
  );
}

export default App;
