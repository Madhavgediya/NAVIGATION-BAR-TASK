import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserData() {
  const params = useParams();
  const id = parseInt(params.id);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = id ? users.filter((user) => user.id === id) : users;

  return (
    <div className="container-fluid">
      {filteredUsers.map((userData) => (
        <div key={userData.id}>
          <div className="bg-body-secondary fs-3 fw-bold text-center">
            {userData.id} &nbsp; {userData.firstName} {userData.lastName}
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
                      <dd>
                        {userData.firstName} {userData.maidenName}{" "}
                        {userData.lastName}
                      </dd>
                      <dt>Age : </dt>
                      <dd>{userData.age}</dd>
                      <dt>Email : </dt>
                      <dd>{userData.email}</dd>
                      <dt>Phone : </dt>
                      <dd>{userData.phone}</dd>
                      <dt>BloodGroup :</dt>
                      <dd>{userData.bloodGroup}</dd>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Company Details
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <dt>Company Name : </dt>
                      <dd>{userData.company.name}</dd>
                      <dt>Department : </dt>
                      <dd> {userData.company.department}</dd>
                      <dt>Position : </dt>
                      <dd>{userData.company.title}</dd>
                      <dt>Company : </dt>
                      <dd>{userData.company.address.address}</dd>
                      <dt>City : </dt>
                      <dd>{userData.company.address.city}</dd>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Bank Details
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <div className="accordion-body">
                        <dt>Card Number : </dt>
                        <dd> {userData.bank.cardNumber}</dd>
                        <dt>Card Type : </dt>
                        <dd>{userData.bank.cardType}</dd>
                        <dt>Currency : </dt>
                        <dd>{userData.bank.currency}</dd>
                        <dt>Card Expire Date: </dt>
                        <dd>{userData.bank.cardExpire}</dd>
                        <dt>Code : </dt>
                        <dd>{userData.bank.iban}</dd>
                      </div>
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
