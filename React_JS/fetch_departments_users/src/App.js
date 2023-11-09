import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllData from "./Component/AllData";
import PersonalData from "./Component/PersonalData";

function App() {
  return (
    // Fetch this API Data
    // https://dummyjson.com/users
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllData />} />
          <Route exact path="/personalData/id" element={<PersonalData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
