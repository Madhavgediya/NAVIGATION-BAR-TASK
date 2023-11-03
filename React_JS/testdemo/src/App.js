import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Items from "./Component/Items";
import Post from "./Component/Post";
// import { json } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("users");
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setArray(json));
  }, [type]);

  return (
    <>
      <div>
        <Router>
          {/* <Navbar change={(e) => setSearch(e.target.value)} /> */}
          <Routes>
            <Route exact path="/" element={<Items />} />
            <Route exact path="/users/:id" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./Component/Navbar";
// import Items from "./Component/Items";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <div>
//         <Router>
//           <Navbar change={(e) => setSearch(e.target.value)} />
//           <Routes>
//             <Route exact path="/" element={<Items search={search} />} />
//             <Route exact path="/users/:id" element={<Items />} />
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./Component/Navbar";
// import Items from "./Component/Items";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <div>
//         <Router>
//           <Navbar change={(e) => setSearch(e.target.value)} />
//           <Routes>
//             <Route exact path="/" element={<Items search={search} />} />
//             <Route exact path="/:id" element={<Items />} />
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;
