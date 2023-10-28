import React from "react";
import Navbar from "./Components/Navbar";
// import { Link } from "react-router-dom";
import Home from "./Components/Home";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Main>
      {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route/>
        </Routes>
      </Main>
    </div>
  );
}
