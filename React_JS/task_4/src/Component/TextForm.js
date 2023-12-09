import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TextForm() {
  const [information, setInformation] = useState({
    companyName: "",
    tagline: "",
    address: "",
    website: "",
    contactNumber: "",
    logo: "",
  });

  const handalEvents = (event) => {
    console.log(information);
    console.log(event.target.name);
    console.log(event.target.files);
    console.log(event.target.files[0].name);
    if (event?.target.name === "logo") {
      console.log("this is logo");
      setInformation({
        ...information,
        [event.target.name]: URL.createObjectURL(event.target.files[0]),
      });
    } else {
      setInformation({
        ...information,
        [event.target.name]: event.target.value,
      });
    }
  };

  // const on_change_logo = (event) => {
  //   console.log(event.target.files);
  //   setLogo(URL.createObjectURL(event.target.files[0]));
  // };

  const mobileNumber = (event) => {
    var length = event.target.value.length;
    if (length >= 12) {
      event.target.value = event.target.value.slice(0, 11);
    }

    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  // const on_change_address = (event) => {
  //   console.log("On Changes...");
  //   var value = event.target.value;
  //   // let valueConcat = value.slice(",");
  //   // var filterValue = valueConcat.join("\n");
  //   setAddress(value);
  // };

  // const on_change_address = (event) => {
  //   console.log("On Changes...");
  //   let originalAddress = event.target.value;
  //   const formattedAddress = originalAddress.replace(/,(?=\S)/g, "\n");
  //   const addressLines = formattedAddress
  //     .split("\n")
  //     .filter((line) => line.trim());
  //   const finalFormattedAddress = addressLines.join("\n");
  //   originalAddress = finalFormattedAddress;

  //   setAddress(originalAddress);
  // };

  const on_change_website = (event) => {
    console.log("On Changes...");

    const website = information.website;
    const isValidURL =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6})\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        website
      );

    if (isValidURL) {
      alert("Valid URL");
    } else {
      alert("Please enter a valid URL");
    }
    setInformation({
      ...information,
      [event.target.name]: event.target.value,
    });
  };

  const { id } = useParams();
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
                label="Company Name"
                id="  "
                name="companyName"
                onChange={handalEvents}
                className="w-100"
                value={information.companyName}
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
                label="Company Tagline"
                id="  "
                name="tagline"
                className="w-100"
                onChange={handalEvents}
                value={information.tagline}
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
                label="Company Number"
                className="w-100"
                id="  "
                onChange={handalEvents}
                name="contactNumber"
                value={information.contectNumber}
                min="-10"
                max="10"
                onKeyPress={mobileNumber}
              />

              {/* <TextField
                  
                label="Company Number"
                id="  "
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
              <div className="d-flex align-items-center position-relative">
                <TextField
                  label="Company Website"
                  id="  "
                  onChange={handalEvents}
                  name="website"
                  value={information.website}
                  className="w-100"
                />
                <button
                  className="btn btn-success p-2 position-absolute end-0 m-2"
                  onClick={on_change_website}
                >
                  Verify
                </button>
              </div>
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
              <textarea
                label="Company Address"
                className="w-100"
                rows={3}
                id="  "
                name="address"
                onChange={handalEvents}
                value={information.address}
              ></textarea>
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
                name="logo"
                type="file"
                onChange={handalEvents}
                className="w-100"
                // value={information.logo}
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
                text={information.companyName}
                tagline={information.tagline}
                contectNumber={information.contectNumber}
                website={information.website}
                address={information.address}
                logo={information.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
