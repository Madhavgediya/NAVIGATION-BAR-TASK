import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";

function AllData() {
  const [dateList, setDateList] = useState(Data);
  const [search, setSearch] = useState("");
  console.log(search);

  function ascending() {
    const sortedAscend = dateList.sort(
      (a, b) => new Date(a.joiningDate) - new Date(b.joiningDate)
    );
    setDateList([...sortedAscend]);
    console.log("ascending");
  }

  function descending() {
    const sortedDescend = dateList.sort(
      (a, b) => new Date(b.joiningDate) - new Date(a.joiningDate)
    );
    setDateList([...sortedDescend]);
    console.log("descending");
  }
  return (
    <div>
      <div>
        <div className="bg-body-secondary fs-3 fw-bold text-center">
          All Data
        </div>
        <input
          type="text"
          className="form-control position-absolute top-0 w-25 bg-light fw-bold"
          placeholder="Search Here...."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="dropdown position-absolute top-0 end-0">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sorted Date
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  ascending();
                }}
              >
                Ascending Date
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  descending();
                }}
              >
                Descending Date
              </button>
            </li>
          </ul>
        </div>

        <table className="table table-striped table-dark">
          <thead>
            <tr className="text-center align-items-center">
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Joining Date</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {dateList &&
              dateList
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.fullName.toLowerCase().includes(search);
                })
                .map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="text-center align-items-center"
                    >
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          className="rounded-pill border bg-body-white"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td>{item.joiningDate}</td>
                      <td>
                        <Link
                          to={`/user/` + item.id}
                          className="text-decoration-none btn btn-light"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllData;
