import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllData from "./Component/AllData";
import PersonalData from "./Component/PersonalData";
import Bloodgroup from "./Component/Bloodgroup";
import UserData from "./Component/UserData";

function App() {
  return (
    // Fetch this API Data
    // https://dummyjson.com/users
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllData />} />
          <Route exact path="/department/:department" element={<PersonalData />} />
          <Route exact path="/bloodGroup/:bloodGroup" element={<Bloodgroup />} />
          <Route exact path="/user/:id" element={<UserData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
