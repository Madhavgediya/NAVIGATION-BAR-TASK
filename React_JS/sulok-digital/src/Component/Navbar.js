import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand text-white" href="https://sulok.digital/">
            <img
              src={props.logo}
              className="text-center justify-content-center p-2 m-0"
              alt={props.logo}
            />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white navbar-toggler-icon">
            <i className="bi bi-three-dots-vertical text-white fs-1"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="https://sulok.digital/"
                >
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://sulok.digital/about-us-3"
                >
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">{props.service}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-dark text-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
    
  );
}

Navbar.protoType = { 
    logo: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,  
};

Navbar.defaultProps = {
    logo : "Enter Logo",
    home : "HOME",
    about : "ABOUT",
    service : "SERVICE",
}


