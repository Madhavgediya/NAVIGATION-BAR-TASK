import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Items from "./Items";

export default function Navbar(props) {
  // https://jsonplaceholder.typicode.com/users
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
      <nav className="navbar navbar-expand-lg text-white bg-dark vh-100 m-0 p-0 fixed-top" style={{width: "60px"}}>
        <div className="container-fluid d-block">
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
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav d-block">
              {user.map((element) => {
                return (
                  <li className="nav-item" key={element.id}>
                    <Link className="nav-link text-white" to={"/" + element.id} >
                      {element.id}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <form className="d-flex fixed-top bg-dark align-items-center" role="search" style={{marginLeft: "3.5rem"}}>
      <h4 className="text-white">
      Search  &nbsp; 
      </h4>
        <input
          className="form-control me-2 bg-dark text-white w-75 "
          type="search"
          placeholder="Search Here"
          aria-label="Search"
          onChange={props.change}
        />
      </form>
    </>
  );
}










