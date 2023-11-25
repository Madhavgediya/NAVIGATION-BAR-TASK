import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
    console.log(event.target.files);
    setLogo(URL.createObjectURL(event.target.files[0]));
  };

  const mobileNumber = (event) => {
    var length = event.target.value.length;
    if (length >= 12) {
      event.target.value = event.target.value.slice(0, 11);
    }

    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const on_change_contectNumber = (event) => {
    console.log("On Changes...");
    setContectNumber(event.target.value);
  };

  // const on_change_address = (event) => {
  //   console.log("On Changes...");
  //   // make address validation in react js
  //   var value = event.target.value;
  //   let valueConcat = value.slice(",");
  //   var filterValue = valueConcat.join("<br/>");
  //   // setAddress(filterValue);
  // };

  const on_change_address = (event) => {
    console.log("On Changes...");
    const originalAddress = event.target.value;
    // Split the address by commas
    const addressArray = originalAddress.split(",");

    // Replace commas with newline characters
    const formattedAddress = addressArray.join("<br />");

    // Set the formatted address back to the input field
    setAddress(formattedAddress);
  };

  const on_change_website = (event) => {
    console.log("On Changes...");
    setWebsite(event.target.value);
    const website = event.target.value;
    const isValidURL =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6})\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        website
      );

    if (isValidURL) {
      setWebsite(website);
      console.log("Succes");
    } else {
      console.log("Error");
    }
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
        <div className="bg-body-secondary fs-3 fw-bold text-center">
          Fill Details
        </div>

        <div className="row">
          <div className="col-md-6 p-5">
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Company Name"
                id="fullWidth"
                onChange={on_change_name}
                value={text}
              />
            </Box>
            {/* <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={text}
              placeholder="Company Name"
              onChange={on_change_name}
            /> */}
            <br />
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Company Tagline"
                id="fullWidth"
                onChange={on_change_tagline}
                value={tagline}
              />
            </Box>
            {/* <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={tagline}
              placeholder="Company Tagline"
              onChange={on_change_tagline}
            /> */}
            <br />
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Company Number"
                id="fullWidth"
                onChange={on_change_contectNumber}
                value={contectNumber}
                min="-10"
                max="10"
                onKeyPress={mobileNumber}
              />

              {/* <TextField
                fullWidth
                label="Company Number"
                id="fullWidth"
                onChange={on_change_contectNumber}
                pattern="[0-9]{10}"
                minlength="10"
                value={contectNumber}
              /> */}
            </Box>
            {/* <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={contectNumber}
              placeholder="Company Number"
              onChange={on_change_contectNumber}
            /> */}
            <br />
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Company Website"
                id="fullWidth"
                onChange={on_change_website}
                value={website}
              />
            </Box>
            {/*<input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={website}
              placeholder="Company Website"
              onChange={on_change_website}
            /> */}
            <br />
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Company Address"
                id="fullWidth"
                onChange={on_change_address}
                value={address}
              />
            </Box>
            {/* <input
              type="text"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={address}
              placeholder="Company Address"
              onChange={on_change_address}
            /> */}
            <br />
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                type="file"
                id="fullWidth"
                onChange={on_change_logo}
              />
            </Box>
            {/* <input
              type="file"
              className=""
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={on_change_logo}
            /> */}
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
