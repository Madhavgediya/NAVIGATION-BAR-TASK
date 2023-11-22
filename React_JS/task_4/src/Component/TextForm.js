import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";

function TextForm() {
  const [logo, setLogo] = useState();
  const [text, setText] = useState("Company Name");
  const [contectNumber, setContectNumber] = useState("Contect Number");
  const [address, setAddress] = useState("Company Address");
  const [website, setWebsite] = useState("Company Website");
  const [tagline, setTagline] = useState("Company Tagline");

  const on_change_name = (event) => {
    console.log("On Changes...");
    setText(event.target.value);
  };

  const on_change_logo = (event) => {
    console.log("On Changes...");
    setLogo(event.target.value);
  };

  const on_change_contectNumber = (event) => {
    console.log("On Changes...");
    setContectNumber(event.target.value);
  };

  const on_change_address = (event) => {
    console.log("On Changes...");
    setAddress(event.target.value);
  };

  const on_change_website = (event) => {
    console.log("On Changes...");
    setWebsite(event.target.value);
  };

  const on_change_tagline = (event) => {
    console.log("On Changes...");
    setTagline(event.target.value);
  };

  const { id } = useParams();
  // let cardnumber = id;
  return (
    <>
      <div className="container-fluid">
        <div className="bg-body-secondary fs-3 fw-bold text-center">Fill Details</div>

        <div className="row">
          <div className="col-md-6 mx-0 my-auto">
            <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={text}
              placeholder="Company Name"
              onChange={on_change_name}
            />
            <br />
            <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={tagline}
              placeholder="Company Tagline"
              onChange={on_change_tagline}
            />
            <br />
            <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={contectNumber}
              placeholder="Company Number"
              onChange={on_change_contectNumber}
            />
            <br />
            <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={website}
              placeholder="Company Website"
              onChange={on_change_website}
            />
            <br />
            <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={address}
              placeholder="Company Address"
              onChange={on_change_address}
            />
            <br />
            <input
              type="file"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={logo}
              placeholder="Company Name"
              onChange={on_change_logo}
            />
          </div>
          <div className="col-md-6">
            <div>
              <div
                id="card1"
                style={{
                  display: "none",
                }}
              ></div>
              <Cards
                cardnumber={id}
                text={text}
                tagline={tagline}
                contectNumber={contectNumber}
                website={website}
                address={address}
                logo={logo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
