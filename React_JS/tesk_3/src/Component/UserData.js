import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data.json";
import BackButton from "./BackButton";

function UserData() {
  const params = useParams();
  const id = parseInt(params.id);

  const filteredUsers = id ? Data.filter((user) => user.id === id) : Data;

  return (
    <div className="container-fluid mt-2">
      <button className="position-absolute top-0 btn bg-transparent mt-2">
        <BackButton />
      </button>
      {filteredUsers.map((userData) => (
        <div key={userData.id}>
          <div className="bg-body-secondary fs-3 fw-bold text-center">
            {userData.id} &nbsp; {userData.fullName}
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
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Personal Details
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <dt>Name : </dt>
                      <dd>{userData.fullName}</dd>
                      <dt>Email : </dt>
                      <dd>{userData.email}</dd>
                      <dt>Birthdate : </dt>
                      <dd>{userData.birthdate}</dd>
                      <dt>Phone : </dt>
                      <dd>{userData.contactNumber}</dd>
                      <dt>Aadhar Number :</dt>
                      <dd>{userData.aadharNumber}</dd>
                      <dt>PAN Number :</dt>
                      <dd>{userData.panCardNumber}</dd>
                      <dt>Address :</dt>
                      <dd>
                        {userData.address.streetLine1}
                        {userData.address.streetLine2}
                        {userData.address.city}
                        {userData.address.state}
                        {userData.address.zipcode}
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default UserData;
