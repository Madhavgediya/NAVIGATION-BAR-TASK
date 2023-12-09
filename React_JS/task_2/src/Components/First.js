import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Second from "./Second";
// import { Hidden } from "@mui/material";

// import Second from "./Second";

function First() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  let nameReturn;
  function inputBoxValue() {
    let name = document.getElementById("inputBox").value;
    console.log(name);
    setName(name);
  }
  // const textName = name;
  function btnClick() {
    alert(name);
    navigate("/second", { state: { id: name } });
  }

  return (
    <>
      <div className="d-block justify-content-center align-items-center text-center">
        <h2>
          This is First Pages <br />
        </h2>
        <Paper
          className="w-50"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px auto",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type Your Name & Go to Next Page"
            inputProps={{ "aria-label": "search google maps" }}
            id="inputBox"
            onChange={inputBoxValue}
          />
          {/* <Link to={`/second/${<Second nam={textName}/>}`}> */}
          {/* <Link to={'/second/'+{name}}> */}
          <IconButton
            type="button"
            onClick={btnClick}
            sx={{ p: "10px" }}
            aria-label="next"
          >
            <SearchIcon />
          </IconButton>
          {/* </Link> */}
        </Paper>
        {/* <input type="text" id="inputBox" onChange={inputBoxValue} />
      <Link to={`/second/${name}`}>
        <button onClick={btnClick}>Click me</button>
      </Link> */}
      </div>
    </>
  );
}

export default First;

// -----------------------------------------------------------------------------------------------------------------------------------------
// function First() {
//   const [name, setName] = useState("");
//   let nameReturn;
//   function inputBoxValue() {
//     let name = document.getElementById("inputBox").value;
//     console.log(name);
//     setName(name);
//   }
//   function btnClick() {
//     return alert(name);
//   }
//   return (
//     <>
//       <div className="d-block justify-content-center align-items-center text-center">
//         <h2>
//           This is First Pages <br />
//         </h2>
//         <Paper
//           className="w-50"
//           component="form"
//           sx={{ p: "2px 4px", display: "flex", alignItems: "center", justifyContent: "center", margin: "50px auto" }}
//         >
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Type Your Name & Go to Next Page"
//             inputProps={{ "aria-label": "search google maps" }}
//             id="inputBox"
//             onChange={inputBoxValue}
//           />
//           <Link to={`/second/${name}`}>
//             <IconButton
//               type="button"
//               onClick={btnClick}
//               sx={{ p: "10px" }}
//               aria-label="next"
//             >
//               <SearchIcon />
//             </IconButton>
//           </Link>
//         </Paper>
//         {/* <input type="text" id="inputBox" onChange={inputBoxValue} />
//       <Link to={`/second/${name}`}>
//         <button onClick={btnClick}>Click me</button>
//       </Link> */}
//       </div>
//     </>
//   );
// }

// export default First;
// ------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react'

// function Demo() {
//   return (
//     <div>
//       madhav
//     </div>
//   )
// }

// function Demo1() {
//   return (
//     <div>
//       madhav 111
//     </div>
//   )
// }

// export {Demo1, Demo};
