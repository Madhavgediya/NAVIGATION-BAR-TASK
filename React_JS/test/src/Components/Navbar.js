import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Json Data
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/1">
                  1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/2">
                  2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/3">
                  3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/4">
                  4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/5">
                  5
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/6">
                  6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/7">
                  7
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/8">
                  8
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/9">
                  9
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/10">
                  10
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
