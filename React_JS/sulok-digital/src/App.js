import "./App.css";
import logo from "./Component/suloklogo.png";
import Navbar from "./Component/Navbar";
import List from "./Component/List";
import Contect from "./Component/Contect";
import Profile from "./Component/Profile";
import Home from './Component/Home'
import { BrowserRouter as Main, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Main>
      <div className="text-white">
        <Navbar
          logo={logo}
          home="Home"
          about="About Us"
          contect="Contect"
          service="Our Services"
        />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/list" element={<List></List>}>
        </Route>
        <Route exact path="/about" element={<Profile />}>
        </Route>
        <Route exact path="/contect" element={<Contect />}>
        </Route>
      </Routes>
</Main>
  );
}

export default App;


