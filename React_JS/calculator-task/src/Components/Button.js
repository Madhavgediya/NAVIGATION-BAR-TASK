import React from "react";
import "../App.css";

function Button({ onButtonClick }) {
  const buttonName = [
    "C",
    "+",
    "-",
    "*",
    "/",
    "=",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    ".",
  ];

  return (
    <div>
      {buttonName.map((buttonName) => (
        <button
          className="button"
          onClick={() => onButtonClick(buttonName)}
          // value={buttonName}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Button;
