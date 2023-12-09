import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar(props) {
  const [user, setUser] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUser(data);
    });
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            Data
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user.map((element) => {
                return (
                  <li className="nav-item" key={element.id}>
                    <Link className="nav-link text-white" to={"/" + element.id}>
                      {element.id}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>  
    </>
  );
}
