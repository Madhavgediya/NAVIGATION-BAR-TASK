import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AllData() {
  const [user, setUser] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartmentData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUser(data.users);
      const departmentDatam = data.users.map(
        (userDepartment) => userDepartment.company.department
      );
      const singleData = [...new Set(departmentDatam.flat())];
      setDepartmentData(singleData);
    };

    fetchDepartmentData();
  }, []);

  //   Chanage Page
  function btnClick(uid) {
    console.log("Onclick" + uid);
    // alert(uid);
  }
  return (
    <div>
      {departmentData.length > 0 ? (
        <>
          <div className="bg-body-secondary fs-3 fw-bold text-center">
            All Data
          </div>
          ;
          <table className="table table-striped table-dark">
            <thead>
              <tr className="text-center align-items-center">
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company Name</th>
                <th scope="col">Department Name</th>
                <th scope="col">BloodGroup</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => (
                <tr key={item.id} className="text-center align-items-center">
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="rounded-pill border bg-body-white"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.company.name}</td>
                  <td>{item.company.department}</td>
                  <td>{item.bloodGroup}</td>
                  <td>
                    <Link
                      to={`/user/` + item.id}
                      className="text-decoration-none btn btn-light"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default AllData;
