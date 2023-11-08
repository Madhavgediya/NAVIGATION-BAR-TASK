import "./App.css";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";
// import { useState } from "react";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Main>
    </>
  );
}

// -------------------------------------------------------------------------------------------------------------------------------------------
// function App() {
//   return (
//     <>
//       <Main>
//         <Routes>
//           <Route path="/" element={<First />} />
//           <Route path="/second/:nam" element={<Second />} />
//         </Routes>
//       </Main>
//     </>
//   );
// }
// -------------------------------------------------------------------------------------------------------------------------------------------
// import "./App.css";
// import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
// import First from "./Components/First";
// import Second from "./Components/Second";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   // const [print, setPrint] = useState("");
//   let nameReturn;
//   function inputBoxValue() {
//     let name = document.getElementById("inputBox").value;
//     console.log(name);
//     setName(name);
//     // return alert(name);
//     // setPrint(name);
//   }
//   return (
//     <>
//       <div>
//         {/* <Link to="/first"> */}
//         This is First Pages <br />
//         <input type="text" id="inputBox" onChange={inputBoxValue} />
//         <First />
//         <button href="" >Click me</button>
//         {/* </Link> */}
//         {/* <Second nam={name} /> */}
//       </div>
//     </>
//   );
// }

export default App;

// import React from 'react'
// import { Demo, Demo1 } from './Components/First'
// function App() {
//   return (
//     <div>
//       <Demo />
//       <Demo1 />
//     </div>
//   )
// }

// export default App
