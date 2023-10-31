import React, { useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../JsonData.json";
import "../App.css";


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white bg-dark">
        <div className="container-fluid">
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
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {JsonData.map((element) => {
                return (
                  <li className="nav-item">
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
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 bg-dark text-white"
          type="search"
          placeholder="Search Here"
          aria-label="Search"
          onChange={props.change}
        />
      </form>
    </>
  );
}






