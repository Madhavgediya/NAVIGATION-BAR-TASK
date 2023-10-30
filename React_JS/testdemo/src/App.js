// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Navbar";
import Items from "./Component/Items";
// import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // const userId = useParams();
  // const id = userId.id;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Items id="" />} />
          <Route exact path="/:id" element={<Items id="" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


