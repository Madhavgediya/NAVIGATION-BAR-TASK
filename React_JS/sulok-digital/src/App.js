import './App.css';
import logo from './Component/suloklogo.png';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <Navbar logo={logo} home="Home" about="About Us" service="Our Services"/>

    </>
  );
}

export default App;

