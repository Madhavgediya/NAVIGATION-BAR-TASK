import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Bloodgroup() {
  const { bloodGroup } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);
  const filteredUsers = bloodGroup? users.filter((user) => user.bloodGroup.toLowerCase() === bloodGroup.toLowerCase())
    : users;
  console.log(filteredUsers);
  return (
    <>
      <div className="container-fluid">
        <div className="bg-body-secondary fs-3 fw-bold text-center">
          {bloodGroup}
        </div>
        <div className="row m-2 mt-4">
          {filteredUsers &&
            filteredUsers.map((user) => (
              <>
                <div className="col-3 text-center mt-3 mb-3">
                  <Link
                    to={"/user/" + user.id}
                    className="text-decoration-none text-black m-auto p-auto d-flex w-100"
                  >
                    <div>
                      <img
                        src={user.image}
                        alt=""
                        className="rounded border bg-body-white img-fluid"
                      />
                    </div>
                  </Link>
                  <div className="fs-3 fw-bold " key={user.id}>
                    {user.firstName}
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Bloodgroup;
