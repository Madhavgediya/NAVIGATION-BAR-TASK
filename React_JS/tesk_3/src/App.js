import logo from "./logo.svg";
import Data from "./Data.json";
import "./App.css";
// import Navbar from "./Component/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllData from "./Component/AllData";
import UserData from "./Component/UserData";

function App() {
  return (
    // Fetch this API Data
    // https://dummyjson.com/users
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<AllData />} />
          <Route exact path="/user/:id" element={<UserData />} />
          {/* <Route exact path="/department/:department" element={<PersonalData />} />
          <Route exact path="/bloodGroup/:bloodGroup" element={<Bloodgroup />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
