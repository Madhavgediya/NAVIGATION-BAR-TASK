import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);

//   useEffect(() => {
//     fetch(" https://dummyjson.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data.users);
//         console.log(data);
//       });
//   }, [user]);

//   useEffect(() => {
//     const departmentDatam = user.map(
//       (userDepartment) => userDepartment.company.department
//     );
//     const singleData = [...new Set(departmentDatam.flat())];
//     setDepartmentData(singleData);
//   }, [user]);

useEffect(() => {
    const fetchDepartmentData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUser(data)
      const departmentDatam = data.users.map(
        (userDepartment) => userDepartment.company.department
      );
      const singleData = [...new Set(departmentDatam.flat())];
      setDepartmentData(singleData);
    };
  
    fetchDepartmentData();
  }, []);

  console.log(departmentData);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Check
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Department
                </Link>
                <ul className="dropdown-menu">
                  {departmentData.map((d) => {
                    return (
                      <li key={d}>
                        <Link className="dropdown-item" to="/">
                          {d}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
