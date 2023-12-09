import React from "react";
import "../App.css";

function Display({displayValue}) {
//   const number = props.value;
  return (
    <div>
      <input
        type="text"
        name=""
        className="display text-end"
        value={displayValue}
        readOnly
      />
    </div>
  );
}

export default Display;
