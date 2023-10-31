import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonData from "../JsonData.json";

export default function Items(props) {
  const userId = useParams();
  const id = userId.id;
  function check(id) {
    const result = JsonData.filter((user) => user.id === Number(id));
    if (id === undefined) {
      return JsonData.filter((element) => {
        return props.search.toLowerCase() === ""
          ? element
          : element.name.toLowerCase().includes(props.search) ||
              element.phone.toLowerCase().includes(props.search) ||
              element.website.toLowerCase().includes(props.search) ||
              element.email.toLowerCase().includes(props.search) ||
              element.username.toLowerCase().includes(props.search);
      }).map((element) => {
        return (
          <div className="col-md-4 my-3" key={element.id}>
            <div
              className="card text-white border-3 border-white"
              style={{
                background: "rgb(27,20,145)",
                background:
                  "linear-gradient(90deg,#080458a6 0%, rgba(163,25,104,1) 52%, #143e46 100%)",
              }}
            >
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
            {result.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.id}>
                  <div className="card">
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
      <div
        className="container-fluid"
        
      >
        <div className="row justify-content-center" id="divTag">
          {check(id)}
        </div>
      </div>
    </>
  );
}



