import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export default function Items(props) {
  const userId = useParams();
  const id = userId.id;

  const [user, setUser] = useState([]);

  useEffect =
    (() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data);
        });
    },
    []);

  function check(id) {
    const result = user?.filter((user) => user.id === Number(id));
    if (id === undefined) {
      return user?.filter((element) => {
          return props.search.toLowerCase() === ""
            ? element
            : element.name.toLowerCase().includes(props.search) ||
                element.phone.toLowerCase().includes(props.search) ||
                element.website.toLowerCase().includes(props.search) ||
                element.email.toLowerCase().includes(props.search) ||
                element.username.toLowerCase().includes(props.search);
        })?.map((element) => {
          return (
            <div className="col-md-5 mt-5" key={element.id}>
              <div className="card  border-3 border-white">
                <div className="card-body">
                  <h5 className="card-title">
                    {element.id}. {element.name}
                  </h5>
                  <p className="card-text">
                    <strong>Address:- </strong>
                    {element.address.street} {element.address.city} <br />{" "}
                    <strong>Pincode:- </strong>
                    {element.address.zipcode} <br />
                    <strong>Phone:- </strong>
                    {element.phone} <br />
                    <strong>website:- </strong>
                    <a href={element.website} target="_blank">
                      {element.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        });
    } else {
      return (
        <>
          <div className="row justify-content-center">
            {result?.map((element) => {
              return (
                <div className="col-md-5 mt-5" key={element.id}>
                  <div className="card border">
                    <div className="card-body">
                      <h5 className="card-title">
                        {element.id}. {element.name}
                      </h5>
                      <p className="card-text">
                        <strong>Address:- </strong>
                        {element.address.street} {element.address.city} <br />{" "}
                        <strong>Pincode:- </strong>
                        {element.address.zipcode} <br />
                        <strong>Phone:- </strong>
                        {element.phone} <br />
                        <strong>website:- </strong>
                        <a href={element.website} target="_blank">
                          {element.website}
                        </a>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center" id="divTag">
          {check(id)}
        </div>
      </div>
    </>
  );
}






