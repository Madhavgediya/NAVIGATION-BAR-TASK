import React, { useState } from "react";
// import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  //  make alert useState
  const [alertBox, setAlert] = useState(null);

  //  make showAlert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const [mode, setMode] = useState("light");
  const toggleMode1 = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      setMode("sussess");
      showAlert("Green Mood On", "danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mood Off", "light");
    }
  };

  const toggleMode2 = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#04569d";
      document.body.style.color = "white";
      setMode("primary");
      showAlert("Dark Mood On", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mood Off", "light");
    }
  };

  const toggleMode3 = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "red";
      setMode("dark");
      showAlert("Dark Mood On", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mood Off", "light");
    }
  };

  return (
    <>
      <Router>
          <div className="border border-5 border-dark m-4">
            <Navbar
              home="HOME"
              mode={mode}
              toggleMode1={toggleMode1}
              toggleMode2={toggleMode2}
              toggleMode3={toggleMode3}
            ></Navbar>
          </div>
        <Switch>
          <Route exact path="/home">
            <div className="border border-5 border-dark m-4">
              <TextForm heading="Login Form"></TextForm>
            </div>
          </Route>
          <Route exact path="/alert">
            <Alert />
            this is Alert...
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <div>
          <div>
            <Alert alert={alertBox}></Alert>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
