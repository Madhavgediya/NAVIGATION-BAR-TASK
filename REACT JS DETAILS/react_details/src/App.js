// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar home="HOME"></Navbar>
      <TextForm heading="Login Form"></TextForm>
    </>
  );
}

export default App;
