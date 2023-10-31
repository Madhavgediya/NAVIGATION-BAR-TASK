import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Navbar";
import Items from "./Component/Items";
// import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // const userId = useParams();
  // const id = userId.id;

  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <>
      <div
        style={{
          height: "auto",
          background: "rgb(145,76,20)",
          background:
            "linear-gradient(90deg, rgb(233 86 255) 0%, rgb(0 246 255) 53%, rgb(255 75 187) 100%)",
        }}
      >
        <Router>
          <Navbar change={(e) => setSearch(e.target.value)} />
          <Routes>
            <Route exact path="/" element={<Items search={search} />} />
            <Route exact path="/:id" element={<Items />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;





