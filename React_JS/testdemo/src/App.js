import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Navbar";
import Items from "./Component/Items";
// import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <Router>
          <Navbar change={(e) => setSearch(e.target.value)} />
          <Routes>
            <Route exact path="/" element={<Items search={search} />} />
            <Route exact path="/:id" element={<Items/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;







