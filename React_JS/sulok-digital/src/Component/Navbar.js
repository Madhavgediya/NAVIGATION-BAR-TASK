import React, { useState } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: '#131313'
  // })

  // const changeMode = () =>{
  //   if(myStyle.backgroundColor == '#131313'){
  //     setMyStyle({
  //       backgroundColor:'pink',
  //     })
  //   }
  //   else{
  //     setMyStyle({
  //       backgroundColor:'green',
  //     })
  //   }
  // }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            <img
              src={props.logo}
              className="text-center justify-content-center p-2 m-0"
              alt={props.logo}
            />
          </Link>
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
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/about"
                >
                  {props.about}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/contect"
                >
                  {props.contect}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/list">{props.service}</Link>
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
            {/* <div className="form-check form-switch m-3 me-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                // onClick={changeMode}
              />
            </div> */}
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
  contect: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  logo: "Enter Logo",
  home: "HOME",
  about: "ABOUT",
  contect: "CONTECT US",
  service: "SERVICE",
};



