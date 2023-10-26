import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <Main>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={this.pageSize} country="in" category="general" key="general"/>}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={this.pageSize} country="in" category="business" key="business1"/>}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News pageSize={this.pageSize} country="in" category="entertainment" key="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News pageSize={this.pageSize} country="in" category="general" key="general"/>}
            />
            <Route
              exact
              path="/health"
              element={<News pageSize={this.pageSize} country="in" category="health" key="health"/>}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize={this.pageSize} country="in" category="science" key="science"/>}
            />
            <Route
              exact
              path="/sports"
              element={<News pageSize={this.pageSize} country="in" category="sports" key="sports"/>}
            />
            <Route
              exact
              path="/technology"
              element={<News pageSize={this.pageSize} country="in" category="technology" key="technology"/>}
            />
          </Routes>
        </div>
      </Main>
    );
  }
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
