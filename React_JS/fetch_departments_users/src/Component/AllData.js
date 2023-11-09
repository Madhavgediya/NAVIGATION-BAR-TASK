import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AllData() {
  const [user, setUser] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const navigate = useNavigate();

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
    navigate("/personalData/", { state: { id: uid } });
  }
  return (
    <div>
      {departmentData.length > 0 ? (
        <>
          <h1 className="text-center">All Data</h1>
          <table class="table table-striped table-dark">
            <thead>
              <tr className="text-center align-items-center">
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company Name</th>
                <th scope="col">BloodGroup</th>
                <th scope="col">View Profile</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => (
                <tr key={item._id} className="text-center align-items-center">
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
                  <td>{item.bloodGroup}</td>
                  <td>
                    <button
                      onClick={btnClick(item.id)}
                      className="btn btn-white text-white btn-outline-success"
                    >
                      View
                    </button>
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
