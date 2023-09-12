// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <h4 className="fw-bold m-4">this is all black border is one component</h4>
      <div className="border border-5 border-dark m-4">
        <Navbar home="HOME"></Navbar>
      </div>
      <div className="border border-5 border-dark m-4">
        <TextForm heading="Login Form"></TextForm>
      </div>
      <div className="border border-5 border-dark m-4">
        This is About Part..
        <About></About>
      </div>
    </>
  );
}

export default App;

