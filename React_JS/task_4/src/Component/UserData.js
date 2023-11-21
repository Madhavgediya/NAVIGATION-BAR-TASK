import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data.json";
import TextForm from "./TextForm";
import Card1 from "./Card1";

function UserData() {
  const params = useParams();
  const id = parseInt(params.id);

  const filteredUsers = id ? Data.filter((user) => user.id === id) : Data;

  return (
    <div className="container-fluid mt-2">
      {filteredUsers.map((userData) => (
        <div key={userData.id}>
          <div className="bg-body-secondary fs-3 fw-bold text-center">
            {userData.id}
          </div>
          <div className="row ">
            <div className="col-md-6 text-center align-items-center ">
              <img
                src={userData.image}
                alt=""
                className="rounded border bg-body-white img-fluid w-75 m-2"
              />
            </div>
            <div className="col-md-6 mx-0 my-auto">
              <TextForm />
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default UserData;
