import React from "react";

function Cards(props) {
  // const event = props.address;
  // const on_change_address = (event) => {
  //   console.log("On Changes...");
  //   let originalAddress = event.target.value;
  //   const formattedAddress = originalAddress.replace(/,(?=\S)/g, "\n");
  //   const addressLines = formattedAddress
  //     .split("\n")
  //     .filter((line) => line.trim());
  //   const finalFormattedAddress = addressLines.join("\n");
  //   originalAddress = finalFormattedAddress;
  //   console.log(originalAddress);
  //   return originalAddress;
  // };

  return (
    <div>
      {props.cardnumber == 1 ? (
        <>
          <div className="container-fluid ">
            {/* <!-- First side --> */}
            <div className="main-bg-1-1 mt-3">
              <div className="text-center">
                <img
                  src={props.logo}
                  alt="Company Logo"
                  className="rounded-pill text-white"
                  style={{
                    background: "#a07b6e91",
                    maxHeight: "250px",
                    width: "250px",
                    marginTop: "50%",
                  }}
                />
              </div>
            </div>
            {/* <!-- Second Side --> */}
            <div className="main-bg-1-2 mt-3">
              <div className="text-center">
                <img
                  src={props.logo}
                  alt="Company Logo"
                  className="rounded-pill text-white"
                  style={{ maxHeight: "150px", width: "150px" }}
                />
                <div>
                  <div className="text1">{props.text}</div>
                  <div className="tagline1">{props.tagline}</div>
                </div>
                <div className="p-2" style={{ fontSize: "0.5rem" }}>
                  <div className="phone1">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <div>{props.contectNumber}</div>
                  </div>
                  <div className="address1">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>{props.address}</div>
                  </div>
                  <div className="website1" style={{}}>
                    <i className="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 2 ? (
        <div className="container-fluid">
          {/* <!-- First side --> */}
          <div className="main-bg-2-1 mt-3">
            <div className="">
              <img
                src={props.logo}
                className="logobg-2-1 rounded-pill"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center mt-5 m-2">
              <div>
                <img src={props.logo} className="logo2 rounded-pill" alt="" />
              </div>
              <div>
                <h4 className="fw-bold">{props.text}</h4>
                <div>{props.tagline}</div>
              </div>
            </div>
          </div>
          {/* <!-- Second Side --> */}
          <div className="main-bg-2-2 mt-3">
            <div className="">
              <img
                src={props.logo}
                className="logobg-2-2 rounded-pill"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-center align-items-center text-bg-warning bg-opacity-50">
              <div>
                <img
                  src={props.logo}
                  style={{ width: "60px" }}
                  className="rounded-pill"
                  alt=""
                />
              </div>
              <div>
                <h4 className="fw-bold">{props.text}</h4>
                <div>{props.tagline}</div>
              </div>
            </div>
            <div className="p-2" style={{ fontSize: "0.8rem" }}>
              <div className="my-1">
                <i className="fa-solid fa-mobile-screen"></i>
                <span> {props.contectNumber} </span>
              </div>
              <div
                className="my-1"
                style={{ maxHeight: "40px", overflow: "hidden" }}
              >
                <i className="fa-solid fa-globe"></i>
                {props.website}
              </div>
              <div
                className="my-1"
                style={{ height: "100px", overflow: "hidden" }}
              >
                <div>
                  <i className="fa-solid fa-location-dot"></i>
                  {props.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.cardnumber == 3 ? (
        <>
          <div className="container-fluid">
            <div>
              {/* <!-- First Side --> */}
              <div
                className="main-bg-2 m-4 container position-relative"
                style={{ fontSize: "0.7rem" }}
              >
                <div className="mt-4 text-center">
                  <div className="text-center">
                    {/* <!-- image logo --> */}
                    <img
                      src={props.logo}
                      alt="Company Logo"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="mt-1">
                    <h5 style={{ height: "52px", overflow: "hidden" }}>{props.text}</h5>
                    <div
                      className=""
                      style={{ height: "35px", overflow: "hidden" }}
                    >
                      {props.tagline}
                    </div>
                  </div>
                </div>
                <div className="position-absolute bottom-0">
                  {/* <!-- Footer Color --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="336"
                    height="46"
                    viewBox="0 0 336 46"
                    fill="none"
                  >
                    <path
                      d="M0 15.6152V46.0002H336V15.6152C330.812 32.8384 314.259 24.9756 298.941 15.6152C233.396 -24.4386 190.482 27.5966 154.906 15.6152C63.7412 -28.9407 18.2824 59.0478 0 15.6152Z"
                      fill="#440708"
                    />
                  </svg>
                </div>
              </div>
              {/* <!-- Second Side --> */}
              <div
                className="main-bg-2 m-4 container position-relative"
                style={{ fontSize: "0.7rem" }}
              >
                <div className="mt-2">
                  <div className="text-center">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <div>{props.contectNumber}</div>
                  </div>
                  <div
                    className="text-center"
                    style={{ height: "50px", overflow: "hidden" }}
                  >
                    <i className="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                  <div
                    className="text-center"
                    style={{ height: "85px", overflow: "hidden" }}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    <div>{props.address}</div>
                  </div>
                </div>
                <div className="position-absolute bottom-0">
                  {/* <!-- Footer Color --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="336"
                    height="46"
                    viewBox="0 0 336 46"
                    fill="none"
                  >
                    <path
                      d="M0 15.6152V46.0002H336V15.6152C330.812 32.8384 314.259 24.9756 298.941 15.6152C233.396 -24.4386 190.482 27.5966 154.906 15.6152C63.7412 -28.9407 18.2824 59.0478 0 15.6152Z"
                      fill="#440708"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 4 ? (
        <>
          <div className="container-fluid">
            {/* <!-- First Side --> */}
            <div className="main-bg-4-1 m-4 position-relative">
              <div className="">
                <div className="text-center">
                  <img
                    src={props.logo}
                    alt="Logo"
                    width="55px"
                    height="55px"
                    className="mt-4 m-2 rounded-pill"
                  />
                  <h5
                    style={{
                      height: "55px",
                      overflow: "hidden",
                    }}
                  >
                    {props.text}
                  </h5>
                  <div
                    className="mb-2 mt-1"
                    style={{
                      height: "35px",
                      overflow: "hidden",
                      fontSize: "0.7rem",
                    }}
                  >
                    {props.tagline}
                  </div>
                </div>
              </div>
              <div className="footer text-center align-items-center position-absolute bottom-0 w-100">
                <div className="">
                  <span
                    className="bg-black px-2 py-2 rounded-pill w-100"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Welcome to Our Shop
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            {/* <!-- Second Side --> */}
            <div className="main-bg-4-2 m-4" style={{ fontSize: "0.7rem" }}>
              <div className="row">
                <div className="mt-3">
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i className="fa-solid fa-mobile-screen"></i>{" "}
                    <div> {props.contectNumber} </div>
                  </div>
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <i className="fa-solid fa-globe"></i>
                    <div>{props.website}</div>
                  </div>
                  <div className="border-bottom border-warning border-2 rounded-pill text-center my-1">
                    <div style={{ height: "92px", overflow: "hidden" }}>
                      <i className="fa-solid fa-location-dot"></i>
                      <div>{props.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {props.cardnumber == 5 ? (
        <div className="container-fluid">
          {/* <!-- First Side --> */}
          <div className="main-bg-5-1 m-4 position-relative">
            <div className="design-1 position-absolute"></div>
            <div className="design-2 position-absolute"></div>
            <div className="">
              <div className="text-center card-5-bg m-2 p-3 text-white">
                <img
                  src={props.logo}
                  alt="Logo"
                  width="70px"
                  height="70px"
                  className="rounded-pill"
                />
                <h5
                  className=""
                  style={{
                    height: "55px",
                    overflow: "hidden",
                  }}
                >
                  {props.text}
                </h5>
                <div
                  className="mb-2 small"
                  style={{
                    width: "345px",
                    height: "45px",
                    overflow: "hidden",
                    zIndex: "1",
                  }}
                >
                  {props.tagline}
                </div>
              </div>
            </div>
            <div></div>
          </div>

          {/* <!-- Second Side --> */}
          <div className="main-bg-5-2 m-4 position-relative">
            <div className="design-4 position-absolute"></div>
            <div className="card-5-bg m-2 p-3 text-white">
              <div className="design-3 position-absolute"></div>
              <div className="m-2 row" style={{ fontSize: "0.5rem" }}>
                <div className="col-md-6 border-line-5">
                  <div className="mt-2">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <span> {props.contectNumber} </span>
                  </div>
                  <div
                    className="mt-2"
                    style={{ height: "40px", overflow: "hidden" }}
                  >
                    <i className="fa-solid fa-globe"></i>&nbsp;
                    {props.website}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img
                      src={props.logo}
                      alt="Logo"
                      width="30px"
                      height="30px"
                      className="rounded-pill"
                    />
                    <div
                      className=""
                      style={{
                        fontSize:"0.7rem",
                        height: "35px",
                        overflow: "hidden",
                      }}
                    >
                      {props.text}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-3 text-end w-100"
                style={{ fontSize: "0.7rem" }}
              >
                <div className="float-end w-75">
                  <i className="fa-solid fa-location-dot"></i> &nbsp;
                  <div
                    className="me-2"
                    style={{ height: "75px", overflow: "hidden" }}
                  >
                    {props.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.cardnumber == 6 ? (
        <div className="container-fluid mt-4">
          {/* <!-- first --> */}
          <div className="main-bg-6-1 m-2">
            <div className="m-3 ms-3">
              <img
                src={props.logo}
                alt="Company Logo"
                style={{ width: "100px" }}
              />
              <div
                className="fs-5 fw-bold ms-3"
                style={{
                  height: "65px",
                  overflow: "hidden",
                }}
              >
                {props.text}
              </div>
              <div
                className="ms-3 small fw-bold text-dark"
                style={{
                  height: "45px",
                  overflow: "hidden",
                }}
              >
                {props.tagline}
              </div>
            </div>
          </div>
          {/* <!-- second --> */}
          <div className="main-bg-6-2 m-2">
            <div className="row">
              <div className="col-md-4 bg-body-tertiary">
                <div className="m-3 ms-3 text-center">
                  <img
                    src={props.logo}
                    alt="Company Logo"
                    style={{ width: "50px" }}
                  />
                  <div
                    className="fw-bold ms-3"
                    style={{
                      height: "100px",
                    }}
                  >
                    {props.text}
                  </div>
                </div>
              </div>
              <div className="col-md-8 bg-6">
                <div className="mt-3 fw-bold" style={{ fontSize: "0.7rem" }}>
                  <div className="m-2">
                    <i
                      className="fa-solid fa-phone-flip fs-6"
                      style={{ color: "#005eff" }}
                    ></i>{" "}
                    {props.contectNumber}
                  </div>
                  <div
                    className="m-2 mt-2"
                    style={{ height: "40px", overflow: "hidden" }}
                  >
                    <i
                      className="fa-brands fa-searchengin fs-6"
                      style={{ color: "#005eff" }}
                    ></i>{" "}
                    {props.website}
                  </div>
                  <div
                    className="m-2 mt-2"
                    style={{ height: "125px", overflow: "hidden" }}
                  >
                    <i
                      className="fa-solid fa-location-arrow"
                      style={{ color: " #005eff" }}
                    ></i>{" "}
                    {props.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cards;
