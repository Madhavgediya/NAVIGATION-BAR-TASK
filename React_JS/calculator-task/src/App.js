import logo from "./logo.svg";
import "./App.css";
import Display from "./Components/Display";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  return (
    <>
      <div className="calculator p-2">
        <Display displayValue={calVal} />
        <div className="buttonsContainer">
          <Button onButtonClick={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
