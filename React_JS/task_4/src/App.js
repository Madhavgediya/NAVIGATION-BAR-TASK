import "./App.css";
import "./style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllData from "./Component/AllData";
import UserData from "./Component/UserData";
import Card1 from "./Component/Card1";
import Card2 from "./Component/Card2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AllData />} />
          <Route exact path="/card/" element={<Card1 />} />
          <Route exact path="/user/:id" element={<UserData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
